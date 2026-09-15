export type MarketplaceLink = {
  name: string;
  /**
   * PLACEHOLDER — insira aqui o link oficial da loja assim que
   * estiver disponível. Enquanto não houver link, o botão fica
   * visível porém apontando para "#" (âncora neutra).
   */
  href: string;
  available: boolean;
};

export const marketplaces: MarketplaceLink[] = [
  { name: 'Mercado Livre', href: '#', available: false },
  { name: 'Shopee', href: '#', available: false },
  { name: 'TikTok Shop', href: '#', available: false },
];
