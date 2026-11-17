'use client';

import { motion, useTransform, type MotionValue } from 'motion/react';

export type MetroTransitionType = 'doors' | 'train-glide' | 'tunnel-3d';

export function getMetroTransitionType(slideIndex: number): MetroTransitionType {
  const types: MetroTransitionType[] = ['doors', 'train-glide', 'tunnel-3d'];
  return types[slideIndex % types.length];
}

interface MetroTransitionOverlayProps {
  progress: MotionValue<number>;
  type: MetroTransitionType;
  lineColor?: string;
  /** Exact scrollYProgress value where Stop 0 settles at top of viewport (default 0.333 for 200vh, 0.5 for 100vh, 1/(N+2) for multi-photo). */
  settledAt?: number;
}

/**
 * Renders smooth Moscow Metro-inspired entry transitions that are guaranteed to
 * finish and fade out completely (opacity 0, off-screen) BEFORE the slide settles at `settledAt`.
 */
export function MetroTransitionOverlay({
  progress,
  type,
  lineColor = '#D4AF37',
  settledAt = 0.333,
}: MetroTransitionOverlayProps) {
  // All transition milestones are scaled strictly below `settledAt` so nothing
  // ever remains over the slide once it snaps into view.
  const tStart = settledAt * 0.06;
  const tMid = settledAt * 0.42;
  const tFadeStart = settledAt * 0.56;
  const tEnd = settledAt * 0.78;

  // 1) Doors: slide completely off-screen (-115% / +115%) and fade out cleanly
  const leftDoorX = useTransform(progress, [tStart, tEnd], ['0%', '-115%']);
  const rightDoorX = useTransform(progress, [tStart, tEnd], ['0%', '115%']);
  const doorOpacity = useTransform(progress, [tStart, tFadeStart, tEnd], [0.95, 0.75, 0]);
  const doorBeamOpacity = useTransform(progress, [tStart, tMid, tEnd], [0, 0.32, 0]);
  const doorBeamScaleX = useTransform(progress, [tStart, tEnd], [0.25, 1.35]);

  // 2) Train-glide: soft lateral light sweep exiting completely off-screen
  const streakX = useTransform(progress, [tStart, tEnd], ['115%', '-135%']);
  const streakOpacity = useTransform(progress, [tStart, tMid, tEnd], [0, 0.48, 0]);

  // 3) Tunnel-3d: gentle radial shadow clearing before slide settles
  const tunnelVignetteOpacity = useTransform(progress, [tStart, tFadeStart, tEnd], [0.85, 0.35, 0]);

  if (type === 'doors') {
    return (
      <motion.div
        aria-hidden="true"
        style={{ opacity: doorOpacity }}
        className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
      >
        {/* Subtle warm tunnel gleam that fades away before doors finish opening */}
        <motion.div
          style={{ opacity: doorBeamOpacity, scaleX: doorBeamScaleX }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[36vw] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent will-change-transform"
        />

        {/* Left Metro Car Door */}
        <motion.div
          style={{ x: leftDoorX }}
          className="absolute inset-y-0 left-0 w-1/2 bg-[#0C0C0F] border-r border-[#D4AF37]/25 flex items-center justify-end pr-6 sm:pr-12 will-change-transform"
        >
          <div
            className="w-24 sm:w-36 h-[54vh] rounded-sm border border-[#D4AF37]/20 bg-[#070709]/85 relative"
            style={{ boxShadow: 'inset 0 0 28px rgba(0,0,0,0.85)' }}
          >
            <div
              className="absolute top-3 inset-x-3 h-[2px] rounded-full opacity-60"
              style={{ backgroundColor: lineColor }}
            />
          </div>
        </motion.div>

        {/* Right Metro Car Door */}
        <motion.div
          style={{ x: rightDoorX }}
          className="absolute inset-y-0 right-0 w-1/2 bg-[#0C0C0F] border-l border-[#D4AF37]/25 flex items-center justify-start pl-6 sm:pl-12 will-change-transform"
        >
          <div
            className="w-24 sm:w-36 h-[54vh] rounded-sm border border-[#D4AF37]/20 bg-[#070709]/85 relative"
            style={{ boxShadow: 'inset 0 0 28px rgba(0,0,0,0.85)' }}
          >
            <div
              className="absolute top-3 inset-x-3 h-[2px] rounded-full opacity-60"
              style={{ backgroundColor: lineColor }}
            />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (type === 'train-glide') {
    return (
      <motion.div
        aria-hidden="true"
        style={{ opacity: streakOpacity }}
        className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
      >
        <motion.div
          style={{ x: streakX }}
          className="absolute inset-y-0 w-[38vw] bg-gradient-to-r from-transparent via-[#F4F0E8]/10 to-transparent flex flex-col justify-between py-20 will-change-transform"
        >
          <div
            className="h-[1px] w-full opacity-55"
            style={{ background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)` }}
          />
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#F4F0E8]/25 to-transparent" />
          <div
            className="h-[1px] w-full opacity-55"
            style={{ background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)` }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // 'tunnel-3d'
  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity: tunnelVignetteOpacity }}
      className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_22%,#050507_88%)]"
    />
  );
}
