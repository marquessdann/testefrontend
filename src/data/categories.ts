export type Category = {
  slug: string;
  name: string;
  description: string;
  /**
   * Substitua pelo caminho da imagem/ícone real da categoria.
   * Ex.: '/images/categorias/extensao-de-cilios.jpg'
   */
  image?: string;
};

export const categories: Category[] = [
  {
    slug: 'extensao-de-cilios',
    name: 'Extensão de Cílios',
    description: 'Fios, kits e insumos para volume, fio a fio e híbrido.',
  },
  {
    slug: 'adesivos',
    name: 'Adesivos',
    description: 'Adesivos profissionais para diferentes tempos de fixação.',
  },
  {
    slug: 'pincas',
    name: 'Pinças',
    description: 'Pinças de precisão para isolamento e aplicação.',
  },
  {
    slug: 'equipamentos',
    name: 'Equipamentos',
    description: 'Ferramentas e acessórios para o dia a dia do estúdio.',
  },
  {
    slug: 'lifting-e-coloracao',
    name: 'Lifting & Coloração',
    description: 'Kits completos para design e coloração de cílios e sobrancelhas.',
  },
  {
    slug: 'cuidados-e-preparacao',
    name: 'Cuidados & Preparação',
    description: 'Produtos de preparo, limpeza e cuidado pré e pós procedimento.',
  },
  {
    slug: 'home-care',
    name: 'Home Care',
    description: 'Linha de manutenção para o cliente final continuar em casa.',
  },
];
