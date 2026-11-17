'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { FINALE_DATA, OFFICIAL_METRO_LOGO_SRC } from '@/lib/metro-data';
import {
  getMetroTransitionType,
  MetroTransitionOverlay,
} from '@/components/MetroTransitionLayers';

interface GrandFinaleSectionProps {
  slideIndex: number;
}

export default function GrandFinaleSection({ slideIndex }: GrandFinaleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const transitionType = getMetroTransitionType(slideIndex);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 175,
    damping: 30,
    mass: 0.3,
  });

  const stageOpacity = useTransform(smoothProgress, [0.06, 0.3, 0.85, 1], [0, 1, 1, 0.85]);
  const stageY = useTransform(smoothProgress, [0.06, 0.34], [48, 0]);
  const archScale = useTransform(smoothProgress, [0.06, 0.45], [0.9, 1]);

  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id={FINALE_DATA.id}
      ref={sectionRef}
      data-metro-section={FINALE_DATA.id}
      className="relative min-h-screen snap-start snap-always flex flex-col justify-center pt-24 pb-16 overflow-hidden border-b border-[#D4AF37]/20 bg-[#0A0A0B]"
    >
      {/* Architectural Vault & Concentric Tunnel Geometry Backdrop */}
      <motion.div
        aria-hidden="true"
        style={{ scale: archScale }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none will-change-transform"
      >
        {/* Subtle Crimson & Bronze Radial Aura */}
        <div
          className="w-[680px] h-[680px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(circle, rgba(217,35,46,0.22) 0%, rgba(212,175,55,0.10) 38%, rgba(10,10,11,0) 72%)',
          }}
        />

        {/* Rotating Outer Architectural Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full border border-[#D4AF37]/15 border-dashed will-change-transform"
        />

        {/* Counter-Rotating Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#D4AF37]/22 will-change-transform"
        />

        {/* Architectural Hairline Crosshairs */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent" />
      </motion.div>

      {/* Main Theatrical Finale Stage */}
      <motion.div
        style={{ opacity: stageOpacity, y: stageY }}
        className="relative z-10 max-w-5xl w-full mx-auto px-6 lg:px-10 text-center will-change-transform"
      >
        {/* Animated Official Moscow Metro Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mb-8 w-28 h-32 sm:w-32 sm:h-36 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-[#D4AF37]/35"
          />
          <motion.div
            animate={{ scale: [1.14, 1.24, 1.14], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-[#D9232E]/35"
          />
          {/* Official Moscow Metro Logo SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={OFFICIAL_METRO_LOGO_SRC}
            alt="Официальный логотип Московского метрополитена"
            className="relative z-10 w-20 h-24 sm:w-24 sm:h-28 object-contain drop-shadow-[0_10px_32px_rgba(217,35,46,0.45)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm text-[#D4AF37] tracking-[0.18em] uppercase mb-4 tabular-nums"
        >
          {FINALE_DATA.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F0E8] [text-wrap:balance] leading-[1.08] mb-4"
        >
          {FINALE_DATA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] [text-wrap:balance] max-w-3xl mx-auto mb-8"
        >
          {FINALE_DATA.subtitle}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="font-serif italic text-sm sm:text-base text-[#E2DDD3] max-w-2xl mx-auto py-4 mb-10 border-y border-[#D4AF37]/25 leading-relaxed"
        >
          «{FINALE_DATA.closingQuote}»
        </motion.blockquote>

        {/* Clean 3-Column Network Tribute Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.52 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-10 text-left sm:text-center tabular-nums"
        >
          {FINALE_DATA.tributeMetrics.map((metric) => (
            <div key={metric.value} className="pt-4 border-t border-[#D4AF37]/20">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F0E8] mb-1.5">
                {metric.value}
              </div>
              <p className="text-xs text-[#A8A296] leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.62 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C558] text-[#0A0A0B] text-xs font-semibold rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
            <span>Вернуться к началу презентации</span>
          </button>
        </motion.div>
      </motion.div>

      <MetroTransitionOverlay
        progress={smoothProgress}
        type={transitionType}
        lineColor="#D9232E"
        settledAt={0.5}
      />
    </section>
  );
}
