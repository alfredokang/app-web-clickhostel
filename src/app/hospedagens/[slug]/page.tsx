import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ImageWithFallback } from "@/components/image-with-fallback";
import { PropertyGallery } from "@/components/property-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { properties } from "@/data/properties";

interface PropertyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return {
      title: "Hospedagem não encontrada | Click Hostel",
    };
  }

  return {
    title: `${property.name} | Catálogo Click Hostel`,
    description: property.shortDescription,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await Promise.resolve(params);
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2)_0%,_rgba(2,6,23,0.95)_60%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(135deg,_rgba(16,185,129,0.12),_transparent_45%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 md:gap-20 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between text-sm text-slate-200/70">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-rose-300 hover:text-rose-200"
            href="/hospedagens"
          >
            <span aria-hidden className="text-lg">
              ←
            </span>
            Voltar para o catálogo
          </Link>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60 sm:inline-flex">
            {property.neighborhood}
          </span>
        </nav>

        <header className="grid gap-10 rounded-[48px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_80px_-60px_rgba(244,63,94,0.45)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-rose-300/40 bg-rose-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-rose-100">
              hospedagem acessível
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {property.name}
            </h1>
            <p className="text-base text-slate-200/80">
              {property.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-200/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {property.distance}
              </span>
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
            <div className="grid gap-3 text-sm text-slate-200/80">
              {property.highlights.map((highlight) => (
                <p
                  key={`${property.slug}-${highlight}`}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{highlight}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {property.segments.map((segment) => (
                <span
                  key={`${property.slug}-${segment}`}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
                >
                  {segment}
                </span>
              ))}
            </div>
            {property.address && (
              <p className="text-xs text-slate-200/80 font-semibold">
                • {property.address}
              </p>
            )}

            <div className="text-center flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta trackingId={`whatsapp-detalhe-${property.slug}`}>
                Reservar esta hospedagem agora
              </WhatsAppCta>
              <WhatsAppCta
                trackingId={`whatsapp-detalhe-${property.slug}-pacotes`}
                variant="outline"
              >
                Solicitar pacote para grupos
              </WhatsAppCta>
            </div>
          </div>

          <div className="relative h-full min-h-[320px] overflow-hidden rounded-[40px] border border-white/10">
            <ImageWithFallback
              src={property.mainImage}
              fallbackSrc={property.fallbackSrc}
              alt={property.name}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs font-semibold text-white/80">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 uppercase tracking-[0.25em]">
                {property.neighborhood}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 uppercase tracking-[0.25em]">
                {property.distance}
              </span>
            </div>
          </div>
        </header>

        <section className="grid gap-10 rounded-[40px] border border-white/10 bg-white/5 p-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">
              Infraestrutura acessível e pronta para a sua equipe
            </h2>
            <p className="text-sm text-slate-200/80">
              Cada detalhe foi pensado para receber cadeirantes, atletas
              paralímpicos e equipes que precisam de agilidade antes e depois
              dos eventos. Rampas niveladas, portas largas e banheiros adaptados
              garantem conforto e autonomia.
            </p>
            <ul className="grid gap-3 text-sm text-slate-200/80 sm:grid-cols-2">
              {property.accessibilityHighlights.map((item) => (
                <li
                  key={`${property.slug}-access-${item}`}
                  className="flex items-start gap-3 rounded-3xl border border-rose-300/30 bg-rose-400/10 px-4 py-3"
                >
                  <span className="mt-1 text-lg text-rose-200">♿</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-black/30">
            <h3 className="text-lg font-semibold text-white">
              Pacotes e operações especiais
            </h3>
            <p className="text-sm text-slate-200/80">
              Trabalhamos com atletas paralímpicos, montadores de stands,
              caravanas corporativas e equipes que precisam de logística
              contínua perto do São Paulo Expo e do CT Paralímpico. Ajustamos
              alimentação, transporte e day use de acordo com o seu cronograma.
            </p>
            <p className="text-sm text-slate-200/70">
              Disponibilizamos apoio 24h, check-in flexível e acompanhamento
              próximo para que cada etapa da estadia seja produtiva e sem
              imprevistos.
            </p>
            <WhatsAppCta
              trackingId={`whatsapp-detalhe-${property.slug}-consultor`}
            >
              Conversar com um consultor especializado
            </WhatsAppCta>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Galeria completa da {property.name}
              </h2>
              <p className="mt-2 text-base text-slate-200/80">
                Explore os ambientes e planeje a distribuição da sua equipe com
                antecedência.
              </p>
            </div>
            <span className="text-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              clique nas fotos para ampliar
            </span>
          </div>

          <PropertyGallery
            images={property.gallery}
            propertyName={property.name}
          />
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 sm:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <p className="max-w-2xl text-xs text-slate-200/80 font-semibold sm:text-base text-center">
              Arraste as fotos ou a barra para os lados
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 sm:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </section>

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-white">
                Pronto para reservar?
              </h2>
              <p className="text-base text-slate-200/80">
                Compartilhe a data do seu evento, quantidade de pessoas e
                necessidades específicas de acessibilidade. Vamos preparar uma
                proposta completa, com pacotes especiais para longas temporadas,
                festas privadas ou day use.
              </p>
            </div>
            <div className="text-center flex flex-col gap-3 sm:flex-row sm:justify-end">
              <WhatsAppCta
                trackingId={`whatsapp-detalhe-${property.slug}-fechamento`}
              >
                Garantir minha vaga
              </WhatsAppCta>
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
