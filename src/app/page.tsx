const whatsappLink =
  "https://wa.me/5548999999999?text=Ol%C3%A1%20quero%20garantir%20minha%20reserva%20no%20Click%20Hostel!";

const highlights = [
  {
    title: "Localização Imbatível",
    description:
      "Na Lagoa da Conceição, próximo às praias, trilhas, cafés e ao melhor da cena criativa de Florianópolis.",
  },
  {
    title: "Experiência Personalizada",
    description:
      "Anfitriã presente para ajudar com dicas locais, roteiros exclusivos e suporte antes, durante e após a estadia.",
  },
  {
    title: "Flexibilidade Total",
    description:
      "Quartos privativos e compartilhados, diárias flexíveis, espaços para trabalho remoto e estrutura completa para long stays.",
  },
];

const accommodationTypes = [
  {
    title: "Suítes privativas",
    description:
      "Conforto com banheiro exclusivo, enxoval completo, smart TV, frigobar e decoração contemporânea.",
  },
  {
    title: "Quartos compartilhados",
    description:
      "Beliches espaçosas, lockers individuais e luz de leitura para quem busca economia sem abrir mão do bem-estar.",
  },
  {
    title: "Estadias longas",
    description:
      "Planos especiais para nômades digitais e estudantes com cozinha equipada, lavanderia e ambiente colaborativo.",
  },
];

const amenities = [
  "Cozinha compartilhada completa",
  "Áreas internas e externas para coworking",
  "Internet fibra óptica super veloz",
  "Terraço com vista para a Lagoa",
  "Lounges com ar-condicionado e smart TV",
  "Armários com fechadura em todos os quartos",
  "Café e chá disponíveis 24h",
  "Estacionamento rotativo gratuito na rua",
];

const experiences = [
  {
    name: "Tours guiados e experiências locais",
    detail:
      "Trilhas na Costa da Lagoa, passeios de stand up paddle, tours gastronômicos e conexão com anfitriões parceiros.",
  },
  {
    name: "Coworking criativo",
    detail:
      "Espaços com ergonomia, boa iluminação e tomadas estrategicamente posicionadas para focar no trabalho ou nos estudos.",
  },
  {
    name: "Comunidade global",
    detail:
      "Eventos de integração, noites temáticas e networking com viajantes de diversas partes do mundo.",
  },
];

const faqs = [
  {
    question: "Como faço minha reserva?",
    answer:
      "Todas as reservas são feitas diretamente pelo WhatsApp da anfitriã. Clique em qualquer botão do site para iniciar a conversa e garantir a melhor tarifa.",
  },
  {
    question: "O hostel é perto da praia?",
    answer:
      "Estamos a 10 minutos das praias Mole e Joaquina e a poucos passos da orla da Lagoa da Conceição, com fácil acesso de transporte público e bikes compartilhadas.",
  },
  {
    question: "Tem espaço para trabalhar?",
    answer:
      "Sim! Oferecemos coworking interno climatizado, varandas com mesas, internet fibra óptica e salas silenciosas para reuniões online.",
  },
  {
    question: "O café da manhã está incluso?",
    answer:
      "Oferecemos uma estação de café e chá 24h. Parcerias com cafeterias locais garantem descontos especiais para hóspedes.",
  },
];

const testimonials = [
  {
    name: "Camila, São Paulo",
    content:
      "Atendimento impecável da anfitriã! As dicas de passeios fizeram toda a diferença na minha viagem solo.",
  },
  {
    name: "Lucas, Buenos Aires",
    content:
      "Espaço perfeito para trabalho remoto. Internet rápida, áreas silenciosas e uma vista incrível da Lagoa.",
  },
  {
    name: "Maria & João, Curitiba",
    content:
      "Escolhemos o quarto privativo e parecia um boutique hotel. Voltaremos com certeza!",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0.95)_55%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(135deg,_rgba(15,118,110,0.15),_transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-32 pt-6 md:gap-24 md:px-10 lg:px-16">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-lg">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
              Click Hostel
            </p>
            <p className="text-sm font-medium text-slate-100/80">
              Lagoa da Conceição · Florianópolis · Brasil
            </p>
          </div>
          <a
            className="hidden items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:scale-105 hover:bg-emerald-300 md:inline-flex"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar agora
          </a>
        </header>

        <main className="flex flex-1 flex-col gap-20">
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-cyan-200/90">
                hospedagem inteligente
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Viva a Lagoa da Conceição com o aconchego de casa e o dinamismo de um coliving.
              </h1>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                O Click Hostel combina quartos confortáveis, ambientes criativos e a atenção pessoal da anfitriã para você explorar Florianópolis no seu ritmo.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:translate-y-[-2px] hover:bg-emerald-300"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com a anfitriã no WhatsApp
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-emerald-400/80 hover:text-emerald-200"
                  href="#acomodacoes"
                >
                  Ver acomodações
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-emerald-300">4.9/5</p>
                  <p className="text-sm text-slate-200/70">Avaliação média dos hóspedes em plataformas parceiras.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-emerald-300">50m</p>
                  <p className="text-sm text-slate-200/70">Da orla da Lagoa, com restaurantes, bares e transporte público.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-emerald-300">Wi-Fi 500Mb</p>
                  <p className="text-sm text-slate-200/70">Internet de alta velocidade para reuniões, aulas e streaming.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-cyan-400/30 via-emerald-400/20 to-transparent blur-3xl" />
              <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-[0_40px_80px_-40px_rgba(16,185,129,0.45)]">
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
          </section>

          <section id="acomodacoes" className="space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Acomodações para cada estilo de viagem
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  Escolha entre suítes privativas com toque boutique, dormitórios acolhedores e soluções flexíveis para estadias prolongadas.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
                href={whatsappLink}
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
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.08] p-8 transition duration-300 hover:border-emerald-400/70 hover:bg-white/[0.12]"
                >
                  <div className="pointer-events-none absolute inset-0 translate-y-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex items-center text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero saber mais →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-10 rounded-[48px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_40px_80px_-60px_rgba(14,165,233,0.4)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Trabalhe, conecte-se e relaxe sem sair de casa
              </h2>
              <p className="text-base text-slate-200/80">
                Seja para um final de semana ou para meses de estadia, o Click Hostel oferece infraestrutura completa para produtividade e lazer. Aproveite a cozinha comunitária, áreas de descanso, coworking criativo e a energia colaborativa da nossa comunidade.
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/90 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <li key={amenity} className="flex items-start gap-3 rounded-3xl bg-white/5 px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:-translate-y-1 hover:bg-emerald-300"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero planejar minha estadia pelo WhatsApp
              </a>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Histórias de quem já ficou por aqui</h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  Conheça experiências reais de hóspedes que viveram Florianópolis com o cuidado da anfitriã do Click Hostel.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-emerald-400/70 hover:text-emerald-200"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar dúvidas com a anfitriã
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-lg shadow-black/30"
                >
                  <blockquote className="text-sm leading-relaxed text-slate-100">
                    “{testimonial.content}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-emerald-200">
                    {testimonial.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="grid gap-10 rounded-[48px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Estamos onde tudo acontece</h2>
              <p className="text-base text-slate-200/80">
                Rua Vereador Osni Ortiga, Lagoa da Conceição, Florianópolis - SC. A poucos minutos das praias mais famosas, escolas de kitesurf, bares, restaurantes e do centrinho da Lagoa.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85">
                  <p className="font-semibold text-white">Check-in facilitado</p>
                  <p className="mt-2">
                    Combine o melhor horário diretamente pelo WhatsApp e receba instruções detalhadas de chegada.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85">
                  <p className="font-semibold text-white">Transporte e mobilidade</p>
                  <p className="mt-2">
                    Parcerias com transfers, aluguel de bikes e pontos de ônibus próximos para você explorar a ilha inteira.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:-translate-y-1 hover:bg-emerald-300"
                href={whatsappLink}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.380530764688!2d-48.452360623692196!3d-27.59747032428401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273e1ae76e21c7%3A0x785e70403ee58a96!2sLagoa%20da%20Concei%C3%A7%C3%A3o%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Perguntas frequentes</h2>
                <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                  Não encontrou sua resposta? Nossa anfitriã responde rápido no WhatsApp para garantir sua melhor experiência.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-emerald-400/80 hover:text-emerald-200"
                href={whatsappLink}
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
                  className="group rounded-[36px] border border-white/10 bg-white/[0.07] p-6 transition hover:border-emerald-400/60"
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

        <footer className="mt-auto rounded-[40px] border border-white/10 bg-white/10 p-8 text-sm text-slate-200/80">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Click Hostel</p>
              <p className="mt-1 text-sm text-slate-200/70">
                Lagoa da Conceição · Florianópolis · Santa Catarina · Brasil
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 transition hover:-translate-y-1 hover:bg-emerald-300"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar pelo WhatsApp
              </a>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
                hospedagem · coworking · experiências
              </span>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Click Hostel. Todos os direitos reservados. Atendimento personalizado diretamente com a anfitriã.
          </p>
        </footer>
      </div>

      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-5 md:hidden">
        <a
          className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_40px_-20px_rgba(16,185,129,0.6)] transition hover:translate-y-[-1px] hover:bg-emerald-300"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar agora pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
