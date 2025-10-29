export type PropertyGalleryImage = {
  src: string;
  fallbackSrc?: string;
  alt: string;
};

export type Property = {
  slug: string;
  name: string;
  neighborhood: string;
  distance: string;
  capacity: string;
  mainImage: string;
  fallbackSrc?: string;
  shortDescription: string;
  tags: string[];
  accessibilityHighlights: string[];
  highlights: string[];
  segments: string[];
  gallery: PropertyGalleryImage[];
};

export const properties: Property[] = [
  {
    slug: "villa-paralimpica",
    name: "Villa Paralímpica Click",
    neighborhood: "Jabaquara · São Paulo",
    distance: "300 m do CT Paralímpico",
    capacity: "Até 18 hóspedes",
    mainImage: "/images/quartos/quarto16.webp",
    fallbackSrc: "/images/quartos/quarto2.jpeg",
    shortDescription:
      "Casa térrea totalmente acessível, com corredores amplos, banheiros adaptados e logística ideal para delegações paralímpicas e equipes técnicas.",
    tags: ["Casa inteira", "Estadias esportivas", "Acessível"],
    accessibilityHighlights: [
      "Rampas com corrimão e piso nivelado em todos os ambientes",
      "Banheiros adaptados com barras de apoio e box ampliado",
      "Equipe treinada para apoiar transfers e rotinas de atletas",
    ],
    highlights: [
      "Quartos compartilhados e suítes privativas para staff",
      "Cozinha equipada e áreas de briefing com Wi-Fi de alta velocidade",
      "Estacionamento interno para vans e veículos adaptados",
    ],
    segments: [
      "Delegações paralímpicas",
      "Montadores e equipes de operação",
      "Comitês e federações esportivas",
    ],
    gallery: [
      {
        src: "/images/quartos/quarto16.webp",
        fallbackSrc: "/images/quartos/quarto3.webp",
        alt: "Dormitório amplo com beliches e circulação acessível",
      },
      {
        src: "/images/banheiros/banheiro1.jpeg",
        fallbackSrc: "/images/quartos/quarto5.webp",
        alt: "Banheiro adaptado com barras e box aberto",
      },
      {
        src: "/images/area-externa/externo2.jpeg",
        fallbackSrc: "/images/area-externa/externo1.jpg",
        alt: "Área externa nivelada com acesso para cadeirantes",
      },
      {
        src: "/images/cozinhas/cozinha1.jpeg",
        fallbackSrc: "/images/salas/sala2.webp",
        alt: "Cozinha completa com bancada de apoio",
      },
      {
        src: "/images/salas/sala1.jpeg",
        fallbackSrc: "/images/salas/sala3.jpeg",
        alt: "Sala integrada para reuniões rápidas e convivência",
      },
    ],
  },
  {
    slug: "casa-expo-design",
    name: "Casa Expo Design",
    neighborhood: "Vila Guarani · São Paulo",
    distance: "450 m do São Paulo Expo",
    capacity: "Até 20 hóspedes",
    mainImage: "/images/espacos-combinados/espaco1.png",
    fallbackSrc: "/images/salas/sala2.webp",
    shortDescription:
      "Ambiente moderno com áreas colaborativas, suítes confortáveis e suporte completo para equipes de montagem e expositores.",
    tags: ["Equipe completa", "Wi-Fi turbo", "Check-in flexível"],
    accessibilityHighlights: [
      "Rampas antiderrapantes na entrada e circulação livre",
      "Quarto térreo com banheiro adaptado",
      "Parcerias com transporte acessível para SP Expo e CT",
    ],
    highlights: [
      "Salas multifuncionais para planejamento e treinamentos",
      "Zona de descompressão com lounge e área gourmet",
      "Gestão de enxoval diária e suporte 24 horas",
    ],
    segments: [
      "Montadores de stands",
      "Equipes de marketing e produção",
      "Visitantes corporativos",
    ],
    gallery: [
      {
        src: "/images/espacos-combinados/espaco1.png",
        fallbackSrc: "/images/lounges/espaco1.webp",
        alt: "Área colaborativa com mesas e iluminação natural",
      },
      {
        src: "/images/salas/sala3.jpeg",
        fallbackSrc: "/images/salas/sala4.jpg",
        alt: "Sala de estar ampla com sofá e TV",
      },
      {
        src: "/images/quartos/quarto13.webp",
        fallbackSrc: "/images/quartos/quarto12.jpg",
        alt: "Suíte com cama de casal e bancada de trabalho",
      },
      {
        src: "/images/lounges/espaco2.jpeg",
        fallbackSrc: "/images/area-externa/externo3.jpeg",
        alt: "Lounge para integração de equipes",
      },
      {
        src: "/images/area-externa/externo4.jpeg",
        fallbackSrc: "/images/area-externa/externo5.png",
        alt: "Varanda iluminada para briefings rápidos",
      },
    ],
  },
  {
    slug: "clickhouse-family-club",
    name: "ClickHouse Family Club",
    neighborhood: "Vila Mariana · São Paulo",
    distance: "8 min do São Paulo Expo",
    capacity: "Até 24 hóspedes",
    mainImage: "/images/quartos/quarto7.jpeg",
    fallbackSrc: "/images/quartos/quarto9.jpeg",
    shortDescription:
      "Estrutura versátil para grupos grandes, com piscina, áreas de convivência e quartos que equilibram privacidade e integração.",
    tags: ["Piscina", "Eventos e festas", "Day use"],
    accessibilityHighlights: [
      "Circulação ampla entre áreas sociais internas e externas",
      "Rotas adaptadas para cadeirantes até a área de lazer",
      "Equipe preparada para apoio em festas inclusivas",
    ],
    highlights: [
      "Dormitórios moduláveis para caravanas e delegações",
      "Piscina aquecida e espaço gourmet para confraternizações",
      "Pacotes especiais para empresas, retiros e day use",
    ],
    segments: [
      "Caravanas de eventos",
      "Empresas e treinamentos",
      "Famílias e celebrações",
    ],
    gallery: [
      {
        src: "/images/quartos/quarto7.jpeg",
        fallbackSrc: "/images/quartos/quarto8.jpeg",
        alt: "Quarto com camas de solteiro e armários individuais",
      },
      {
        src: "/images/piscina/piscina1.webp",
        fallbackSrc: "/images/piscina/piscina2.jpeg",
        alt: "Piscina iluminada com área de descanso",
      },
      {
        src: "/images/salas/sala4.jpg",
        fallbackSrc: "/images/salas/sala2.webp",
        alt: "Sala ampla integrada à copa",
      },
      {
        src: "/images/quartos/quarto11.webp",
        fallbackSrc: "/images/quartos/quarto10.webp",
        alt: "Dormitório com beliches e ventilação natural",
      },
      {
        src: "/images/area-externa/externo5.png",
        fallbackSrc: "/images/area-externa/externo2.jpeg",
        alt: "Área externa com espaço para eventos e day use",
      },
    ],
  },
];
