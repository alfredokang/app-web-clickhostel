import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Click Hostel | Sua estadia inteligente em Florianópolis",
  description:
    "Conecte-se com o Click Hostel e descubra hospedagem confortável no coração da Lagoa da Conceição com quartos privados e compartilhados, estrutura completa e atendimento acolhedor.",
  keywords: [
    "Click Hostel",
    "Hostel Florianópolis",
    "Lagoa da Conceição",
    "hospedagem",
    "acomodação",
    "coworking",
  ],
  openGraph: {
    title: "Click Hostel | Viva Florianópolis como um local",
    description:
      "Acomodações versáteis, experiências autênticas e atendimento próximo para quem busca flexibilidade na Lagoa da Conceição.",
    url: "https://clickhostel.com.br",
    siteName: "Click Hostel",
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://clickhostel.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
