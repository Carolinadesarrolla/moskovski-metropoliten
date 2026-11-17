'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { KOLTSEVAYA_SLIDE } from '@/lib/metro-data';
import {
  getMetroTransitionType,
  MetroTransitionOverlay,
} from '@/components/MetroTransitionLayers';
import {
  PhotoStopLayer,
  type LightboxPayload,
} from '@/components/StationChapter';

interface KoltsevayaInteractiveProps {
  slideIndex: number;
  onOpenLightbox: (payload: LightboxPayload) => void;
}

export default function KoltsevayaInteractive({
  slideIndex,
  onOpenLightbox,
}: KoltsevayaInteractiveProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const transitionType = getMetroTransitionType(slideIndex);

  const photoCount = KOLTSEVAYA_SLIDE.photos.length;
  const totalStops = photoCount + 1;
  const step = 1 / (totalStops + 1);

  const stop0 = step;
  const stop1 = 2 * step;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 175,
    damping: 30,
    mass: 0.3,
  });

  const stageScale = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85), stop1, 1],
    transitionType === 'tunnel-3d'
      ? [0.86, 1, 1.02, 1.04]
      : [1.06, 1, 1.01, 1.04]
  );
  const stageRotateX = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85)],
    transitionType === 'tunnel-3d' ? [8, 0] : [0, 0]
  );
  const stageX = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85)],
    transitionType === 'train-glide' ? ['10%', '0%'] : ['0%', '0%']
  );

  const fadeInStart = Math.max(0.02, stop0 * 0.36);
  const fadeInEnd = Math.max(fadeInStart + 0.03, stop0 * 0.78);
  const holdEnd = stop0 + step * 0.24;
  const fadeOutEnd = Math.min(stop1 - step * 0.14, stop0 + step * 0.68);

  const scrimAndTextOpacity = useTransform(
    smoothProgress,
    [fadeInStart, fadeInEnd, holdEnd, fadeOutEnd],
    [0, 1, 1, 0]
  );
  const textY = useTransform(
    smoothProgress,
    [fadeInStart, fadeInEnd, holdEnd, fadeOutEnd],
    [44, 0, 0, -34]
  );

  const openLightbox = () => {
    onOpenLightbox({
      title: KOLTSEVAYA_SLIDE.title,
      subtitleMeta: `${KOLTSEVAYA_SLIDE.line.name} · ${KOLTSEVAYA_SLIDE.metadata}`,
      line: KOLTSEVAYA_SLIDE.line,
      architecturalNote: KOLTSEVAYA_SLIDE.architecturalNote,
      photos: KOLTSEVAYA_SLIDE.photos,
    });
  };

  return (
    <section
      id={KOLTSEVAYA_SLIDE.id}
      ref={sectionRef}
      style={{ height: `${totalStops * 100}vh` }}
      className="relative overflow-x-clip border-b border-[#D4AF37]/20"
    >
      {/* Snap Stop 0: Info + Lead Photo */}
      <div
        data-metro-section={KOLTSEVAYA_SLIDE.id}
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-screen snap-start snap-always pointer-events-none"
      />

      {/* Snap Stops 1..N: Pure Unobstructed Photos */}
      {KOLTSEVAYA_SLIDE.photos.map((_, idx) => (
        <div
          key={`koltsevaya-stop-${idx + 1}`}
          id={`${KOLTSEVAYA_SLIDE.id}-photo-${idx + 1}`}
          data-metro-section={`${KOLTSEVAYA_SLIDE.id}-photo-${idx + 1}`}
          aria-hidden="true"
          style={{ top: `${(idx + 1) * 100}vh` }}
          className="absolute inset-x-0 h-screen snap-start snap-always pointer-events-none"
        />
      ))}

      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden [perspective:1400px] bg-[#0A0A0B]">
        {KOLTSEVAYA_SLIDE.photos.map((photo, idx) => (
          <PhotoStopLayer
            key={`koltsevaya-img-${idx}`}
            photo={photo}
            photoIndex={idx}
            totalPhotos={photoCount}
            lineColor={KOLTSEVAYA_SLIDE.line.color}
            smoothProgress={smoothProgress}
            stageScale={stageScale}
            stageRotateX={stageRotateX}
            stageX={stageX}
          />
        ))}

        <motion.div
          aria-hidden="true"
          style={{ opacity: scrimAndTextOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-[#0A0A0B]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/92 via-[#0A0A0B]/65 to-transparent" />
        </motion.div>

        <div className="relative z-20 h-full max-w-[1440px] w-full mx-auto px-6 lg:px-10 pt-24 pb-14 lg:pb-16 flex items-end">
          <motion.div
            style={{ opacity: scrimAndTextOpacity, y: textY }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end will-change-transform"
          >
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 text-xs lg:text-sm text-[#D4AF37] mb-4 tabular-nums">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0"
                  style={{
                    backgroundColor: KOLTSEVAYA_SLIDE.line.color,
                    color: '#F4F0E8',
                  }}
                >
                  {KOLTSEVAYA_SLIDE.line.number}
                </span>
                <span className="text-[#F4F0E8] font-semibold">
                  {KOLTSEVAYA_SLIDE.line.name}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C8C2B6]">{KOLTSEVAYA_SLIDE.blockLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C8C2B6]">{KOLTSEVAYA_SLIDE.indexLabel}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F0E8] [text-wrap:balance] leading-[1.1] mb-3">
                {KOLTSEVAYA_SLIDE.title}
              </h2>
              <p className="font-serif italic text-lg lg:text-2xl text-[#D4AF37] mb-6">
                {KOLTSEVAYA_SLIDE.subtitle}
              </p>

              {/* Main 3 Key Points */}
              <ul className="space-y-3.5 max-w-2xl mb-6">
                {KOLTSEVAYA_SLIDE.keyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-sm lg:text-base leading-relaxed text-[#E2DDD3]"
                  >
                    <span className="font-serif text-sm text-[#D4AF37] tabular-nums pt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Smaller Fun Fact: Clockwise Male / Counterclockwise Female Voice Announcements */}
              <div className="max-w-2xl py-3 px-4 mb-5 bg-[#141418]/80 border border-[#D4AF37]/25 rounded-sm">
                <p className="text-[11px] font-semibold text-[#D4AF37] mb-1">
                  {KOLTSEVAYA_SLIDE.funFact.label}
                </p>
                <p className="text-xs leading-relaxed text-[#C8C2B6]">
                  {KOLTSEVAYA_SLIDE.funFact.text}
                </p>
              </div>

              <p className="text-xs text-[#C8C2B6] pt-3 border-t border-[#D4AF37]/25 max-w-xl tabular-nums">
                {KOLTSEVAYA_SLIDE.metadata} · {KOLTSEVAYA_SLIDE.architecturalNote}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <button
                type="button"
                onClick={openLightbox}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#141418]/90 hover:bg-[#1D1D23] border border-[#D4AF37]/45 text-xs font-semibold text-[#F4F0E8] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>
                  {photoCount > 1
                    ? `Открыть галерею (${photoCount} фото)`
                    : 'Открыть снимок зала'}
                </span>
              </button>
              <span className="font-serif italic text-xs text-[#A8A296] lg:text-right">
                {KOLTSEVAYA_SLIDE.photos[0]?.caption}
              </span>
            </div>
          </motion.div>
        </div>

        <MetroTransitionOverlay
          progress={smoothProgress}
          type={transitionType}
          lineColor={KOLTSEVAYA_SLIDE.line.color}
          settledAt={stop0}
        />
      </div>
    </section>
  );
}
