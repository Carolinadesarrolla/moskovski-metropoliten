'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  COMPARISON_SLIDES,
  METRO_CHAPTERS,
} from '@/lib/metro-data';
import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import StationChapter, { type LightboxPayload } from '@/components/StationChapter';
import ComparisonSlideSection from '@/components/MoscowMadridComparison';
import KoltsevayaInteractive from '@/components/KoltsevayaInteractive';
import GrandFinaleSection from '@/components/GrandFinaleSection';
import InteractiveMetroMapModal from '@/components/InteractiveMetroMapModal';
import PhotoLightbox from '@/components/PhotoLightbox';
import PresentationFooter from '@/components/PresentationFooter';

export default function MetroPresentationShell() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [lightboxTarget, setLightboxTarget] = useState<LightboxPayload | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  // Always start presentation at the intro video slide when no hash is targeted
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  const handleJumpToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard slide navigation (ArrowDown/PageDown & ArrowUp/PageUp) stepping through all slides & sequential photo stops
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMapOpen || lightboxTarget) return;
      if (
        e.key !== 'ArrowDown' &&
        e.key !== 'ArrowUp' &&
        e.key !== 'PageDown' &&
        e.key !== 'PageUp'
      ) {
        return;
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-metro-section]')
      );
      if (sections.length === 0) return;

      const getAbsoluteTop = (el: HTMLElement) =>
        el.getBoundingClientRect().top + window.scrollY;

      const viewportMid = window.scrollY + window.innerHeight * 0.45;
      let currentIdx = 0;
      sections.forEach((sec, idx) => {
        if (getAbsoluteTop(sec) <= viewportMid) {
          currentIdx = idx;
        }
      });

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const nextIdx = Math.min(sections.length - 1, currentIdx + 1);
        if (nextIdx !== currentIdx) {
          e.preventDefault();
          sections[nextIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const prevIdx = Math.max(0, currentIdx - 1);
        if (prevIdx !== currentIdx) {
          e.preventDefault();
          sections[prevIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMapOpen, lightboxTarget]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F0E8] relative">
      {/* Thin gilded progress line beneath header */}
      <motion.div
        style={{ scaleX }}
        aria-hidden="true"
        className="fixed top-16 left-0 right-0 h-[2px] bg-[#D4AF37] origin-left z-40 pointer-events-none"
      />

      <TopNav onOpenMap={() => setIsMapOpen(true)} />

      <main>
        {/* Блок 1 · Слайд 1: Титульный слайд */}
        <HeroSection />

        {/* Блок 2 (Слайды 2–5) и Блок 3 (Слайды 6–15) */}
        {METRO_CHAPTERS.map((chapter, idx) => (
          <StationChapter
            key={chapter.id}
            chapter={chapter}
            slideIndex={idx}
            onOpenLightbox={(payload) => setLightboxTarget(payload)}
          />
        ))}

        {/* Блок 4 (Слайды 16–19): Сравнительные таблицы Москва — Мадрид */}
        {COMPARISON_SLIDES.map((slide, idx) => (
          <ComparisonSlideSection
            key={slide.id}
            slide={slide}
            slideIndex={idx}
            globalSlideIndex={METRO_CHAPTERS.length + idx}
          />
        ))}

        {/* Блок 5 · Слайд 20: «Кольцевая линия» */}
        <KoltsevayaInteractive
          slideIndex={METRO_CHAPTERS.length + COMPARISON_SLIDES.length}
          onOpenLightbox={(payload) => setLightboxTarget(payload)}
        />

        {/* Блок 5 · Слайд 21: Гранд-финал */}
        <GrandFinaleSection
          slideIndex={METRO_CHAPTERS.length + COMPARISON_SLIDES.length + 1}
        />
      </main>

      <PresentationFooter />

      <InteractiveMetroMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onJumpToChapter={handleJumpToChapter}
      />

      <PhotoLightbox
        target={lightboxTarget}
        onClose={() => setLightboxTarget(null)}
      />
    </div>
  );
}
