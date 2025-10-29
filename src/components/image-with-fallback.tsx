"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type ImageWithFallbackProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export function ImageWithFallback({ src, fallbackSrc, alt, ...rest }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      alt={alt}
      src={currentSrc}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
