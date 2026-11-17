'use client';

import { useEffect, useRef, useState } from 'react';
import { Map as MapIcon } from 'lucide-react';
import {
  COMPARISON_SLIDES,
  FINALE_DATA,
  KOLTSEVAYA_SLIDE,
  METRO_CHAPTERS,
} from '@/lib/metro-data';

interface TopNavProps {
  onOpenMap: () => void;
}

interface TopRouteStop {
  id: string;
  label: string;
  lineColor: string;
}

const TOP_ROUTE_STOPS: TopRouteStop[] = [
  { id: 'hero', label: 'Введение', lineColor: '#B91C1C' },
  ...METRO_CHAPTERS.map((chapter) => ({
    id: chapter.id,
    label: chapter.navShortLabel,
    lineColor: chapter.line.color,
  })),
  ...COMPARISON_SLIDES.map((slide, idx) => ({
    id: slide.id,
    label: ['I', 'II', 'III', 'IV'][idx] ?? `${idx + 1}`,
    lineColor: '#D4AF37',
  })),
  {
    id: KOLTSEVAYA_SLIDE.id,
    label: 'Кольцевая',
    lineColor: KOLTSEVAYA_SLIDE.line.color,
  },
  {
    id: FINALE_DATA.id,
    label: 'Финал',
    lineColor: '#D9232E',
  },
];

export default function TopNav({ onOpenMap }: TopNavProps) {
  const [activeId, setActiveId] = useState<string>('hero');
  const navRef = useRef<HTMLElement>(null);
  const stopRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveStop = () => {
      frameId = null;
      const anchorY = window.innerHeight * 0.4;
      const scrollBottom = window.scrollY + window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight;

      if (maxScroll - scrollBottom <= 32) {
        setActiveId(TOP_ROUTE_STOPS[TOP_ROUTE_STOPS.length - 1].id);
        return;
      }

      let nextActiveId = TOP_ROUTE_STOPS[0].id;
      for (const stop of TOP_ROUTE_STOPS) {
        const el = document.getElementById(stop.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchorY) {
          nextActiveId = stop.id;
        }
      }

      setActiveId(nextActiveId);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateActiveStop);
    };

    updateActiveStop();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const btn = stopRefs.current[activeId];
    if (!nav || !btn) return;

    const navLeft = nav.scrollLeft;
    const navRight = navLeft + nav.clientWidth;
    const btnLeft = btn.offsetLeft;
    const btnRight = btnLeft + btn.offsetWidth;

    if (btnLeft < navLeft + 16) {
      nav.scrollTo({ left: Math.max(0, btnLeft - 16), behavior: 'smooth' });
    } else if (btnRight > navRight - 16) {
      nav.scrollTo({ left: btnRight - nav.clientWidth + 16, behavior: 'smooth' });
    }
  }, [activeId]);

  const currentIndex = Math.max(
    0,
    TOP_ROUTE_STOPS.findIndex((s) => s.id === activeId)
  );

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0B]/92 border-b border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 h-16 flex items-center justify-between gap-6">
        {/* Integrated Metro Route Progress Tracker */}
        <nav
          ref={navRef}
          aria-label="Маршрут презентации"
          className="flex-1 min-w-0 overflow-x-auto no-scrollbar"
        >
          <div className="flex items-center gap-1.5 w-max">
            {TOP_ROUTE_STOPS.map((stop, index) => {
              const isActive = stop.id === activeId;
              const isPassed = index < currentIndex;
              return (
                <button
                  key={stop.id}
                  ref={(el) => {
                    stopRefs.current[stop.id] = el;
                  }}
                  type="button"
                  onClick={() => navigateTo(stop.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#1D1D23] text-[#F4F0E8] font-semibold border border-[#D4AF37]/35'
                      : isPassed
                      ? 'text-[#D4AF37]/90 hover:text-[#F4F0E8]'
                      : 'text-[#8E887D] hover:text-[#F4F0E8]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 border"
                    style={{
                      backgroundColor: isActive || isPassed ? stop.lineColor : 'transparent',
                      borderColor: stop.lineColor,
                    }}
                  />
                  <span>{stop.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Primary Action: Interactive Map Modal */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenMap}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0A0A0B] bg-[#D4AF37] hover:bg-[#E5C558] transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            <MapIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Схема метро</span>
          </button>
        </div>
      </div>
    </header>
  );
}
