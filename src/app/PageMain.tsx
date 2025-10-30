"use client";

import Link from "next/link";

import { heroImages } from "@/data/hero";
import { ImageWithFallback } from "../components/image-with-fallback";
import { highlights } from "@/data/highlights";
import { accommodationTypes } from "@/data/accommodationTypes";
import { galleryImages } from "@/data/gallery";
import { amenities } from "@/data/amenities";
import { testimonials } from "@/data/testimonials";
import { experiences } from "@/data/experiences";
import { faqs } from "@/data/faqs";
import { whatsappLink } from "@/config/whatsappLink";
import { trackWhatsAppClick } from "@/utils/trackWhatsAppClick";
import { properties } from "@/data/properties";

export default function PageMain() {
  const accessibilityPillars = [
    {
      title: "Mobilidade sem barreiras",
      description:
        "Rampas sinalizadas, portas largas e rotas contínuas para cadeiras de rodas do portão ao quarto.",
    },
    {
      title: "Quartos e banheiros adaptados",
      description:
        "Suítes térreas com barras de apoio, box ampliado e espaço de transferência confortável.",
    },
    {
      title: "Equipe treinada",
      description:
        "Time habituado à rotina de atletas paralímpicos, montadores e staffs que precisam de apoio especializado.",
    },
  ];

  const supportHighlights = [
    "Translado adaptado sob demanda",
    "Check-in flexível para equipes noturnas",
    "Consultoria para logística de delegações",
    "Pacotes com alimentação e day use inclusos",
  ];

  const featuredProperties = properties.slice(0, 6);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0.95)_55%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(135deg,_rgba(15,118,110,0.15),_transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-32 pt-6 md:gap-24 md:px-10 lg:px-16">
        {/* HEADER */}
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/95 px-5 py-3 backdrop-blur-lg">
          <div className="flex items-center">
            <img src="/images/logo/logoCH2.png" className="w-50" />
            {/* <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#f28b8f]">
                Click Hostel
              </p>
              <p className="text-sm font-medium text-slate-100/80">
                São Paulo · SP · Brasil
              </p>
            </div> */}
          </div>
          <a
            className="hidden items-center gap-2 rounded-full bg-[#e44c5a] px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-red-300/40 transition hover:scale-105 hover:bg-[#ee6d74] md:inline-flex"
            href={whatsappLink}
            onClick={() => trackWhatsAppClick("whatsapp-home-header")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar agora
          </a>
        </header>

        <main className="flex flex-1 flex-col gap-20">
          {/* HERO */}
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-[#f28b8f]">
                hospedagem inteligente
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-5xl">
                Hospedagem sob medida para Atletas PCD, Montadores de Stands,
                Expositores e Visitantes da SP Expo Imigrantes
              </h1>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                A apenas 100 a 800 metros do São Paulo Expo e do CT Paralímpico,
                a Click Hostel é o ponto certo para quem vem montar, visitar ou
                competir em São Paulo.
              </p>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                São 7 unidades e mais de 120 vagas, com conforto, praticidade e
                atendimento personalizado — tudo perto de onde o evento
                acontece!
              </p>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                Hospedagem com café da manhã e kit cortesia, Wi-Fi rápido,
                suporte completo sobre a região e traslado ao CT para
                cadeirantes com veículo próprio.
              </p>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                Mais de 2.800 clientes atendidos por ano, entre montadores,
                visitantes e atletas, comprovam nossa excelência e confiança.
              </p>
              <p className="text-lg text-slate-200/80 sm:text-xl font-bold">
                Garanta sua vaga agora e hospede-se com quem entende a rotina de
                quem faz o São Paulo Expo acontecer!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:translate-y-[-2px] hover:bg-rose-400"
                  href={whatsappLink}
                  onClick={() => trackWhatsAppClick("whatsapp-home-hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com o anfitrião no WhatsApp
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-rose-500 hover:text-rose-400"
                  href="#acomodacoes"
                >
                  Ver acomodações
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-rose-500">4.9/5</p>
                  <p className="text-sm text-slate-200/70">
                    Avaliação média dos hóspedes que se hospedaram conosco.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-rose-500">100m</p>
                  <p className="text-sm text-slate-200/70">
                    Localização privilegiada: a 100m da Expo Imigrantes e do
                    Comitê Paralímpico Brasileiro, com acesso rápido às
                    principais avenidas.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-rose-500">Preço</p>
                  <p className="text-sm text-slate-200/70">
                    Precificação inteligente por categoria para o melhor custo X
                    beneficio para ASSOCIAÇÕES, PCD, MONTADORES, VISITANTES E
                    PRESTADORES
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-rose-400/40 via-rose-400/20 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_-40px_rgba(244,63,94,0.45)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroImages.map((image, index) => (
                    <div
                      key={image.src}
                      className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 ${
                        index === 0 ? "sm:col-span-2 aspect-[16/9]" : ""
                      }`}
                    >
                      <ImageWithFallback
                        src={image.src}
                        fallbackSrc={image.fallbackSrc}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        sizes={
                          index === 0
                            ? "(min-width: 1024px) 540px, 100vw"
                            : "(min-width: 1024px) 260px, 50vw"
                        }
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <p className="absolute bottom-3 left-3 max-w-[80%] text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                        Click Hostel
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-rose-400/30 via-rose-400/20 to-transparent blur-3xl" />
                  <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-[0_40px_80px_-40px_rgba(244,63,94,0.45)]">
                    <div className="space-y-6">
                      {highlights.map((highlight) => (
                        <div
                          key={highlight.title}
                          className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-inner shadow-black/20"
                        >
                          <h3 className="text-lg font-semibold text-white">
                            {highlight.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-200/80">
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ACCESSIBILITY SECTION */}
          <section className="grid gap-10 rounded-[48px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_80px_-60px_rgba(244,63,94,0.45)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-25 items-center justify-center rounded-full bg-rose-400/20 text-rose-200">
                  <img
                    src="/images/accessibility.png"
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.45em] text-rose-200/80">
                    acessibilidade total
                  </span>
                  <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Hospedagens pensadas para cadeirantes e atletas
                  </h2>
                </div>
              </div>
              <p className="text-base text-slate-200/80">
                Algumas das nossas casas já nasceram adaptadas para pessoas com
                deficiência. Recebemos delegações paralímpicas, montadores e
                staffs que precisam circular com cadeira de rodas com segurança.
                Rampas, banheiros acessíveis e equipe treinada garantem conforto
                antes, durante e depois dos eventos no São Paulo Expo e no CT
                Paralímpico.
              </p>
              <div className="flex flex-wrap gap-3">
                {supportHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rose-300/30 bg-rose-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {accessibilityPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-black/30"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200/80">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
              <a
                className="inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-rose-300/40 transition hover:-translate-y-1 hover:bg-rose-400"
                href={whatsappLink}
                onClick={() =>
                  trackWhatsAppClick("whatsapp-home-accessibility")
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero saber mais
              </a>
              <p className="text-sm text-slate-200/70">
                Parceiros recorrentes do CT Paralímpico e das principais feiras
                da cidade. Conte com a Click Hostel para uma experiência
                realmente inclusiva.
              </p>
            </div>
          </section>

          {/* TRUST BADGE */}
          <section className="rounded-[36px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_60px_-40px_rgba(244,63,94,0.45)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                  confiança click hostel
                </span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Somos Superhost Airbnb e certificados pelo Cadastur
                </h2>
                <p className="text-base text-slate-200/80">
                  Há mais de 10 anos recebendo hóspedes com excelência,
                  acumulamos avaliações que nos mantêm como Superhost no Airbnb.
                  Cada estadia é conduzida com cuidado para transformar a sua
                  viagem em uma lembrança inesquecível.
                </p>
                <p className="text-base text-slate-200/80">
                  Também somos uma hospedagem certificada pelo Cadastur,
                  garantindo que atuamos em conformidade com o Ministério do
                  Turismo e oferecendo segurança extra para quem reserva com a
                  gente.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-[28px] border border-white/10 bg-slate-900/60 p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200/80">
                  verifique a autenticidade
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/90 px-4 py-3 shadow-inner shadow-slate-900/20">
                    <img
                      src="/images/logos/cadastur-logo.png"
                      alt="Logotipo oficial do Cadastur"
                      className="max-h-12 max-w-[100px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
                    <ImageWithFallback
                      src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https%3A%2F%2Fcadastur.turismo.gov.br%2F"
                      fallbackSrc="https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https%3A%2F%2Fcadastur.turismo.gov.br%2F"
                      alt="QR Code de autenticidade do Cadastur"
                      width={192}
                      height={192}
                      className="h-30 w-30 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="max-w-xs text-xs text-slate-200/70">
                  Escaneie o QR Code para confirmar nosso registro oficial no
                  Ministério do Turismo e fazer sua reserva com ainda mais
                  confiança.
                </p>
                <a
                  href="https://cadastur.turismo.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-rose-400/60 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-400/20"
                >
                  Ver cadastro no Cadastur
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6H18v7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 6 9 15l-4.5-4.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* PROPERTIES PREVIEW */}
          <section className="space-y-10 rounded-[48px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_40px_80px_-60px_rgba(244,63,94,0.55)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-rose-400/60 bg-rose-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-rose-200">
                  catálogo click hostel
                </span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Conheça nossas casas e escolha a ideal para o seu grupo
                </h2>
                <p className="text-base text-slate-200/80">
                  Temos hospedagens completas, com fotos e detalhes disponíveis
                  em um catálogo exclusivo. Veja ambientes, entenda a capacidade
                  de cada unidade e planeje pacotes para caravanas, empresas,
                  festas privadas ou day use com toda a estrutura Click Hostel.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  className="text-center inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:-translate-y-1 hover:bg-rose-400"
                  href="/hospedagens"
                >
                  Ver catálogo completo
                </Link>
                <a
                  className="text-center inline-flex items-center justify-center rounded-full border border-rose-300/70 px-6 py-3 text-sm font-semibold text-rose-100 transition hover:border-rose-200 hover:text-rose-200"
                  href={whatsappLink}
                  onClick={() => trackWhatsAppClick("whatsapp-home-catalogo")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Negociar pacotes especiais
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProperties.map((property) => (
                <article
                  key={property.slug}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-rose-400/70 hover:bg-white/10"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-[28px] border border-white/10">
                    <ImageWithFallback
                      src={property.mainImage}
                      fallbackSrc={property.fallbackSrc}
                      alt={property.name}
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <p className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                      Click Hostel
                    </p>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        {property.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-200/80">
                        {property.shortDescription}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-200/70">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {property.neighborhood}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {property.distance}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {property.capacity}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.tags.map((tag) => (
                        <span
                          key={`${property.slug}-${tag}`}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      className="mt-3 inline-flex items-center text-sm font-semibold text-rose-200 transition hover:text-rose-100"
                      href={`/hospedagens/${property.slug}`}
                    >
                      Ver detalhes da casa →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[32px] border border-dashed border-rose-400/60 bg-rose-500/10 p-6 text-sm text-rose-100/90">
              <p className="font-semibold text-rose-100">
                Pacotes especiais para caravanas, empresas, festas e day use
              </p>
              <p className="mt-2 text-rose-50/80">
                Ajustamos valores e logística para grupos grandes, oferecendo
                alimentação, infraestrutura para confraternizações e suporte
                dedicado em toda a estadia.
              </p>
            </div>
          </section>

          {/* GALLERY */}
          <section className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Descubra o clima da Click Hostel
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  De quartos aconchegantes a áreas sociais vibrantes, cada canto
                  foi projetado para oferecer conforto, estilo e experiências
                  únicas durante sua estadia em São Paulo.
                </p>
              </div>
              <a
                className="text-center inline-flex items-center justify-center rounded-full border border-red-400/60 px-6 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-400/20"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-gallery")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar tour virtual pelo WhatsApp
              </a>
            </div>

            <div className="-mx-6 overflow-x-auto pb-6 md:-mx-10 lg:-mx-16 custom-scroll">
              <div className="flex w-max gap-6 px-6 md:px-10 lg:px-16">
                {galleryImages.map((image) => (
                  <div
                    key={image.src}
                    className="group relative h-64 w-[280px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-lg shadow-black/40 transition duration-300 hover:border-rose-400/60 hover:shadow-rose-400/40 md:h-72 md:w-[360px]"
                  >
                    <ImageWithFallback
                      src={image.src}
                      fallbackSrc={image.fallbackSrc}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 70vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 text-sm font-medium text-white">
                      {image.alt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

          {/* ACCOMMODATION TYPES */}
          <section id="acomodacoes" className="space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Acomodações para cada estilo de viagem
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  De suítes elegantes a dormitórios confortáveis, temos
                  acomodações perfeitas para cada perfil de viajante e duração
                  da estadia.
                </p>
              </div>
              <a
                className="text-center inline-flex items-center justify-center rounded-full border border-rose-400/60 px-6 py-3 text-sm font-semibold text-rose-200 transition hover:bg-rose-400/20"
                href={whatsappLink}
                onClick={() =>
                  trackWhatsAppClick("whatsapp-home-accommodationtypes")
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidade pelo WhatsApp
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {accommodationTypes.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.08] p-8 transition duration-300 hover:border-rose-400/70 hover:bg-white/[0.12]"
                >
                  <div className="pointer-events-none absolute inset-0 translate-y-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-rose-400/10 to-transparent" />
                  </div>

                  <div className="relative h-56 w-full overflow-hidden rounded-b-[36px] rounded-t-[36px] border-b border-white/10">
                    <ImageWithFallback
                      src={item.image}
                      fallbackSrc={item.fallbackSrc}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4 p-8">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200/80">
                      {item.description}
                    </p>
                    <div>
                      <a
                        className="inline-flex items-center text-sm font-semibold text-rose-200 transition hover:text-rose-100"
                        href={whatsappLink}
                        onClick={() =>
                          trackWhatsAppClick(
                            "whatsapp-home-accommodationtypes-buttons"
                          )
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero saber mais →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EXPERIENCES */}
          <section className="grid gap-10 rounded-[48px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_40px_80px_-60px_rgba(244,63,94,0.35)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Trabalhe, conecte-se e relaxe
              </h2>
              <p className="text-base text-slate-200/80">
                Seja para dividir experiências em uma estadia compartilhada ou
                reservar todo o espaço com exclusividade, o Click Hostel oferece
                ambientes versáteis, confortáveis e com estrutura completa. São
                diversas hospedagens com qualidade, praticidade e uma atmosfera
                colaborativa que conecta pessoas.
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/90 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-start gap-3 rounded-3xl bg-white/5 px-4 py-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {experiences.map((experience) => (
                <div
                  key={experience.name}
                  className="rounded-[36px] border border-white/10 bg-white/[0.06] p-6 shadow-inner shadow-black/30"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {experience.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/80">
                    {experience.detail}
                  </p>
                </div>
              ))}
              <a
                className="text-center mt-6 inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:-translate-y-1 hover:bg-rose-400"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-experiences")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero planejar minha estadia pelo WhatsApp
              </a>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Histórias de quem já ficou por aqui
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  Conheça experiências reais de hóspedes que viveram São Paulo
                  com o cuidado do anfitrião da Click Hostel.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-rose-400/70 hover:text-rose-200"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-testimonials")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar dúvidas com o anfitrião
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.key}
                  className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-lg shadow-black/30"
                >
                  {/* ⭐ Avatar + nome + data */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar || "/images/default-avatar.jpg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border border-rose-400/40"
                    />
                    <div>
                      <figcaption className="text-sm font-semibold text-rose-200">
                        {testimonial.name}
                      </figcaption>
                      <p className="text-xs text-slate-400">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* ⭐ Estrelas */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-rose-400 text-lg">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <span key={i} className="text-slate-500 text-lg">
                          ★
                        </span>
                      )
                    )}
                  </div>

                  {/* 💬 Avaliação */}
                  <blockquote className="text-sm leading-relaxed text-slate-100">
                    “{testimonial.content}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </section>

          {/* LOCATION */}
          <section className="grid gap-10 rounded-[48px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Estamos onde tudo acontece
              </h2>
              <p className="text-base text-slate-200/80">
                Localizados na Rua Pampa, Cidade Vargas, São Paulo – SP, estamos
                a poucos minutos do Expo Imigrantes e do Comitê Paralímpico
                Brasileiro.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85">
                  <p className="font-semibold text-white">
                    Check-in facilitado
                  </p>
                  <p className="mt-2">
                    Combine o melhor horário diretamente pelo WhatsApp e receba
                    instruções detalhadas de chegada.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85">
                  <p className="font-semibold text-white">
                    Transporte e mobilidade
                  </p>
                  <p className="mt-2">
                    Contamos com parcerias de transporte, como transfers,
                    motoristas de aplicativo e táxis, e há pontos de ônibus a
                    poucos passos da hospedagem.
                  </p>
                </div>
              </div>

              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:-translate-y-1 hover:bg-rose-400"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-location")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensagem agora
              </a>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-lg shadow-cyan-500/20">
                <iframe
                  title="Mapa Click Hostel"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.437950301864!2d-46.63629628448038!3d-23.60970776807395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c1f55c0f8e5%3A0xa3d5e7b4b8578b3f!2sRua%20Pampa%2C%20Cidade%20Vargas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004318-060!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* FAQS */}
          <section className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Perguntas frequentes
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  Não encontrou sua resposta? Nosso anfitrião responde rápido no
                  WhatsApp para garantir sua melhor experiência.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-rose-400/80 hover:text-rose-200"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-faqs")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[36px] border border-white/10 bg-white/[0.07] p-6 transition hover:border-rose-400/60"
                >
                  <summary className="cursor-pointer text-base font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="mt-auto rounded-[40px] border border-white/10 bg-white/10 p-8 text-sm text-slate-200/80">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-white">Click Hostel</p>
                <p className="mt-1 text-sm text-slate-200/70">
                  Jabaquara · São Paulo · SP · Brasil
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <img
                  src="/images/logos/cadastur-logo.png"
                  alt="Logotipo oficial Cadastur"
                  className="h-auto w-40"
                  loading="lazy"
                />
                <p className="max-w-md text-xs text-slate-200/70">
                  Registro Cadastur ativo: mais segurança, transparência e
                  tranquilidade em cada hospedagem.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-400/40 transition hover:-translate-y-1 hover:bg-rose-400"
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("whatsapp-home-footer")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar pelo WhatsApp
              </a>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
                hospedagem · experiências · feiras · esportes
              </span>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Click Hostel. Todos os direitos
            reservados. Atendimento personalizado diretamente com o anfitrião.
          </p>
        </footer>
      </div>

      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-5 md:hidden">
        <a
          className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_40px_-20px_rgba(16,185,129,0.6)] transition hover:translate-y-[-1px] hover:bg-rose-400"
          href={whatsappLink}
          onClick={() => trackWhatsAppClick("whatsapp-home-bottom-button")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar agora pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
