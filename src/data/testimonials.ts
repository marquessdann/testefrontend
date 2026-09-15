export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

/**
 * Depoimentos demonstrativos — substitua pelos depoimentos reais
 * de clientes assim que estiverem disponíveis.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Camila R.',
    role: 'Lash Designer',
    quote:
      'Encontro tudo o que preciso em um só lugar, com qualidade consistente pedido após pedido.',
  },
  {
    name: 'Fernanda S.',
    role: 'Estúdio de Beleza',
    quote:
      'Atendimento próximo e catálogo completo. Facilita muito a rotina do meu estúdio.',
  },
  {
    name: 'Juliana M.',
    role: 'Profissional Autônoma',
    quote:
      'Produtos selecionados com cuidado, dá pra perceber a qualidade na aplicação.',
  },
];
