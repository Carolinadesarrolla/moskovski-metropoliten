'use client';

import { ArrowUp } from 'lucide-react';

export default function PresentationFooter() {
  return (
    <footer className="snap-end bg-[#0A0A0B] py-10 border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl font-semibold text-[#F4F0E8] mb-1">
            Московский метрополитен
          </p>
          <p className="text-xs text-[#A8A296] tabular-nums">
            15 мая 1935 — настоящее время · &gt; 560 км линий · ≈ 275 станций метро · &gt; 8 млн поездок в день
          </p>
        </div>

        <a
          href="#hero"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141418] hover:bg-[#1D1D23] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] rounded-sm transition-colors whitespace-nowrap shrink-0"
        >
          <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Наверх к вестибюлю</span>
        </a>
      </div>
    </footer>
  );
}
