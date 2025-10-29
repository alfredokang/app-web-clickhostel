import type { Metadata } from "next";
import Link from "next/link";

import { ImageWithFallback } from "@/components/image-with-fallback";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Catálogo de hospedagens | Click Hostel",
  description:
    "Explore todas as casas e unidades da Click Hostel. Veja fotos, detalhes de acessibilidade e escolha a melhor opção para a sua equipe, delegação ou caravana em São Paulo.",
};

export default function HospedagensPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.2)_0%,_rgba(2,6,23,0.95)_60%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(135deg,_rgba(236,72,153,0.12),_transparent_45%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 md:gap-20 md:px-10 lg:px-16">
        <header className="space-y-6 text-center md:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-rose-300/60 bg-rose-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-rose-200">
            catálogo oficial
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Todas as casas Click Hostel em um só lugar
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-200/80 md:mx-0">
            Conheça as unidades pensadas para atletas paralímpicos, montadores, visitantes corporativos e grupos que precisam de estrutura completa. Escolha o imóvel ideal e fale com a nossa equipe para personalizar pacotes, day use ou festas privadas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta trackingId="whatsapp-catalogo-hero">
              Falar com um especialista agora
            </WhatsAppCta>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-rose-300 hover:text-rose-200"
              href="/#acomodacoes"
            >
              Ver resumo das acomodações
            </Link>
          </div>
        </header>

        <section className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {properties.map((property) => (
              <article
                key={property.slug}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_-60px_rgba(244,63,94,0.45)] transition duration-300 hover:border-rose-400/70 hover:bg-white/10"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-[32px] border border-white/10">
                  <ImageWithFallback
                    src={property.mainImage}
                    fallbackSrc={property.fallbackSrc}
                    alt={`Foto principal da ${property.name}`}
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs font-semibold text-white/80">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 uppercase tracking-[0.25em]">
                      {property.neighborhood}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 uppercase tracking-[0.25em]">
                      {property.distance}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white">{property.name}</h2>
                    <p className="text-sm leading-relaxed text-slate-200/80">
                      {property.shortDescription}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-200/70">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {property.capacity}
                    </span>
                    {property.tags.map((tag) => (
                      <span
                        key={`${property.slug}-${tag}`}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid gap-2 text-sm text-slate-200/80">
                    {property.highlights.map((highlight) => (
                      <p key={`${property.slug}-${highlight}`} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {property.accessibilityHighlights.map((item) => (
                      <span
                        key={`${property.slug}-${item}`}
                        className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-100"
                      >
                        ♿ {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <Link
                      className="inline-flex items-center text-sm font-semibold text-rose-200 transition hover:text-rose-100"
                      href={`/hospedagens/${property.slug}`}
                    >
                      Ver fotos e detalhes →
                    </Link>
                    <WhatsAppCta
                      trackingId={`whatsapp-catalogo-${property.slug}`}
                      variant="outline"
                      className="sm:ml-auto"
                    >
                      Reservar esta casa
                    </WhatsAppCta>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 text-center md:text-left">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-white">
                Precisa hospedar uma caravana ou evento corporativo?
              </h2>
              <p className="text-base text-slate-200/80">
                Criamos combos personalizados com hospedagem, day use, festas privadas e suporte operacional completo. Conte com a Click Hostel para cuidar de toda a logística enquanto sua equipe foca no evento.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <WhatsAppCta trackingId="whatsapp-catalogo-pacotes">Solicitar proposta sob medida</WhatsAppCta>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-rose-300 hover:text-rose-200"
                href="/"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
