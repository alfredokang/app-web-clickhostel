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
  address?: string;
  gallery: PropertyGalleryImage[];
};

export const properties: Property[] = [
  {
    slug: "unidade-381",
    name: "Unidade 381",
    neighborhood: "Jabaquara · São Paulo",
    distance: "300 m do CT Paralímpico",
    capacity: "Até 18 hóspedes",
    mainImage: "/images/casas/casa_381/foto1.jpeg",
    fallbackSrc: "/images/casas/casa_381/foto1.jpeg",
    shortDescription:
      "Casa térrea ampla e totalmente acessível, com piscina, sauna e áreas integradas ideais para delegações paralímpicas, equipes técnicas e grupos esportivos.",
    tags: [
      "Casa inteira",
      "Piscina com sauna",
      "Acessível",
      "Estadias esportivas",
      "Wi-Fi rápido",
    ],
    accessibilityHighlights: [
      "Rampas com corrimão e circulação sem desníveis",
      "Banheiros adaptados com barras e box ampliado",
      "Corredores largos para cadeiras de rodas",
      "Acesso direto à piscina por rampas suaves",
    ],
    highlights: [
      "Espaços de convivência e lazer integrados",
      "Cozinha equipada e áreas para reuniões de equipe",
      "Estacionamento amplo para vans e veículos adaptados",
    ],
    segments: [
      "Delegações paralímpicas",
      "Atletas e treinadores",
      "Montadores de stands e equipes técnicas",
    ],
    address:
      "Rua General Manuel Vargas, 381 - Jabaquara, São Paulo - SP, 04320-000",
    gallery: [
      {
        src: "/images/casas/casa_381/foto1.jpeg",
        fallbackSrc: "/images/casas/casa_381/foto1.jpeg",
        alt: "Piscina ampla com sauna acoplada e área de descanso",
      },
      {
        src: "/images/casas/casa_381/foto3.jpg",
        fallbackSrc: "/images/casas/casa_381/foto3.jpg",
        alt: "Piscina integrada ao lounge e área gourmet",
      },
      {
        src: "/images/casas/casa_381/foto4.jpg",
        fallbackSrc: "/images/casas/casa_381/foto4.jpg",
        alt: "Vista aérea da piscina e espaço de convivência",
      },
      {
        src: "/images/casas/casa_381/foto5.jpg",
        fallbackSrc: "/images/casas/casa_381/foto5.jpg",
        alt: "Churrasqueira coberta com mesa de apoio",
      },
      {
        src: "/images/casas/casa_381/foto7.jpg",
        fallbackSrc: "/images/casas/casa_381/foto7.jpg",
        alt: "Espaço gourmet moderno com churrasqueira e bancada",
      },
      {
        src: "/images/casas/casa_381/foto9.jpg",
        fallbackSrc: "/images/casas/casa_381/foto9.jpg",
        alt: "Área externa com churrasqueira e cobertura de madeira",
      },
      {
        src: "/images/casas/casa_381/foto10.jpg",
        fallbackSrc: "/images/casas/casa_381/foto10.jpg",
        alt: "Suíte privativa com cama confortável e iluminação suave",
      },
      {
        src: "/images/casas/casa_381/sala1.jpeg",
        fallbackSrc: "/images/casas/casa_381/sala1.jpeg",
        alt: "Sala de estar espaçosa com sofás e TV",
      },
      {
        src: "/images/casas/casa_381/espaco2.jpeg",
        fallbackSrc: "/images/casas/casa_381/espaco2.jpeg",
        alt: "Lounge interno com bar e área social",
      },
      {
        src: "/images/casas/casa_381/foto11.jpg",
        fallbackSrc: "/images/casas/casa_381/foto11.jpg",
        alt: "Banheira de hidromassagem em suíte privativa",
      },
      {
        src: "/images/casas/casa_381/foto13.jpg",
        fallbackSrc: "/images/casas/casa_381/foto13.jpg",
        alt: "Café da manhã servido com frutas e bebidas",
      },
      {
        src: "/images/casas/casa_381/foto15.jpg",
        fallbackSrc: "/images/casas/casa_381/foto15.jpg",
        alt: "Mesa de café da manhã montada no lounge interno",
      },
      {
        src: "/images/casas/casa_381/foto14.jpg",
        fallbackSrc: "/images/casas/casa_381/foto14.jpg",
        alt: "Forno de pizza a lenha ao lado da churrasqueira",
      },
      {
        src: "/images/casas/casa_381/foto16.png",
        fallbackSrc: "/images/casas/casa_381/foto16.png",
        alt: "Área coberta para festas e confraternizações",
      },
    ],
  },
  {
    slug: "unidade-101",
    name: "Unidade 101",
    neighborhood: "Jabaquara · São Paulo",
    distance: "450 m do São Paulo Expo",
    capacity: "Até 20 hóspedes",
    mainImage: "/images/casas/casa_101/foto1.jpg",
    fallbackSrc: "/images/casas/casa_101/foto1.jpg",
    shortDescription:
      "Casa moderna e funcional, ideal para equipes de montagem, expositores e visitantes de feiras. Ambientes integrados, dormitórios confortáveis e áreas de convivência colaborativas.",
    tags: [
      "Casa inteira",
      "Wi-Fi turbo",
      "Check-in flexível",
      "Piscina",
      "Equipes corporativas",
    ],
    accessibilityHighlights: [
      "Rampa de acesso principal com piso antiderrapante",
      "Quarto térreo adaptado para mobilidade reduzida",
      "Circulação ampla e livre de desníveis",
    ],
    highlights: [
      "Salas amplas para reuniões e treinamentos",
      "Área gourmet e lounge integrados à piscina",
      "Ambiente climatizado e suporte operacional 24h",
    ],
    segments: [
      "Expositores e feirantes",
      "Montadores de stands",
      "Equipes de produção e marketing",
    ],
    address:
      "Rua Cornélio Pires, 101 - Cidade Vargas, São Paulo - SP, 04320-140",
    gallery: [
      {
        src: "/images/casas/casa_101/foto1.jpg",
        fallbackSrc: "/images/casas/casa_101/foto1.jpg",
        alt: "Piscina externa com área de lazer ao fundo",
      },
      {
        src: "/images/casas/casa_101/foto2.jpg",
        fallbackSrc: "/images/casas/casa_101/foto2.jpg",
        alt: "Área externa ampla com acesso à piscina",
      },
      {
        src: "/images/casas/casa_101/foto3.jpg",
        fallbackSrc: "/images/casas/casa_101/foto3.jpg",
        alt: "Quarto coletivo com beliches e janelas grandes",
      },
      {
        src: "/images/casas/casa_101/foto4.jpg",
        fallbackSrc: "/images/casas/casa_101/foto4.jpg",
        alt: "Dormitório espaçoso com várias camas beliche",
      },
      {
        src: "/images/casas/casa_101/foto5.jpg",
        fallbackSrc: "/images/casas/casa_101/foto5.jpg",
        alt: "Corredor interno com boa iluminação natural",
      },
      {
        src: "/images/casas/casa_101/foto6.jpg",
        fallbackSrc: "/images/casas/casa_101/foto6.jpg",
        alt: "Quarto coletivo com múltiplas camas e ventilação natural",
      },
      {
        src: "/images/casas/casa_101/foto7.jpg",
        fallbackSrc: "/images/casas/casa_101/foto7.jpg",
        alt: "Ambiente de dormitório compartilhado e organizado",
      },
      {
        src: "/images/casas/casa_101/foto8.jpg",
        fallbackSrc: "/images/casas/casa_101/foto8.jpg",
        alt: "Quarto com beliches e iluminação agradável",
      },
      {
        src: "/images/casas/casa_101/foto9.jpg",
        fallbackSrc: "/images/casas/casa_101/foto9.jpg",
        alt: "Área de convivência entre os quartos",
      },
      {
        src: "/images/casas/casa_101/foto10.jpg",
        fallbackSrc: "/images/casas/casa_101/foto10.jpg",
        alt: "Banheiro limpo e organizado com box transparente",
      },
      {
        src: "/images/casas/casa_101/foto11.jpg",
        fallbackSrc: "/images/casas/casa_101/foto11.jpg",
        alt: "Sala de estar com área de recepção",
      },
      {
        src: "/images/casas/casa_101/sala4.jpg",
        fallbackSrc: "/images/casas/casa_101/sala4.jpg",
        alt: "Sala de convivência com sofás e mesa de apoio",
      },
      {
        src: "/images/casas/casa_101/foto12.jpg",
        fallbackSrc: "/images/casas/casa_101/foto12.jpg",
        alt: "Dormitório coletivo espaçoso e bem ventilado",
      },
      {
        src: "/images/casas/casa_101/foto13.jpg",
        fallbackSrc: "/images/casas/casa_101/foto13.jpg",
        alt: "Escada de acesso com corrimão lateral",
      },
      {
        src: "/images/casas/casa_101/foto14.jpg",
        fallbackSrc: "/images/casas/casa_101/foto14.jpg",
        alt: "Banheiro bem iluminado com pia e espelho grande",
      },
      {
        src: "/images/casas/casa_101/foto15.jpg",
        fallbackSrc: "/images/casas/casa_101/foto15.jpg",
        alt: "Banheiro coletivo funcional e arejado",
      },
      {
        src: "/images/casas/casa_101/foto16.jpg",
        fallbackSrc: "/images/casas/casa_101/foto16.jpg",
        alt: "Banheiro compacto e limpo",
      },
      {
        src: "/images/casas/casa_101/foto17.jpg",
        fallbackSrc: "/images/casas/casa_101/foto17.jpg",
        alt: "Quarto privativo com cama de casal",
      },
      {
        src: "/images/casas/casa_101/foto18.jpg",
        fallbackSrc: "/images/casas/casa_101/foto18.jpg",
        alt: "Quarto individual simples e acolhedor",
      },
      {
        src: "/images/casas/casa_101/foto19.jpg",
        fallbackSrc: "/images/casas/casa_101/foto19.jpg",
        alt: "Cozinha equipada com utensílios e armários",
      },
      {
        src: "/images/casas/casa_101/foto20.jpg",
        fallbackSrc: "/images/casas/casa_101/foto20.jpg",
        alt: "Escada interna",
      },
    ],
  },
  {
    slug: "unidade-247-259",
    name: "Unidade 247/259",
    neighborhood: "Jabaquara · São Paulo",
    distance: "8 min do São Paulo Expo",
    capacity: "Até 24 hóspedes",
    mainImage: "/images/casas/casa_247-259/foto1.jpg",
    fallbackSrc: "/images/casas/casa_247-259/foto1.jpg",
    shortDescription:
      "Duas casas integradas com ampla estrutura para grupos e eventos, oferecendo dormitórios versáteis, áreas de convivência e espaço gourmet ideal para confraternizações.",
    tags: [
      "Casa inteira",
      "Grupos grandes",
      "Day use",
      "Eventos e festas",
      "Check-in flexível",
      "Acessível",
    ],
    accessibilityHighlights: [
      "Rotas niveladas entre áreas internas e externas",
      "Corredores amplos que facilitam a circulação de cadeirantes",
      "Acesso facilitado até a área de lazer e churrasqueira",
    ],
    highlights: [
      "Espaços integrados para convivência e confraternizações",
      "Dormitórios adaptáveis para equipes ou famílias",
      "Ambiente ideal para eventos, retiros e hospedagens corporativas",
    ],
    segments: [
      "Caravanas de eventos",
      "Feirantes e expositores",
      "Equipes corporativas e de produção",
    ],
    address: "Rua Pampa, 247/259 - Cidade Vargas, São Paulo - SP, 04318-060",
    gallery: [
      {
        src: "/images/casas/casa_247-259/foto1.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto1.jpg",
        alt: "Fachada principal com portão e entrada frontal",
      },
      {
        src: "/images/casas/casa_247-259/foto2.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto2.jpg",
        alt: "Área externa ampla com passagem lateral",
      },
      {
        src: "/images/casas/casa_247-259/foto3.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto3.jpg",
        alt: "Varanda coberta com espaço para convivência",
      },
      {
        src: "/images/casas/casa_247-259/foto4.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto4.jpg",
        alt: "Sala de estar ampla com janelas e boa iluminação",
      },
      {
        src: "/images/casas/casa_247-259/foto5.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto5.jpg",
        alt: "Quarto com camas individuais organizadas",
      },
      {
        src: "/images/casas/casa_247-259/foto6.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto6.jpg",
        alt: "Dormitório coletivo com beliches de madeira",
      },
      {
        src: "/images/casas/casa_247-259/foto7.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto7.jpg",
        alt: "Quarto espaçoso com múltiplas camas",
      },
      {
        src: "/images/casas/casa_247-259/foto8.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto8.jpg",
        alt: "Quintal aberto com acesso às áreas laterais",
      },
      {
        src: "/images/casas/casa_247-259/foto9.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto9.jpg",
        alt: "Sala de estar com sofás e televisão",
      },
      {
        src: "/images/casas/casa_247-259/foto10.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto10.jpg",
        alt: "Ambiente de convivência com área social ampla",
      },
      {
        src: "/images/casas/casa_247-259/foto11.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto11.jpg",
        alt: "Quarto duplo com camas de solteiro",
      },
      {
        src: "/images/casas/casa_247-259/foto12.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto12.jpg",
        alt: "Corredor lateral externo com passagem coberta",
      },
      {
        src: "/images/casas/casa_247-259/foto13.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto13.jpg",
        alt: "Dormitório coletivo com beliches organizados",
      },
      {
        src: "/images/casas/casa_247-259/foto14.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto14.jpg",
        alt: "Quarto privativo com cama de casal e armário",
      },
      {
        src: "/images/casas/casa_247-259/foto15.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto15.jpg",
        alt: "Área comum interna com acesso aos dormitórios",
      },
      {
        src: "/images/casas/casa_247-259/foto16.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto16.jpg",
        alt: "Quarto simples com camas de solteiro",
      },
      {
        src: "/images/casas/casa_247-259/foto17.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto17.jpg",
        alt: "Ambiente interno arejado com boa iluminação natural",
      },
      {
        src: "/images/casas/casa_247-259/foto18.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto18.jpg",
        alt: "Quarto com ventilador e guarda-roupa",
      },
      {
        src: "/images/casas/casa_247-259/foto19.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto19.jpg",
        alt: "Dormitório espaçoso para grupos grandes",
      },
      {
        src: "/images/casas/casa_247-259/foto20.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto20.jpg",
        alt: "Quarto iluminado com janelas amplas",
      },
      {
        src: "/images/casas/casa_247-259/foto21.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto21.jpg",
        alt: "Quarto mobiliado com camas e mesa lateral",
      },
      {
        src: "/images/casas/casa_247-259/foto22.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto22.jpg",
        alt: "Quarto confortável e bem organizado",
      },
      {
        src: "/images/casas/casa_247-259/foto23.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto23.jpg",
        alt: "Dormitório coletivo ventilado e espaçoso",
      },
      {
        src: "/images/casas/casa_247-259/foto24.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto24.jpg",
        alt: "Área de lazer externa com churrasqueira",
      },
      {
        src: "/images/casas/casa_247-259/foto25.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto25.jpg",
        alt: "Dormitório simples com camas individuais",
      },
      {
        src: "/images/casas/casa_247-259/foto26.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto26.jpg",
        alt: "Quarto com beliche e armário lateral",
      },
      {
        src: "/images/casas/casa_247-259/foto27.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto27.jpg",
        alt: "Quarto de hóspedes com ventilador de teto",
      },
      {
        src: "/images/casas/casa_247-259/foto28.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto28.jpg",
        alt: "Corredor interno que conecta os dormitórios",
      },
      {
        src: "/images/casas/casa_247-259/foto29.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto29.jpg",
        alt: "Vista dos dormitórios alinhados no corredor",
      },
      {
        src: "/images/casas/casa_247-259/foto30.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto30.jpg",
        alt: "Sala de TV com sofás e cortinas",
      },
      {
        src: "/images/casas/casa_247-259/foto31.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto31.jpg",
        alt: "Sala de jantar ampla com mesa central",
      },
      {
        src: "/images/casas/casa_247-259/foto32.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto32.jpg",
        alt: "Quarto privativo organizado para casal",
      },
      {
        src: "/images/casas/casa_247-259/foto33.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto33.jpg",
        alt: "Cozinha equipada com fogão e geladeira",
      },
      {
        src: "/images/casas/casa_247-259/foto34.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto34.jpg",
        alt: "Corredor externo com acesso aos quartos",
      },
      {
        src: "/images/casas/casa_247-259/foto35.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto35.jpg",
        alt: "Dormitório com beliche e cama de casal",
      },
      {
        src: "/images/casas/casa_247-259/foto36.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto36.jpg",
        alt: "Quarto iluminado com janelas e cortinas",
      },
      {
        src: "/images/casas/casa_247-259/foto37.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto37.jpg",
        alt: "Dormitório com camas de solteiro alinhadas",
      },
      {
        src: "/images/casas/casa_247-259/foto39.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto39.jpg",
        alt: "Quarto espaçoso e bem ventilado",
      },
      {
        src: "/images/casas/casa_247-259/foto40.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto40.jpg",
        alt: "Quarto simples e funcional para grupos",
      },
      {
        src: "/images/casas/casa_247-259/foto42.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto42.jpg",
        alt: "Cozinha organizada com pia e bancada lateral",
      },
      {
        src: "/images/casas/casa_247-259/foto43.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto43.jpg",
        alt: "Cozinha espaçosa com armários e utensílios básicos",
      },
      {
        src: "/images/casas/casa_247-259/foto44.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto44.jpg",
        alt: "Cozinha ampla e bem iluminada",
      },
      {
        src: "/images/casas/casa_247-259/foto45.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto45.jpg",
        alt: "Cozinha com área de preparo e geladeira",
      },
      {
        src: "/images/casas/casa_247-259/foto46.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto46.jpg",
        alt: "Cozinha com mesa auxiliar para refeições rápidas",
      },
      {
        src: "/images/casas/casa_247-259/foto52.jpg",
        fallbackSrc: "/images/casas/casa_247-259/foto52.jpg",
        alt: "Garagem coberta com vagas para carros",
      },
    ],
  },
  {
    slug: "unidade-561",
    name: "Unidade 561",
    neighborhood: "Jabaquara · São Paulo",
    distance: "100 m do São Paulo Expo",
    capacity: "Até 20 hóspedes",
    mainImage: "/images/casas/casa_561/foto1.png",
    fallbackSrc: "/images/casas/casa_561/foto1.png",
    shortDescription:
      "Casa moderna e acolhedora a poucos metros do São Paulo Expo, ideal para equipes, famílias e eventos corporativos.",
    tags: [
      "Casa inteira",
      "Wi-Fi rápido",
      "Piscina",
      "Check-in flexível",
      "Ambiente corporativo",
    ],
    accessibilityHighlights: [
      "Entrada com rampa antiderrapante e circulação sem degraus",
      "Quarto térreo com banheiro acessível",
      "Rotas adaptadas até a área social e de lazer",
    ],
    highlights: [
      "Ambientes amplos e bem iluminados para grupos ou famílias",
      "Área gourmet integrada à sala e cozinha",
      "Suporte e enxoval diário com equipe dedicada",
    ],
    segments: [
      "Equipes de montagem e produção",
      "Grupos corporativos e visitantes de feiras",
      "Famílias em eventos ou férias em São Paulo",
    ],
    address:
      "Rua Getúlio Vargas Filho, 561 - Cidade Vargas, São Paulo - SP, 04318-030",
    gallery: [
      {
        src: "/images/casas/casa_561/foto1.png",
        fallbackSrc: "/images/casas/casa_561/foto1.png",
        alt: "Sala de estar ampla e iluminada com sofá e TV",
      },
      {
        src: "/images/casas/casa_561/foto2.png",
        fallbackSrc: "/images/casas/casa_561/foto2.png",
        alt: "Cozinha completa com armários e eletrodomésticos",
      },
      {
        src: "/images/casas/casa_561/foto3.png",
        fallbackSrc: "/images/casas/casa_561/foto3.png",
        alt: "Quarto confortável com cama de casal",
      },
      {
        src: "/images/casas/casa_561/foto5.png",
        fallbackSrc: "/images/casas/casa_561/foto5.png",
        alt: "Cozinha integrada à sala de jantar",
      },
      {
        src: "/images/casas/casa_561/foto6.png",
        fallbackSrc: "/images/casas/casa_561/foto6.png",
        alt: "Quarto duplo com camas e iluminação natural",
      },
      {
        src: "/images/casas/casa_561/foto7.png",
        fallbackSrc: "/images/casas/casa_561/foto7.png",
        alt: "Cozinha funcional com bancada e pia",
      },
      {
        src: "/images/casas/casa_561/foto9.png",
        fallbackSrc: "/images/casas/casa_561/foto9.png",
        alt: "Quarto de casal bem organizado",
      },
      {
        src: "/images/casas/casa_561/foto12.png",
        fallbackSrc: "/images/casas/casa_561/foto12.png",
        alt: "Cozinha com mesa para refeições rápidas",
      },
      {
        src: "/images/casas/casa_561/foto13.png",
        fallbackSrc: "/images/casas/casa_561/foto13.png",
        alt: "Sala de estar confortável e arejada",
      },
      {
        src: "/images/casas/casa_561/foto15.png",
        fallbackSrc: "/images/casas/casa_561/foto15.png",
        alt: "Quarto iluminado com janelas amplas",
      },
      {
        src: "/images/casas/casa_561/foto16.png",
        fallbackSrc: "/images/casas/casa_561/foto16.png",
        alt: "Poltrona decorativa em ambiente acolhedor",
      },
      {
        src: "/images/casas/casa_561/foto17.png",
        fallbackSrc: "/images/casas/casa_561/foto17.png",
        alt: "Suíte privativa com cama de casal",
      },
      {
        src: "/images/casas/casa_561/foto18.png",
        fallbackSrc: "/images/casas/casa_561/foto18.png",
        alt: "Sala de convivência espaçosa com área social",
      },
      {
        src: "/images/casas/casa_561/foto19.png",
        fallbackSrc: "/images/casas/casa_561/foto19.png",
        alt: "Cozinha moderna com bancada de preparo",
      },
      {
        src: "/images/casas/casa_561/foto20.png",
        fallbackSrc: "/images/casas/casa_561/foto20.png",
        alt: "Quarto minimalista e bem ventilado",
      },
      {
        src: "/images/casas/casa_561/foto21.png",
        fallbackSrc: "/images/casas/casa_561/foto21.png",
        alt: "Quarto amplo com iluminação natural",
      },
      {
        src: "/images/casas/casa_561/foto22.png",
        fallbackSrc: "/images/casas/casa_561/foto22.png",
        alt: "Fachada da casa com entrada principal",
      },
    ],
  },
  {
    slug: "unidade-17",
    name: "Unidade 17",
    neighborhood: "Jabaquara · São Paulo",
    distance: "470 m do São Paulo Expo",
    capacity: "Até 10 hóspedes",
    mainImage: "/images/casas/casa_17/foto1.jpg",
    fallbackSrc: "/images/casas/casa_17/foto1.jpg",
    shortDescription:
      "Casa aconchegante, com ambiente acessível e adaptado para pessoas com deficiência, próxima ao São Paulo Expo.",
    tags: [
      "Casa inteira",
      "Acessível",
      "Wi-Fi rápido",
      "Check-in flexível",
      "Ambiente corporativo",
    ],
    accessibilityHighlights: [
      "Entrada com rampa e corredores de fácil circulação",
      "Banheiro adaptado com barras de apoio e área ampla",
      "Acesso térreo sem degraus entre ambientes principais",
    ],
    highlights: [
      "Espaços integrados para reuniões e hospedagem corporativa",
      "Ambiente familiar e silencioso, ideal para descanso",
      "Gestão de enxoval e suporte durante toda a estadia",
    ],
    segments: [
      "Equipes de trabalho e eventos",
      "Famílias e grupos pequenos",
      "Visitantes de feiras e congressos",
    ],
    address:
      "Rua Hilário Ribeiro, 17 - Cidade Vargas, São Paulo - SP, 04319-060",
    gallery: [
      {
        src: "/images/casas/casa_17/foto1.jpg",
        fallbackSrc: "/images/casas/casa_17/foto1.jpg",
        alt: "Sala de estar com sofá e área iluminada",
      },
      {
        src: "/images/casas/casa_17/foto2.jpg",
        fallbackSrc: "/images/casas/casa_17/foto2.jpg",
        alt: "Área comum ampla e bem ventilada",
      },
      {
        src: "/images/casas/casa_17/foto3.jpg",
        fallbackSrc: "/images/casas/casa_17/foto3.jpg",
        alt: "Escada interna com corrimão de apoio",
      },
      {
        src: "/images/casas/casa_17/foto4.jpg",
        fallbackSrc: "/images/casas/casa_17/foto4.jpg",
        alt: "Banheiro acessível com pia e vaso adaptados",
      },
      {
        src: "/images/casas/casa_17/foto5.jpg",
        fallbackSrc: "/images/casas/casa_17/foto5.jpg",
        alt: "Quarto coletivo com camas e ventilação natural",
      },
      {
        src: "/images/casas/casa_17/foto6.jpg",
        fallbackSrc: "/images/casas/casa_17/foto6.jpg",
        alt: "Cozinha equipada com eletrodomésticos e bancada",
      },
      {
        src: "/images/casas/casa_17/foto7.jpg",
        fallbackSrc: "/images/casas/casa_17/foto7.jpg",
        alt: "Cozinha organizada com armários e utensílios básicos",
      },
      {
        src: "/images/casas/casa_17/foto8.jpg",
        fallbackSrc: "/images/casas/casa_17/foto8.jpg",
        alt: "Cozinha integrada à sala de refeições",
      },
      {
        src: "/images/casas/casa_17/foto9.jpg",
        fallbackSrc: "/images/casas/casa_17/foto9.jpg",
        alt: "Banheiro moderno e bem iluminado",
      },
      {
        src: "/images/casas/casa_17/foto10.jpg",
        fallbackSrc: "/images/casas/casa_17/foto10.jpg",
        alt: "Sala de estar aconchegante com sofá e TV",
      },
    ],
  },
  {
    slug: "unidade-680",
    name: "Unidade 680",
    neighborhood: "Jabaquara · São Paulo",
    distance: "490 m do São Paulo Expo",
    capacity: "Até 2 hóspedes",
    mainImage: "/images/casas/casa_680/foto1.png",
    fallbackSrc: "/images/casas/casa_680/foto1.png",
    shortDescription:
      "Casa compacta e exclusiva, perfeita para hospedagens individuais ou em dupla, próxima ao São Paulo Expo.",
    tags: [
      "Casa inteira",
      "Acessível",
      "Wi-Fi rápido",
      "Check-in flexível",
      "Ambiente tranquilo",
    ],
    accessibilityHighlights: [
      "Acesso térreo sem degraus e circulação ampla",
      "Banheiro adaptado e de fácil acesso",
      "Ambiente funcional e seguro para todos os hóspedes",
    ],
    highlights: [
      "Espaço compacto e bem distribuído com design funcional",
      "Ambiente silencioso ideal para profissionais e casais",
      "Atendimento rápido e enxoval completo incluso",
    ],
    segments: [
      "Visitantes individuais de eventos",
      "Profissionais em viagem de trabalho",
      "Casais em hospedagem curta",
    ],
    address:
      "Rua dos Buritis, 680 - Jardim Oriental, São Paulo - SP, 04321-002",
    gallery: [
      {
        src: "/images/casas/casa_680/foto1.png",
        fallbackSrc: "/images/casas/casa_680/foto1.png",
        alt: "Quarto privativo com cama de casal e ventilação natural",
      },
      {
        src: "/images/casas/casa_680/foto2.png",
        fallbackSrc: "/images/casas/casa_680/foto2.png",
        alt: "Quarto iluminado com cama e mesa lateral",
      },
      {
        src: "/images/casas/casa_680/foto3.png",
        fallbackSrc: "/images/casas/casa_680/foto3.png",
        alt: "Ambiente de quarto com janela e boa iluminação",
      },
      {
        src: "/images/casas/casa_680/foto4.png",
        fallbackSrc: "/images/casas/casa_680/foto4.png",
        alt: "Cozinha compacta equipada com pia e armários",
      },
      {
        src: "/images/casas/casa_680/foto5.png",
        fallbackSrc: "/images/casas/casa_680/foto5.png",
        alt: "Quarto aconchegante para uma ou duas pessoas",
      },
      {
        src: "/images/casas/casa_680/foto6.png",
        fallbackSrc: "/images/casas/casa_680/foto6.png",
        alt: "Banheiro com box e chuveiro",
      },
      {
        src: "/images/casas/casa_680/foto7.png",
        fallbackSrc: "/images/casas/casa_680/foto7.png",
        alt: "Banheiro acessível com espaço ampliado",
      },
    ],
  },
];
