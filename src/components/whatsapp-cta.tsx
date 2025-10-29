"use client";

import { whatsappLink } from "@/config/whatsappLink";
import { trackWhatsAppClick } from "@/utils/trackWhatsAppClick";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type WhatsAppCtaProps = {
  trackingId: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function WhatsAppCta({
  trackingId,
  children,
  className = "",
  variant = "primary",
  ...rest
}: WhatsAppCtaProps) {
  const baseStyles =
    variant === "outline"
      ? "inline-flex items-center justify-center rounded-full border border-rose-300/70 px-6 py-3 text-sm font-semibold text-rose-100 transition hover:border-rose-200 hover:text-rose-200"
      : "inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:-translate-y-1 hover:bg-rose-400";

  return (
    <a
      {...rest}
      href={whatsappLink}
      onClick={(event) => {
        rest.onClick?.(event);
        trackWhatsAppClick(trackingId);
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
