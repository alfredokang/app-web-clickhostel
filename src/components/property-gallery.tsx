"use client";

import { useCallback, useEffect, useState } from "react";

import { ImageWithFallback } from "@/components/image-with-fallback";
import type { PropertyGalleryImage } from "@/data/properties";

interface PropertyGalleryProps {
  images: PropertyGalleryImage[];
  propertyName: string;
}

export function PropertyGallery({ images, propertyName }: PropertyGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeModal, isOpen, showNext, showPrevious]);

  return (
    <>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-6 pl-1 pr-4 md:pr-6" aria-label={`Galeria de imagens da ${propertyName}`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openModal(index)}
              className="group relative h-64 min-w-[280px] flex-shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-left transition hover:border-emerald-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <ImageWithFallback
                src={image.src}
                fallbackSrc={image.fallbackSrc}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, 80vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white/80">{image.alt}</p>
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizando imagem ${currentIndex + 1} de ${images.length} da ${propertyName}`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-slate-950/95 p-6 backdrop-blur"
          onClick={closeModal}
        >
          <div className="flex w-full max-w-5xl items-center gap-4" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={showPrevious}
              className="hidden rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:border-emerald-300 hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:inline-flex"
              aria-label="Ver imagem anterior"
            >
              ←
            </button>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[36px] border border-white/15 bg-slate-900/80">
              <ImageWithFallback
                src={images[currentIndex].src}
                fallbackSrc={images[currentIndex].fallbackSrc}
                alt={images[currentIndex].alt}
                fill
                sizes="(min-width: 1024px) 720px, 90vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={showNext}
              className="hidden rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:border-emerald-300 hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:inline-flex"
              aria-label="Ver próxima imagem"
            >
              →
            </button>
          </div>
          <div className="flex w-full max-w-5xl items-center justify-between text-xs font-medium text-white/80">
            <span>
              {currentIndex + 1} / {images.length}
            </span>
            <p className="max-w-[75%] text-right leading-relaxed text-white/70">{images[currentIndex].alt}</p>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-emerald-300 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              fechar
            </button>
          </div>
          <div className="flex w-full max-w-5xl gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-thumb`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border ${
                  currentIndex === index
                    ? "border-emerald-300/70"
                    : "border-white/10 hover:border-emerald-200/40"
                } bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300`}
              >
                <ImageWithFallback
                  src={image.src}
                  fallbackSrc={image.fallbackSrc}
                  alt="Miniatura da galeria"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
                {currentIndex === index ? (
                  <span className="absolute inset-0 border-2 border-emerald-300/70" aria-hidden />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
