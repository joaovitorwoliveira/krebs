import Image from "next/image";
import Link from "next/link";
import {
  introductionContent,
  workMethodContent,
  awardsContent,
  teamContent,
} from "./office";

export default function Office() {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 opacity-5 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/curvas.svg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-[1250px] mx-auto">
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
            <div className="order-2 lg:order-1">
              <Image
                className="w-full h-auto shadow-lg"
                src={introductionContent.image.src}
                alt={introductionContent.image.alt}
                unoptimized
                width={400}
                height={400}
              />
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-3xl font-semibold text-dark mb-6">
                {introductionContent.title}
              </h1>
              <div className="text-sm font-light text-green-5 mb-4">
                {introductionContent.text.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl font-semibold text-dark mb-6">
                {workMethodContent.title}
              </h2>
              <div className="text-sm font-light text-green-5 mb-4">
                {workMethodContent.text.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <Image
                className="w-full h-auto shadow-lg"
                src={workMethodContent.image.src}
                alt={workMethodContent.image.alt}
                unoptimized
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-[1250px] mx-auto">
            <h2 className="text-3xl font-semibold text-dark mb-6">
              {awardsContent.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {awardsContent.awards.map((award, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-dark mb-2">
                    {award.year} {award.title}
                  </h3>
                  <p className="text-sm font-light text-green-5 mb-2">
                    {award.description}
                  </p>
                  {award.project && (
                    <p className="text-sm font-light text-green-5 italic">
                      {award.project}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-dark mb-6">
              {teamContent.title}
            </h2>
            <div className="mb-6">
              <Image
                className="w-full max-w-md h-auto shadow-lg mx-auto grayscale"
                src={teamContent.image}
                alt={teamContent.title}
                unoptimized
                width={400}
                height={400}
              />
            </div>
            <div className="text-sm font-light text-green-5">
              <Link
                href="/equipe"
                className="transition-colors duration-200 border p-2 border-green-4 hover:bg-green-4 hover:text-white"
              >
                {teamContent.text}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
