'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_MEDIA } from '@/lib/metro-data';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -40]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure React SSR/hydration never blocks muted autoplay
    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked only in strict environments; poster remains visible
        });
      }
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', attemptPlay);
    };
  }, []);

  return (
    <section
      id="hero"
      data-metro-section="hero"
      ref={containerRef}
      className="relative min-h-screen snap-start snap-always flex items-center justify-center pt-16 overflow-hidden border-b border-[#D4AF37]/20 bg-[#0A0A0B]"
    >
      {/* Fullscreen Looping Video Background + Instant Poster Layer */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        {/* Instant poster fallback image so screen is never black while buffering */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_MEDIA.posterSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <video
          ref={videoRef}
          src={HERO_MEDIA.videoSrc}
          poster={HERO_MEDIA.posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="relative z-10 w-full h-full object-cover object-center"
        />

        {/* Overall dark contrast scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 bg-[#0A0A0B]/48"
        />

        {/* Strong bottom black gradient covering embedded preview/subtitle text in the video */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-20 h-[36%] bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/95 to-transparent"
        />

        {/* Subtle top gradient beneath header */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-[#0A0A0B]/80 to-transparent"
        />
      </motion.div>

      {/* Centered Minimalist Title Slide */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-30 max-w-5xl w-full mx-auto px-6 text-center will-change-transform"
      >
        <div className="mb-7 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/aistudio/______________b1b55682.svg"
            alt="Логотип Московского метрополитена"
            className="w-16 h-20 object-contain drop-shadow-[0_6px_22px_rgba(0,0,0,0.85)]"
          />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[1.05] tracking-normal text-[#F4F0E8] [text-wrap:balance] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          МОСКОВСКИЙ МЕТРОПОЛИТЕН
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] [text-wrap:balance] max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Подземные дворцы, инженерное чудо и архитектура столицы
        </p>
      </motion.div>
    </section>
  );
}
