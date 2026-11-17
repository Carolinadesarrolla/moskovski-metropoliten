'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { LightboxPayload } from '@/components/StationChapter';
import SovietMetroPhotoFrame from '@/components/SovietMetroPhotoFrame';

interface PhotoLightboxProps {
  target: LightboxPayload | null;
  onClose: () => void;
}

function PhotoLightboxContent({
  target,
  onClose,
}: {
  target: LightboxPayload;
  onClose: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const totalPhotos = target.photos.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && totalPhotos > 1) {
        setActiveIdx((prev) => (prev + 1) % totalPhotos);
      } else if (e.key === 'ArrowLeft' && totalPhotos > 1) {
        setActiveIdx((prev) => (prev - 1 + totalPhotos) % totalPhotos);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPhotos, onClose]);

  const currentPhoto = target.photos[activeIdx] || target.photos[0];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={target.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0A0A0B]/95 flex items-center justify-center p-4 sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full bg-[#141418] border border-[#D4AF37]/30 rounded-sm overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0"
              style={{
                backgroundColor: target.line.color,
                color: target.line.textColor || '#F4F0E8',
              }}
            >
              {target.line.number}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#F4F0E8] truncate">
                {target.title}
              </h3>
              <p className="text-[11px] text-[#A8A296] truncate tabular-nums">
                {target.subtitleMeta}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {totalPhotos > 1 && (
              <span className="text-xs text-[#D4AF37] tabular-nums">
                {activeIdx + 1} / {totalPhotos}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть просмотр"
              className="p-2 text-[#C8C2B6] hover:text-[#F4F0E8] hover:bg-[#1D1D23] rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Image Stage */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-[#0A0A0B] overflow-hidden">
          <SovietMetroPhotoFrame
            photo={currentPhoto}
            photoIndex={activeIdx}
            totalPhotos={totalPhotos}
            lineColor={target.line.color}
            showCaption={false}
          />

          {totalPhotos > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev - 1 + totalPhotos) % totalPhotos)
                }
                aria-label="Предыдущее фото"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#0A0A0B]/80 hover:bg-[#141418] border border-[#D4AF37]/35 text-[#F4F0E8] rounded-sm transition-colors cursor-pointer z-30"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev + 1) % totalPhotos)
                }
                aria-label="Следующее фото"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#0A0A0B]/80 hover:bg-[#141418] border border-[#D4AF37]/35 text-[#F4F0E8] rounded-sm transition-colors cursor-pointer z-30"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Caption + Optional Thumbnail Strip */}
        <div className="px-5 py-3.5 border-t border-[#D4AF37]/20 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#C8C2B6]">
            <span className="font-serif italic">{currentPhoto.caption}</span>
            <span className="text-[#A8A296]">{target.architecturalNote}</span>
          </div>

          {totalPhotos > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-1">
              {target.photos.map((photo, idx) => (
                <button
                  key={`thumb-${idx}`}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-20 h-12 rounded-sm overflow-hidden border transition-all cursor-pointer shrink-0 ${idx === activeIdx
                    ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]'
                    : 'border-[#D4AF37]/25 opacity-65 hover:opacity-100'
                    }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="80px"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoLightbox({ target, onClose }: PhotoLightboxProps) {
  return (
    <AnimatePresence>
      {target && (
        <PhotoLightboxContent
          key={target.title}
          target={target}
          onClose={onClose}
        />
      )}
    </AnimatePresence>
  );
}
