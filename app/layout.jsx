import { Crimson_Pro, Public_Sans } from "next/font/google";
import { azeretMono, inter, cardo } from "./styles/font";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const publicsans = Public_Sans({
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://doctormercadal.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dr. Enrique Mercadal Calaf | Cardiólogo — Talca, Chile',
    template: '%s | Dr. Enrique Mercadal Calaf',
  },
  description:
    'Cardiólogo clínico en Talca. Especialista en ecocardiografía, insuficiencia cardíaca y fibrilación auricular. Director Médico del Instituto de Cardiología de Talca. Reserve su hora en línea.',
  keywords: [
    'cardiólogo Talca',
    'cardiología Talca',
    'cardiólogo clínico',
    'ecocardiografía Talca',
    'insuficiencia cardíaca',
    'fibrilación auricular',
    'Instituto de Cardiología de Talca',
    'reservar hora cardiólogo',
    'Dr. Enrique Mercadal',
  ],
  authors: [{ name: 'Dr. Enrique Mercadal Calaf' }],
  creator: 'Dr. Enrique Mercadal Calaf',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'Dr. Enrique Mercadal Calaf — Cardiólogo',
    title: 'Dr. Enrique Mercadal Calaf | Cardiólogo — Talca, Chile',
    description:
      'Cardiólogo clínico en Talca. Especialista en ecocardiografía, insuficiencia cardíaca y fibrilación auricular. Reserve su hora en línea.',
    images: [
      {
        url: '/ejmercadal-azul.png',
        width: 300,
        height: 300,
        alt: 'Dr. Enrique Mercadal Calaf, Cardiólogo en Talca',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dr. Enrique Mercadal Calaf | Cardiólogo — Talca',
    description:
      'Cardiólogo clínico en Talca. Ecocardiografía, insuficiencia cardíaca, fibrilación auricular.',
    images: ['/ejmercadal-azul.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body
        className={`${crimsonPro.variable} ${publicsans.variable} ${azeretMono.variable} ${inter.variable} ${cardo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


