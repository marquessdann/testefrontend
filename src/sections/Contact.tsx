import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { MailIcon, WhatsappIcon, InstagramIcon, MapPinIcon } from '@/components/icons';
import { contact, address, googleMapsUrl } from '@/data/contact';

const cards = [
  {
    label: 'E-mail',
    value: contact.email,
    href: contact.emailHref,
    Icon: MailIcon,
  },
  {
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: contact.whatsappHref,
    Icon: WhatsappIcon,
  },
  {
    label: 'Instagram',
    value: contact.instagramDisplay,
    href: contact.instagramHref,
    Icon: InstagramIcon,
  },
  {
    label: 'Localização',
    value: `${address.line1}, ${address.line2}`,
    href: googleMapsUrl,
    Icon: MapPinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-ink py-24 text-white">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a Della"
            description="Entre em contato com nossa equipe para tirar dúvidas sobre nossos produtos e canais oficiais de compra."
            tone="dark"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, value, href, Icon }, index) => (
            <RevealOnScroll key={label} delayMs={index * 60}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="focus-ring group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-lilac/50"
              >
                <Icon className="h-6 w-6 text-lilac" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-white/85 group-hover:text-white">
                    {value}
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
