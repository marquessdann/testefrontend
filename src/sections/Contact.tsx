import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { contact, address, googleMapsUrl } from '@/data/contact';

const items = [
  {
    label: 'E-mail',
    value: contact.email,
    href: contact.emailHref,
  },
  {
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: contact.whatsappHref,
  },
  {
    label: 'Instagram',
    value: contact.instagramDisplay,
    href: contact.instagramHref,
  },
  {
    label: 'Localização',
    value: (
      <>
        {address.line1}
        <br />
        {address.line2}
        <br />
        {address.cep}
      </>
    ),
    href: googleMapsUrl,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-paper-off py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a Della"
            description="Entre em contato com nossa equipe para tirar dúvidas sobre nossos produtos e canais oficiais de compra."
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            {items.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="focus-ring group flex flex-col gap-1.5"
              >
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/40">
                  {label}
                </span>
                <span className="text-base font-medium leading-relaxed text-ink transition-colors group-hover:text-lilac-deep">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
