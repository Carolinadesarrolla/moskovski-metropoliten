'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { METRO_CHAPTERS, type ComparisonSlide } from '@/lib/metro-data';
import {
  getMetroTransitionType,
  MetroTransitionOverlay,
} from '@/components/MetroTransitionLayers';
import SovietMetroPhotoFrame from '@/components/SovietMetroPhotoFrame';

interface ComparisonSlideSectionProps {
  slide: ComparisonSlide;
  slideIndex: number;
  globalSlideIndex: number;
}

export default function ComparisonSlideSection({
  slide,
  slideIndex,
  globalSlideIndex,
}: ComparisonSlideSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const transitionType = getMetroTransitionType(globalSlideIndex);

  const hasPhoto = (slide.photos?.length ?? 0) > 0;
  const photo = slide.photos?.[0];

  // Total scroll stops: 1 text stop + (1 photo stop if photo exists)
  const totalStops = hasPhoto ? 2 : 1;
  const step = 1 / (totalStops + 1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 175,
    damping: 30,
    mass: 0.3,
  });

  // ── Text slide motion (stop 0) ──
  const textStop = step; // text snap point
  const photoStop = 2 * step; // photo snap point

  const contentY = useTransform(
    smoothProgress,
    hasPhoto
      ? [0.08, 0.36, textStop + step * 0.24, Math.min(photoStop - step * 0.14, textStop + step * 0.68)]
      : [0.08, 0.36, 0.64, 0.92],
    [56, 0, 0, -40]
  );
  const contentX = useTransform(
    smoothProgress,
    [0.08, 0.36],
    transitionType === 'train-glide' ? [64, 0] : [0, 0]
  );
  const contentScale = useTransform(
    smoothProgress,
    [0.08, 0.36],
    transitionType === 'tunnel-3d' ? [0.9, 1] : [1, 1]
  );
  const contentRotateX = useTransform(
    smoothProgress,
    [0.08, 0.36],
    transitionType === 'tunnel-3d' ? [8, 0] : [0, 0]
  );
  const contentOpacity = useTransform(
    smoothProgress,
    hasPhoto
      ? [0.06, 0.3, textStop + step * 0.24, Math.min(photoStop - step * 0.14, textStop + step * 0.68)]
      : [0.06, 0.3, 0.72, 0.94],
    [0.08, 1, 1, 0.2]
  );

  // ── Photo layer motion (stop 1) — only when photo exists ──
  const photoRevealStart = hasPhoto ? Math.max(0, photoStop - step * 0.72) : 0;
  const photoRevealEnd = hasPhoto ? Math.min(1, photoStop - step * 0.18) : 0;
  const photoLayerOpacity = useTransform(
    smoothProgress,
    [photoRevealStart, photoRevealEnd],
    [0, 1]
  );
  const photoExtraScale = useTransform(
    smoothProgress,
    [photoRevealStart, photoStop, 1],
    [1.05, 1, 1.02]
  );

  const backdrop = METRO_CHAPTERS[slideIndex % METRO_CHAPTERS.length];
  const isReversed = slideIndex % 2 === 1;

  return (
    <section
      id={slide.id}
      ref={sectionRef}
      data-metro-section={slide.id}
      style={{ height: `${totalStops * 100}vh` }}
      className="relative overflow-x-clip border-b border-[#D4AF37]/20"
    >
      {/* Snap Stop 0: Text / Comparison Table */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-screen snap-start snap-always pointer-events-none"
      />

      {/* Snap Stop 1: Pure Fullscreen Photo (only when photo exists) */}
      {hasPhoto && (
        <div
          id={`${slide.id}-photo-1`}
          data-metro-section={`${slide.id}-photo-1`}
          aria-hidden="true"
          style={{ top: '100vh' }}
          className="absolute inset-x-0 h-screen snap-start snap-always pointer-events-none"
        />
      )}

      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden [perspective:1400px] bg-[#0A0A0B]">

        {/* ── Atmospheric backdrop (station photo) behind comparison table ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backdrop.photos[0].src}
            alt={backdrop.photos[0].alt}
            fill
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center opacity-45"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#0A0A0B]/78" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/85"
          />
        </div>

        {/* ── Fullscreen Photo Layer (reveals at stop 1) ── */}
        {hasPhoto && photo && (
          <motion.div
            style={{ opacity: photoLayerOpacity, scale: photoExtraScale, zIndex: 5 }}
            className="absolute inset-0 will-change-transform"
          >
            <SovietMetroPhotoFrame
              photo={photo}
              photoIndex={0}
              totalPhotos={1}
              lineColor="#D4AF37"
            />
          </motion.div>
        )}

        {/* ── Text & Table content (stop 0) ── */}
        <motion.div
          style={{
            y: contentY,
            x: contentX,
            scale: contentScale,
            rotateX: contentRotateX,
            opacity: contentOpacity,
          }}
          className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-10 will-change-transform h-full flex flex-col justify-center pt-22 pb-12 lg:pb-14"
        >
          {/* Slide Header */}
          <div
            className={`flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#D4AF37]/25 ${
              isReversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`max-w-3xl ${isReversed ? 'lg:text-right' : ''}`}>
              <p className="text-xs text-[#D4AF37] mb-2 tabular-nums">
                {slide.indexLabel}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F0E8] [text-wrap:balance] leading-[1.12] mb-2">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#C8C2B6] leading-relaxed">
                {slide.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#C8C2B6] shrink-0 tabular-nums">
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]" />
                <span>Мадрид</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
                <span>Москва</span>
              </span>
            </div>
          </div>

          {/* Crisp PowerPoint Data Matrix */}
          <div className="mt-6 bg-[#0A0A0B]/85 border border-[#D4AF37]/30 rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D4AF37]/25 bg-[#141418]/90 text-[11px] sm:text-xs text-[#D4AF37] tracking-wide">
                    <th className="py-3.5 px-4 sm:px-6 font-semibold w-[24%]">Показатель</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold w-[27%]">Мадрид</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold w-[31%]">Москва</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold w-[18%]">Преимущество</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4AF37]/15 text-xs sm:text-sm tabular-nums">
                  {slide.rows.map((row) => (
                    <tr
                      key={row.category}
                      className="hover:bg-[#141418]/75 transition-colors"
                    >
                      <td className="py-3 px-4 sm:px-6 font-semibold text-[#F4F0E8]">
                        {row.category}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-[#C8C2B6]">
                        {row.madrid}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-[#F4F0E8] font-medium">
                        {row.moscow}
                      </td>
                      <td className="py-3 px-4 sm:px-6">
                        <span
                          className={
                            row.advantage === 'moscow'
                              ? 'text-[#D4AF37] font-semibold'
                              : row.advantage === 'madrid'
                              ? 'text-[#93C5FD] font-semibold'
                              : 'text-[#A8A296]'
                          }
                        >
                          {row.advantageLabel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {slide.highlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 mt-5 border-t border-[#D4AF37]/25 tabular-nums">
              {slide.highlights.map((item) => (
                <div key={item.value}>
                  <div
                    className={`font-serif text-xl sm:text-2xl font-bold ${
                      item.tone === 'gold'
                        ? 'text-[#D4AF37]'
                        : item.tone === 'blue'
                        ? 'text-[#93C5FD]'
                        : 'text-[#F4F0E8]'
                    }`}
                  >
                    {item.value}
                  </div>
                  <p className="text-xs text-[#C8C2B6] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <MetroTransitionOverlay
          progress={smoothProgress}
          type={transitionType}
          lineColor="#D4AF37"
          settledAt={0.5}
        />
      </div>
    </section>
  );
}
