import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Click Hostel | Hospedagem inteligente em São Paulo",
  description:
    "Encontre hospedagens completas em São Paulo com conforto, praticidade e estrutura versátil — perfeitas para eventos, negócios, turismo e grupos. Quartos individuais, opções compartilhadas e casas inteiras perto do Expo Imigrantes e do Comitê Paralímpico.",
  keywords: [
    "Click Hostel",
    "hospedagem São Paulo",
    "aluguel por temporada",
    "próximo ao Expo Imigrantes",
    "acomodação para eventos",
    "grupos e famílias",
    "hospedagem acessível",
    "paraolímpicos",
  ],
  openGraph: {
    title: "Click Hostel | Sua estadia sob medida em São Paulo",
    description:
      "Hospedagens versáteis e confortáveis em São Paulo — escolha entre quartos individuais, compartilhados ou casas completas. Ideal para expositores, turistas, atletas e grupos, com localização estratégica perto do Expo Imigrantes.",
    url: "https://www.clickhostel.com.br",
    siteName: "Click Hostel",
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://www.clickhostel.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ Google Tag Manager - carrega apenas UMA vez */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKBRH9XFJ6"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // ✅ Inicializa Google Analytics
            gtag('config', 'G-ZKBRH9XFJ6');

            // ✅ Inicializa Google Ads
            gtag('config', 'AW-11500796462');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
