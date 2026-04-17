import { UTApi } from "uploadthing/server";
import * as fs from "fs";
import * as path from "path";

const IMAGE_DB_URL = "https://8vncue4ikz.ufs.sh/f/";

interface ImageEntry {
  number: number;
  url: string;
}

type ImageCache = Record<string, ImageEntry[]>;

async function fetchImages() {
  const token = process.env.UPLOADTHING_TOKEN;
  if (!token) {
    console.error("UPLOADTHING_TOKEN is not set. Skipping image fetch.");
    console.error("Using existing image-cache.json as fallback.");
    process.exit(0);
  }

  const utapi = new UTApi({ token });

  console.log("Fetching files from UploadThing...");

  let allFiles: { key: string; name: string; status: string }[] = [];
  let offset = 0;
  const limit = 500;

  // Paginate in case there are more than 500 files
  while (true) {
    const response = await utapi.listFiles({ limit, offset });
    const files = response.files;
    allFiles = allFiles.concat(files);
    console.log(`Fetched ${files.length} files (offset: ${offset})`);

    if (!response.hasMore) break;
    offset += limit;
  }

  console.log(`Total files: ${allFiles.length}`);

  // Parse filenames and group by project slug
  // Pattern: {slug}-{number}.{ext} or {slug}-foto-{number}.{ext}
  const filenameRegex = /^(.+?)(?:-foto)?-(\d+)\.\w+$/;
  const cache: ImageCache = {};

  for (const file of allFiles) {
    if (file.status !== "Uploaded") continue;

    const match = file.name.match(filenameRegex);
    if (!match) {
      console.warn(`Skipping file with unexpected name: ${file.name}`);
      continue;
    }

    const slug = match[1];
    const number = parseInt(match[2], 10);
    const url = `${IMAGE_DB_URL}${file.key}`;

    if (!cache[slug]) {
      cache[slug] = [];
    }

    cache[slug].push({ number, url });
  }

  // Sort images within each project by number
  for (const slug of Object.keys(cache)) {
    cache[slug].sort((a, b) => a.number - b.number);
  }

  // Write cache file
  const outputPath = path.join(
    __dirname,
    "..",
    "src",
    "common",
    "data",
    "image-cache.json"
  );
  fs.writeFileSync(outputPath, JSON.stringify(cache, null, 2));

  console.log(`\nImage cache written to ${outputPath}`);
  console.log(`Projects found: ${Object.keys(cache).length}`);
  for (const [slug, images] of Object.entries(cache)) {
    console.log(`  ${slug}: ${images.length} images`);
  }
}

fetchImages().catch((err) => {
  console.error("Failed to fetch images:", err);
  process.exit(1);
});
