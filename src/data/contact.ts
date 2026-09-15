export const address = {
  line1: 'Rua Assis Figueiredo, 59 - Parolin',
  line2: 'Curitiba - PR',
  cep: 'CEP 80.630-280',
};

export const fullAddress = `${address.line1}, ${address.line2}, ${address.cep}`;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress
)}`;

export const contact = {
  email: 'contato@dellastore.com.br',
  emailHref: 'mailto:contato@dellastore.com.br',
  whatsappDisplay: '41 99679-0904',
  whatsappHref: 'https://wa.me/5541996790904',
  instagramDisplay: '@marquessdann',
  instagramHref: 'https://instagram.com/marquessdann',
};
