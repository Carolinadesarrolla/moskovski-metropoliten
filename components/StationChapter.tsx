'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { Maximize2 } from 'lucide-react';
import type { MetroChapter, MetroPhoto } from '@/lib/metro-data';
import {
  getMetroTransitionType,
  MetroTransitionOverlay,
} from '@/components/MetroTransitionLayers';
import SovietMetroPhotoFrame from '@/components/SovietMetroPhotoFrame';

export interface LightboxPayload {
  title: string;
  subtitleMeta: string;
  line: MetroChapter['line'];
  architecturalNote: string;
  photos: MetroPhoto[];
}

interface PhotoStopLayerProps {
  photo: MetroPhoto;
  photoIndex: number;
  totalPhotos: number;
  lineColor?: string;
  smoothProgress: MotionValue<number>;
  stageScale: MotionValue<number>;
  stageRotateX: MotionValue<number>;
  stageX: MotionValue<string>;
}

export function PhotoStopLayer({
  photo,
  photoIndex,
  totalPhotos,
  lineColor = '#D4AF37',
  smoothProgress,
  stageScale,
  stageRotateX,
  stageX,
}: PhotoStopLayerProps) {
  const totalStops = totalPhotos + 1;
  const step = 1 / (totalStops + 1);

  const stop0 = step; // Stop 0: Text + Lead Photo Backdrop
  const stop1 = 2 * step; // Stop 1: Pure Photo 0 Stop

  // Cover backdrop (object-cover) fills screen during Stop 0 (while text card is visible)
  // and smoothly fades out before Stop 1 to reveal the uncropped SovietMetroPhotoFrame
  const coverFadeStart = stop0 + step * 0.22;
  const coverFadeEnd = Math.min(stop1 - step * 0.12, stop0 + step * 0.72);

  const coverBackdropOpacity = useTransform(
    smoothProgress,
    [0, stop0, coverFadeStart, coverFadeEnd],
    [1, 1, 1, 0]
  );

  const targetStopProgress = (photoIndex + 2) * step;
  const revealStart = Math.max(0, targetStopProgress - step * 0.72);
  const revealEnd = Math.min(1, targetStopProgress - step * 0.18);

  const layerOpacity = useTransform(
    smoothProgress,
    [revealStart, revealEnd],
    [0, 1]
  );

  const extraScale = useTransform(
    smoothProgress,
    [revealStart, targetStopProgress, 1],
    [1.05, 1, 1.02]
  );

  if (photoIndex === 0) {
    return (
      <div className="absolute inset-0 z-0 will-change-transform">
        {/* Pure Fullscreen Photo View for Stop 1 (object-contain with animated Soviet/Metro flanks) */}
        <div className="absolute inset-0 z-0">
          <SovietMetroPhotoFrame
            photo={photo}
            photoIndex={0}
            totalPhotos={totalPhotos}
            lineColor={lineColor}
            scale={stageScale}
            rotateX={stageRotateX}
            x={stageX}
          />
        </div>

        {/* Text-Slide Backdrop for Stop 0: object-cover filling screen while text card is visible */}
        <motion.div
          style={{
            opacity: coverBackdropOpacity,
            scale: stageScale,
            rotateX: stageRotateX,
            x: stageX,
          }}
          className="absolute inset-0 z-[1] pointer-events-none will-change-transform"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      style={{ opacity: layerOpacity, scale: extraScale, zIndex: photoIndex }}
      className="absolute inset-0 will-change-transform"
    >
      <SovietMetroPhotoFrame
        photo={photo}
        photoIndex={photoIndex}
        totalPhotos={totalPhotos}
        lineColor={lineColor}
      />
    </motion.div>
  );
}

interface StationChapterProps {
  chapter: MetroChapter;
  slideIndex: number;
  onOpenLightbox: (payload: LightboxPayload) => void;
}

export default function StationChapter({
  chapter,
  slideIndex,
  onOpenLightbox,
}: StationChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const transitionType = getMetroTransitionType(slideIndex);

  const photoCount = chapter.photos.length;
  const totalStops = photoCount + 1; // Stop 0 (Info + Photo 1) + N clean photo stops
  const step = 1 / (totalStops + 1);

  const stop0 = step; // Text + Photo 1 snap point
  const stop1 = 2 * step; // Pure Photo 1 snap point

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 175,
    damping: 30,
    mass: 0.3,
  });

  // Entry kinematics settled cleanly by stop0
  const stageScale = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85), stop1, 1],
    transitionType === 'tunnel-3d'
      ? [0.88, 1, 1.02, 1.04]
      : [1.05, 1, 1.01, 1.04]
  );
  const stageRotateX = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85)],
    transitionType === 'tunnel-3d' ? [6, 0] : [0, 0]
  );
  const stageX = useTransform(
    smoothProgress,
    [0.02, Math.max(0.05, stop0 * 0.85)],
    transitionType === 'train-glide' ? ['8%', '0%'] : ['0%', '0%']
  );

  // Scrim & Text appear at stop0 and fade away completely before stop1 so all photo stops are 100% unobstructed
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
  const textX = useTransform(
    smoothProgress,
    [fadeInStart, fadeInEnd],
    transitionType === 'train-glide' ? [-36, 0] : [0, 0]
  );

  const variant = chapter.layoutVariant;
  const isRight = variant === 'bottom-right' || variant === 'center-right';
  const isCenter = variant === 'center-left' || variant === 'center-right';

  const openChapterLightbox = () => {
    onOpenLightbox({
      title: chapter.title,
      subtitleMeta: `${chapter.line.name} · ${chapter.metadata}`,
      line: chapter.line,
      architecturalNote: chapter.architecturalNote,
      photos: chapter.photos,
    });
  };

  return (
    <section
      id={chapter.id}
      ref={sectionRef}
      style={{ height: `${totalStops * 100}vh` }}
      className="relative overflow-x-clip border-b border-[#D4AF37]/15"
    >
      {/* Snap Stop 0: Information Slide + Lead Photo */}
      <div
        data-metro-section={chapter.id}
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-screen snap-start snap-always pointer-events-none"
      />

      {/* Snap Stops 1..N: Pure Unobstructed Fullscreen Photos */}
      {chapter.photos.map((photo, idx) => (
        <div
          key={`${chapter.id}-stop-${idx + 1}`}
          id={`${chapter.id}-photo-${idx + 1}`}
          data-metro-section={`${chapter.id}-photo-${idx + 1}`}
          aria-hidden="true"
          style={{ top: `${(idx + 1) * 100}vh` }}
          className="absolute inset-x-0 h-screen snap-start snap-always pointer-events-none"
        />
      ))}

      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden [perspective:1400px] bg-[#0A0A0B]">
        {/* Sequential Fullscreen Photo Layers */}
        {chapter.photos.map((photo, idx) => (
          <PhotoStopLayer
            key={`${chapter.id}-img-${idx}`}
            photo={photo}
            photoIndex={idx}
            totalPhotos={photoCount}
            lineColor={chapter.line.color}
            smoothProgress={smoothProgress}
            stageScale={stageScale}
            stageRotateX={stageRotateX}
            stageX={stageX}
          />
        ))}

        {/* Contrast Scrims (fade completely away for Stop 1..N so photos are 100% pure) */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: scrimAndTextOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/62 to-[#0A0A0B]/28" />
          <div
            className={
              isRight
                ? 'absolute inset-0 bg-gradient-to-l from-[#0A0A0B]/92 via-[#0A0A0B]/62 to-transparent'
                : 'absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/92 via-[#0A0A0B]/62 to-transparent'
            }
          />
        </motion.div>

        {/* Text & Action Layer (Stop 0 only) */}
        <div
          className={`relative z-20 h-full max-w-[1440px] w-full mx-auto px-6 lg:px-10 pt-24 pb-14 lg:pb-16 flex ${isCenter ? 'items-center' : 'items-end'
            }`}
        >
          <motion.div
            style={{ opacity: scrimAndTextOpacity, y: textY, x: textX }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end will-change-transform"
          >
            <div className={isRight ? 'lg:col-span-8 lg:order-2' : 'lg:col-span-8 lg:order-1'}>
              <div className="flex flex-wrap items-center gap-3 text-xs lg:text-sm text-[#D4AF37] mb-4 tabular-nums">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0"
                  style={{
                    backgroundColor: chapter.line.color,
                    color: chapter.line.textColor || '#F4F0E8',
                  }}
                >
                  {chapter.line.number}
                </span>
                <span className="text-[#F4F0E8] font-semibold">{chapter.line.name}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C8C2B6]">{chapter.blockLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C8C2B6]">{chapter.indexLabel}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F0E8] [text-wrap:balance] leading-[1.1] mb-3">
                {chapter.title}
              </h2>
              <p className="font-serif italic text-lg lg:text-2xl text-[#D4AF37] mb-6">
                {chapter.subtitle}
              </p>

              <ul className="space-y-3.5 max-w-2xl mb-7">
                {chapter.keyPoints.map((point, idx) => (
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

              <p className="text-xs text-[#C8C2B6] pt-4 border-t border-[#D4AF37]/25 max-w-xl tabular-nums">
                {chapter.metadata} · {chapter.architecturalNote}
              </p>
            </div>

            <div
              className={`lg:col-span-4 flex flex-col gap-3 ${isRight ? 'lg:order-1 lg:items-start' : 'lg:order-2 lg:items-end'
                }`}
            >
              <button
                type="button"
                onClick={openChapterLightbox}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#141418]/90 hover:bg-[#1D1D23] border border-[#D4AF37]/45 text-xs font-semibold text-[#F4F0E8] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>
                  {photoCount > 1
                    ? `Открыть галерею (${photoCount} фото)`
                    : 'Открыть снимок зала'}
                </span>
              </button>
              <span
                className={`font-serif italic text-xs text-[#A8A296] ${isRight ? 'lg:text-left' : 'lg:text-right'
                  }`}
              >
                {chapter.photos[0]?.caption}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Metro-Inspired Entry Animation Overlay */}
        <MetroTransitionOverlay
          progress={smoothProgress}
          type={transitionType}
          lineColor={chapter.line.color}
          settledAt={stop0}
        />
      </div>
    </section>
  );
}
