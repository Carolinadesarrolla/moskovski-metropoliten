'use client';

import React from 'react';
import Image from 'next/image';
import { type MotionValue, motion } from 'motion/react';
import { OFFICIAL_METRO_LOGO_SRC, type MetroPhoto } from '@/lib/metro-data';

interface SovietMetroPhotoFrameProps {
  photo: MetroPhoto;
  photoIndex: number;
  totalPhotos: number;
  caption?: string;
  showCaption?: boolean;
  lineColor?: string;
  scale?: MotionValue<number>;
  rotateX?: MotionValue<number>;
  x?: MotionValue<string>;
}

// =========================================================================
// Cute & Lightweight Soviet Metro Ambient Frame
// Pure CSS opacity animations only — ZERO scale/translate on many elements,
// ZERO filters, ZERO JS. Minimal layer count for smooth slide transitions.
// =========================================================================

// Official Moscow Metro SVG — inline, tinted via currentColor
const MetroLogoSVG = ({ style }: { style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.6 200" style={style} aria-hidden>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M165.6,82.8c0-45.7-37-82.8-82.8-82.8C37.1,0,0,37.1,0,82.8c0,22.9,9.3,43.6,24.3,58.5c1.2,1.2,2.9,2,4.7,2c3.7,0,6.7-3,6.7-6.7c0-1.9-0.7-3.6-2-4.9c-12.5-12.5-20.2-29.9-20.2-48.9c0-38.2,31-69.4,69.2-69.4s69.4,31.1,69.4,69.4c0,19.2-7.7,36.5-20.3,49.1l-58.5,58.5l9.5,9.6l58.7-58.7C156.4,126.4,165.6,105.7,165.6,82.8z"/>
      <path d="M121.2,98.8l-20.7-52.2L83.1,77.1L65.6,46.6L45,98.8h-6v7.8h31.1v-7.8h-4.6l4.5-13l13.1,21.4l13.1-21.4l4.5,13H96v7.8h31.3v-7.8H121.2z"/>
    </g>
  </svg>
);

// Official hammer & sickle SVG (user-provided, 2-path, viewBox 0 0 4001 4001)
const HammerSickleSVG = ({ style }: { style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4001 4001" style={style} aria-hidden>
    <path
      fillRule="nonzero"
      fill="currentColor"
      d="M 3127.171875 2920.109375 C 3135.039062 2926.621094 3144.230469 2932.910156 3147.351562 2943.230469 C 3153.691406 2963.261719 3148.03125 2984.679688 3140.828125 3003.691406 C 3126.050781 3040.199219 3101.558594 3072.582031 3071.550781 3097.960938 C 3055.621094 3111.074219 3037.570312 3122.601562 3017.238281 3127.214844 C 3005.398438 3129.867188 2991.710938 3128.738281 2982.53125 3120.054688 C 2904.210938 3049.320312 2826.199219 2978.210938 2747.769531 2907.601562 L 2490.949219 2674.851562 C 2195.21875 2406.890625 1899.421875 2139.050781 1603.640625 1871.121094 C 1536.261719 1954.238281 1469.089844 2037.53125 1401.71875 2120.679688 C 1327.648438 2055.910156 1253.53125 1991.210938 1179.460938 1926.441406 C 1322.519531 1749.5 1465.628906 1572.640625 1608.691406 1395.671875 C 1725.761719 1407.058594 1842.78125 1418.921875 1959.820312 1430.578125 C 1874.890625 1535.878906 1789.648438 1640.929688 1704.660156 1746.210938 C 2178.851562 2137.46875 2652.660156 2529.230469 3127.171875 2920.109375"
    />
    <path
      fillRule="nonzero"
      fill="currentColor"
      d="M 1933.789062 872.539062 C 2146.179688 934.859375 2350.230469 1030.230469 2527.351562 1163.769531 C 2688.710938 1285.261719 2826.75 1441.238281 2913.300781 1624.699219 C 2959.550781 1721.980469 2990.980469 1826.199219 3006.96875 1932.691406 C 3043.21875 2174.160156 3009.921875 2447.878906 2871.121094 2653.171875 C 2769.480469 2805.328125 2583.660156 2940.199219 2396.621094 2960.679688 C 2299 2978.109375 2198.511719 2976.429688 2100.859375 2960.25 C 1912.339844 2928.558594 1735.929688 2844.851562 1579.429688 2736.910156 C 1511.628906 2690.261719 1447.398438 2638.578125 1385.988281 2583.800781 C 1376.71875 2594.410156 1367.46875 2605.039062 1358.28125 2615.710938 L 1397.96875 2657.589844 C 1404.230469 2664.199219 1404.210938 2674.539062 1397.921875 2681.121094 L 1353.53125 2727.558594 C 1347.078125 2734.300781 1336.359375 2734.601562 1329.550781 2728.230469 L 1286.320312 2687.839844 C 1274.921875 2699.480469 1231.628906 2769.898438 1225.078125 2785.121094 C 1206.621094 2826.449219 1191.890625 2869.460938 1171.148438 2909.761719 C 1143.960938 2963.179688 1109.371094 3013.4375 1065.199219 3054.253906 C 1033.859375 3082.871094 997.335938 3107.585938 955.71875 3118.113281 C 931.570312 3123.914062 903.695312 3124.371094 882.535156 3109.636719 C 861.429688 3094.761719 852.214844 3068.136719 851.332031 3043.21875 C 849.882812 3001.09375 865.808594 2960.511719 886.773438 2924.691406 C 929.867188 2852.871094 995.851562 2797.691406 1067.050781 2755.089844 C 1092.820312 2738.988281 1119.160156 2723.738281 1144.46875 2706.960938 C 1159.628906 2697.058594 1212 2647.308594 1216.78125 2629.421875 L 1163.53125 2572.859375 C 1157.289062 2566.230469 1157.351562 2555.878906 1163.671875 2549.320312 L 1208.378906 2502.890625 C 1214.839844 2496.171875 1225.550781 2495.898438 1232.351562 2502.28125 L 1276.589844 2543.800781 C 1305.269531 2507.058594 1333.851562 2470.191406 1362.441406 2433.390625 C 1463.191406 2491.53125 1567.261719 2544.320312 1675.660156 2586.671875 C 1790.339844 2631.410156 1910.121094 2665.320312 2032.96875 2677.011719 C 2519.851562 2723.410156 2750.871094 2352.628906 2716.808594 1916.648438 C 2709.050781 1813.910156 2682.230469 1712.960938 2640.359375 1618.960938 C 2595.589844 1518.011719 2534.519531 1424.941406 2464.828125 1339.5 C 2314.511719 1156.289062 2128.140625 1006.480469 1933.789062 872.539062"
    />
  </svg>
);

// ── Floaters: 10 elements max, opacity-only animation (cheapest possible) ──
// Each gets a staggered delay so they don't all pulse together.
const FLOATERS = [
  // Stars — corners + top center
  { type: 'star',    x:  '4%', y:  '8%', dur: 11, delay: 0,   size: 20, op: 0.32 },
  { type: 'star',    x: '93%', y:  '7%', dur: 13, delay: 2,   size: 16, op: 0.28 },
  { type: 'star',    x: '47%', y:  '3%', dur:  9, delay: 5,   size: 22, op: 0.30 },
  { type: 'star',    x: '19%', y: '91%', dur: 12, delay: 1,   size: 17, op: 0.26 },
  { type: 'star',    x: '77%', y: '89%', dur: 14, delay: 3.5, size: 19, op: 0.27 },
  // Hammer & sickle — flanks
  { type: 'hs',      x:  '1%', y: '34%', dur: 18, delay: 0,   size: 52, op: 0.22 },
  { type: 'hs',      x: '88%', y: '24%', dur: 20, delay: 6,   size: 44, op: 0.20 },
  // Official Metro logo — sparse
  { type: 'metro',   x:  '1%', y: '64%', dur: 16, delay: 3,   size: 40, op: 0.17 },
  { type: 'metro',   x: '90%', y: '58%', dur: 19, delay: 8,   size: 36, op: 0.15 },
  // СССР — quiet text
  { type: 'cccp',    x:  '9%', y: '76%', dur: 22, delay: 2,   size: 11, op: 0.30 },
  { type: 'cccp',    x: '79%', y: '16%', dur: 20, delay: 9,   size: 11, op: 0.28 },
] as const;

export default function SovietMetroPhotoFrame({
  photo,
  photoIndex,
  totalPhotos,
  caption,
  showCaption = true,
  lineColor = '#D4AF37',
  scale,
  rotateX,
  x,
}: SovietMetroPhotoFrameProps) {
  const displayCaption = caption || photo.caption;

  return (
    <motion.div
      style={{ scale, rotateX, x }}
      className="relative w-full h-full overflow-hidden bg-[#0A0A0C] flex items-center justify-center select-none"
    >
      {/* ── 1. Vignette (single gradient layer, no blur) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(28,20,14,0.30) 0%, rgba(10,10,14,0.88) 68%, #0A0A0C 100%)',
        }}
      />

      {/* ── 2. Faint diagonal pinstripe ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.022,
          backgroundImage:
            'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 44px)',
        }}
      />

      {/* ── 3. Floating ambient elements (opacity-only animation) ── */}
      {FLOATERS.map((f, i) => {
        const base: React.CSSProperties = {
          position: 'absolute',
          left: f.x,
          top: f.y,
          pointerEvents: 'none',
          animation: `sovPulse ${f.dur}s ${f.delay}s ease-in-out infinite`,
        };
        if (f.type === 'star') return (
          <span key={i} style={{ ...base, fontSize: f.size, color: '#D4AF37', lineHeight: 1, opacity: f.op }}>★</span>
        );
        if (f.type === 'cccp') return (
          <span key={i} style={{ ...base, fontSize: f.size, color: '#D4AF37', letterSpacing: '0.18em', fontFamily: 'serif', fontWeight: 700, opacity: f.op }}>СССР</span>
        );
        if (f.type === 'metro') return (
          <MetroLogoSVG key={i} style={{ ...base, width: f.size, height: 'auto', color: '#D9232E', opacity: f.op }} />
        );
        if (f.type === 'hs') return (
          <HammerSickleSVG key={i} style={{ ...base, width: f.size, height: f.size, color: '#D4AF37', opacity: f.op }} />
        );
        return null;
      })}

      {/* ── 4. Top & bottom golden rule lines (opacity-only breathe) ── */}
      <div
        className="absolute inset-x-6 sm:inset-x-16 top-4 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, #D4AF37 25%, #D4AF37 75%, transparent)',
          animation: 'sovRule 8s 0s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-x-6 sm:inset-x-16 bottom-4 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, #D4AF37 25%, #D4AF37 75%, transparent)',
          animation: 'sovRule 8s 2s ease-in-out infinite',
        }}
      />

      {/* ── 5. Central photo ── */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-10 lg:px-16 pt-10 pb-10 pointer-events-auto">
        <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2 border border-[#D4AF37]/25 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              priority={photoIndex <= 1}
              referrerPolicy="no-referrer"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      {/* ── 6. Caption pill ── */}
      {showCaption && displayCaption && (
        <div className="absolute bottom-4 sm:bottom-5 inset-x-0 mx-auto max-w-xl px-4 z-20 pointer-events-none flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:py-2 rounded-full bg-[#0A0A0C]/90 border border-[#D4AF37]/30 shadow-lg">
            <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lineColor }} />
            {totalPhotos > 1 && (
              <span className="font-serif text-[11px] sm:text-xs text-[#D4AF37] tabular-nums font-semibold shrink-0">
                {photoIndex + 1} / {totalPhotos}
              </span>
            )}
            <span className="font-serif italic text-xs sm:text-sm text-[#F4F0E8]/90 leading-tight truncate max-w-md">
              {displayCaption}
            </span>
          </div>
        </div>
      )}

      {/* ── Keyframes: OPACITY ONLY — zero layout, zero compositing cost ── */}
      <style jsx>{`
        @keyframes sovPulse {
          0%, 100% { opacity: 0.08; }
          50%       { opacity: 1;    }
        }
        @keyframes sovRule {
          0%, 100% { opacity: 0.10; }
          50%       { opacity: 0.38; }
        }
      `}</style>
    </motion.div>
  );
}
