import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

const siteUrl = 'https://della-distribuidora.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Della Distribuidora | Produtos de Beleza e Estética',
  description:
    'A Della é uma distribuidora e vitrine de produtos profissionais para beleza e estética: extensão de cílios, adesivos, pinças, equipamentos, lifting, coloração e home care em um só catálogo.',
  keywords: [
    'Della Distribuidora',
    'produtos de beleza',
    'extensão de cílios',
    'distribuidora de estética',
    'Curitiba',
  ],
  openGraph: {
    title: 'Della Distribuidora | Produtos de Beleza e Estética',
    description:
      'Catálogo completo de produtos profissionais para beleza e estética, com curadoria e qualidade em um só lugar.',
    url: siteUrl,
    siteName: 'Della Distribuidora',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Della Distribuidora | Produtos de Beleza e Estética',
    description:
      'Catálogo completo de produtos profissionais para beleza e estética, com curadoria e qualidade em um só lugar.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
