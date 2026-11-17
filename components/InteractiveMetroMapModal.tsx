'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Minus, Plus, RotateCcw, X } from 'lucide-react';
import {
  SCHEMATIC_LINES,
  SCHEMATIC_STATIONS,
  type SchematicStation,
} from '@/lib/metro-data';

interface InteractiveMetroMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToChapter: (chapterId: string) => void;
}

export default function InteractiveMetroMapModal({
  isOpen,
  onClose,
  onJumpToChapter,
}: InteractiveMetroMapModalProps) {
  const [selectedLine, setSelectedLine] = useState<string>('all');
  const [activeStation, setActiveStation] = useState<SchematicStation>(
    SCHEMATIC_STATIONS[1]
  );
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragRef = useRef<{ dragging: boolean; startX: number; startY: number }>({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    dragRef.current = {
      dragging: true,
      startX: e.clientX - pan.x,
      startY: e.clientY - pan.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return;
    setPan({
      x: e.clientX - dragRef.current.startX,
      y: e.clientY - dragRef.current.startY,
    });
  };

  const handlePointerUp = () => {
    dragRef.current.dragging = false;
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Интерактивная схема Московского метрополитена"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#0A0A0B]/95 flex items-center justify-center p-3 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl h-[88vh] bg-[#111115] border border-[#D4AF37]/35 rounded-sm flex flex-col overflow-hidden"
          >
            {/* Header & Line Filters */}
            <div className="px-5 py-4 border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4F0E8]">
                  Схема ключевых линий и станций
                </h2>
                <p className="text-xs text-[#A8A296] mt-0.5">
                  Нажмите на станцию, чтобы изучить детали или перейти к разделу презентации
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(2.2, +(z + 0.25).toFixed(2)))}
                  aria-label="Приблизить карту"
                  className="p-2 bg-[#18181E] hover:bg-[#23232B] border border-[#D4AF37]/25 text-[#F4F0E8] rounded-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(0.75, +(z - 0.25).toFixed(2)))}
                  aria-label="Отдалить карту"
                  className="p-2 bg-[#18181E] hover:bg-[#23232B] border border-[#D4AF37]/25 text-[#F4F0E8] rounded-sm cursor-pointer"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={resetView}
                  aria-label="Сбросить масштаб"
                  className="p-2 bg-[#18181E] hover:bg-[#23232B] border border-[#D4AF37]/25 text-[#F4F0E8] rounded-sm cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Закрыть схему"
                  className="p-2 ml-2 text-[#C8C2B6] hover:text-[#F4F0E8] hover:bg-[#1D1D23] rounded-sm cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Line Filter Ribbon */}
            <div className="px-5 py-2.5 bg-[#0A0A0B] border-b border-[#D4AF37]/15 flex items-center gap-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedLine('all')}
                className={`px-3 py-1.5 text-xs rounded-sm whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  selectedLine === 'all'
                    ? 'bg-[#D4AF37] text-[#0A0A0B] font-semibold'
                    : 'text-[#C8C2B6] hover:text-[#F4F0E8]'
                }`}
              >
                Все ветки
              </button>
              {SCHEMATIC_LINES.filter((l) => l.isPrimary).map((line) => {
                const isSelected = selectedLine === line.number;
                return (
                  <button
                    key={line.id}
                    type="button"
                    onClick={() => setSelectedLine(line.number)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-sm whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#1D1D23] text-[#F4F0E8] border border-[#D4AF37]/40 font-semibold'
                        : 'text-[#C8C2B6] hover:text-[#F4F0E8]'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: line.color }}
                    />
                    <span>
                      №{line.number} · {line.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive SVG Canvas */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="relative flex-1 bg-[#0A0A0B] overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                }}
              >
                <svg
                  viewBox="0 0 960 720"
                  className="w-full h-full max-h-full"
                  role="img"
                  aria-label="Топологическая схема Московского метрополитена"
                >
                  {/* Subtle Architectural Grid */}
                  <defs>
                    <pattern id="metroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path
                        d="M 48 0 L 0 0 0 48"
                        fill="none"
                        stroke="rgba(212, 175, 55, 0.05)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="960" height="720" fill="url(#metroGrid)" />

                  {/* Stylized Moskva River Curve */}
                  <path
                    d="M 40 245 Q 170 295 245 360 T 345 455 Q 430 430 515 415 T 690 520 Q 775 565 890 530"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.14)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />

                  {/* Lines */}
                  {SCHEMATIC_LINES.map((line) => {
                    const isHighlighted =
                      selectedLine === 'all' || selectedLine === line.number;
                    return (
                      <path
                        key={line.id}
                        d={line.path}
                        fill="none"
                        stroke={line.color}
                        strokeWidth={line.isPrimary ? 7 : 3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={line.isPrimary ? (isHighlighted ? 0.95 : 0.2) : 0.22}
                      />
                    );
                  })}

                  {/* Stations */}
                  {SCHEMATIC_STATIONS.map((station) => {
                    const matchesFilter =
                      selectedLine === 'all' || station.lines.includes(selectedLine);
                    const isActive = activeStation.id === station.id;
                    const primaryLine = SCHEMATIC_LINES.find(
                      (l) => l.number === station.lines[0]
                    );

                    return (
                      <g
                        key={station.id}
                        opacity={matchesFilter ? 1 : 0.25}
                        className="cursor-pointer"
                        onClick={() => setActiveStation(station)}
                      >
                        {/* Outer Gold Ring for Active or Presentation Stations */}
                        {(isActive || station.chapterId) && (
                          <circle
                            cx={station.x}
                            cy={station.y}
                            r={isActive ? 16 : 12}
                            fill="none"
                            stroke={isActive ? '#D4AF37' : 'rgba(212,175,55,0.45)'}
                            strokeWidth={isActive ? 2.5 : 1.2}
                          />
                        )}

                        <circle
                          cx={station.x}
                          cy={station.y}
                          r={station.isInterchange ? 9 : 7}
                          fill="#0A0A0B"
                          stroke={primaryLine?.color || '#D4AF37'}
                          strokeWidth="4"
                        />

                        {/* Station Name */}
                        <g transform={`translate(${station.x + 14}, ${station.y + 4})`}>
                          <rect
                            x="-4"
                            y="-13"
                            width={station.name.length * 7.5 + 12}
                            height="18"
                            rx="2"
                            fill="rgba(10, 10, 11, 0.85)"
                          />
                          <text
                            x="2"
                            y="0"
                            fill={isActive ? '#D4AF37' : '#F4F0E8'}
                            fontSize="12"
                            fontWeight={isActive || station.chapterId ? '700' : '400'}
                          >
                            {station.name}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Bottom Station Inspector Bar */}
            <div className="px-5 py-4 bg-[#141418] border-t border-[#D4AF37]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37] mb-1 tabular-nums">
                  {activeStation.lines.map((lineNum) => {
                    const lineObj = SCHEMATIC_LINES.find((l) => l.number === lineNum);
                    return (
                      <span
                        key={lineNum}
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold text-[#F4F0E8]"
                        style={{ backgroundColor: lineObj?.color || '#9A6324' }}
                      >
                        {lineNum}
                      </span>
                    );
                  })}
                  <span className="font-serif text-base sm:text-lg font-bold text-[#F4F0E8]">
                    {activeStation.name}
                  </span>
                  {activeStation.year && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{activeStation.year}</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-[#C8C2B6] leading-relaxed">
                  {activeStation.note}
                </p>
              </div>

              {activeStation.chapterId && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onJumpToChapter(activeStation.chapterId!);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#B91C1C] hover:bg-[#9E1616] text-xs font-semibold text-[#F4F0E8] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Перейти к разделу</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
