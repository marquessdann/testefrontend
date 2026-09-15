import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import EditorialRow, { EditorialList } from '@/components/EditorialRow';
import { differentials } from '@/data/differentials';

export default function WhyUs() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <RevealOnScroll>
          <SectionHeading eyebrow="Diferenciais" title="Por que a Della" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <EditorialList>
            {differentials.map((item) => (
              <EditorialRow
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </EditorialList>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
