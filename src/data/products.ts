export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /**
   * Substitua pelo caminho da imagem real do produto.
   * Ex.: '/images/produtos/cilios-volume-russo.jpg'
   */
  image?: string;
  /**
   * PLACEHOLDER — troque pelo link definitivo do produto
   * (página de detalhes ou marketplace) quando estiver disponível.
   */
  href: string;
  isNew?: boolean;
};

export const featuredProducts: Product[] = [
  {
    slug: 'cilios-volume-russo',
    name: 'Cílios Volume Russo',
    category: 'Extensão de Cílios',
    description: 'Fios leves e uniformes para volumes densos e naturais.',
    href: '#',
  },
  {
    slug: 'adesivo-secagem-rapida',
    name: 'Adesivo Secagem Rápida',
    category: 'Adesivos',
    description: 'Fixação segura com tempo de secagem otimizado.',
    href: '#',
  },
  {
    slug: 'pinca-isolamento-curva-l',
    name: 'Pinça Isolamento Curva L',
    category: 'Pinças',
    description: 'Precisão e conforto para longas jornadas de aplicação.',
    href: '#',
  },
  {
    slug: 'kit-lifting-completo',
    name: 'Kit Lifting Completo',
    category: 'Lifting & Coloração',
    description: 'Tudo o que você precisa para um design impedável.',
    href: '#',
  },
  {
    slug: 'removedor-gel-profissional',
    name: 'Removedor em Gel Profissional',
    category: 'Cuidados & Preparação',
    description: 'Remoção segura, sem irritar a área dos olhos.',
    href: '#',
  },
  {
    slug: 'shampoo-home-care',
    name: 'Shampoo de Manutenção Home Care',
    category: 'Home Care',
    description: 'Prolonga o resultado do procedimento entre as sessões.',
    href: '#',
  },
];

export const newArrivals: Product[] = [
  {
    slug: 'kit-sobrancelha-design',
    name: 'Kit Design de Sobrancelha',
    category: 'Lifting & Coloração',
    description: 'Composição pensada para design e alinhamento precisos.',
    href: '#',
    isNew: true,
  },
  {
    slug: 'organizador-de-insumos',
    name: 'Organizador de Insumos',
    category: 'Equipamentos',
    description: 'Praticidade e organização para o estúdio profissional.',
    href: '#',
    isNew: true,
  },
  {
    slug: 'primer-preparador',
    name: 'Primer Preparador de Cílios',
    category: 'Cuidados & Preparação',
    description: 'Prepara a superfície para melhor aderência dos fios.',
    href: '#',
    isNew: true,
  },
  {
    slug: 'oleo-de-manutencao',
    name: 'Óleo de Manutenção',
    category: 'Home Care',
    description: 'Cuidado diário para prolongar a durabilidade do procedimento.',
    href: '#',
    isNew: true,
  },
];
