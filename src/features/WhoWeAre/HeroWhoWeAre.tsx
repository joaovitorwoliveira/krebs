"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageProvider";
import { useInView, Variants } from "framer-motion";

import { motion } from "@/lib/motion";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroWhoWeAre() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.5, 0.7, 1.2],
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initializePlayer = () => {
      if (window.YT && window.YT.Player && videoRef.current) {
        playerRef.current = new window.YT.Player(videoRef.current, {
          videoId: "q6GyqlGyuJE",
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: "q6GyqlGyuJE",
            controls: 0,
            playsinline: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            fs: 0,
            cc_load_policy: 0,
            disablekb: 1,
          },
          events: {
            onStateChange: (event: any) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 px-6 md:px-20 lg:py-40 xl:px-30"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
        {/* Imagem à esquerda */}
        <motion.div variants={itemVariants} className="w-full lg:w-2/5">
          <div className="relative w-full aspect-[3/5] max-w-sm lg:max-w-md">
            <Image
              src="/images/team/andre-bw.jpg"
              alt="André Krebs"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto e vídeo à direita */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-3/5 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3 text-sm md:text-base font-inter text-dark leading-relaxed max-w-xl">
            <p className="text-justify">{t.office.hero.title}</p>
            <p className="text-justify">{t.office.hero.paragraph1}</p>
            <p className="text-justify">{t.office.hero.paragraph2}</p>
            <p className="text-justify">{t.office.hero.paragraph3}</p>
          </div>

          {/* Vídeo abaixo do texto - Desktop: à direita */}
          <div className="relative w-full aspect-video bg-black overflow-hidden group mt-10 lg:left-20 max-w-3xl">
            <div ref={videoRef} className="absolute inset-0 w-full h-full" />
            {/* Botões customizados de play/pause */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={togglePlayPause}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 cursor-pointer"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
