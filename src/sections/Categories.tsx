import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import EditorialRow, { EditorialList } from '@/components/EditorialRow';
import { categories } from '@/data/categories';

export default function Categories() {
  return (
    <section id="categorias" className="bg-paper-off py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Categorias"
            title="Explore nossas categorias"
            description="Um portfólio organizado para facilitar a descoberta de produtos profissionais."
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <EditorialList>
            {categories.map((category, index) => (
              <EditorialRow
                key={category.slug}
                number={String(index + 1).padStart(2, '0')}
                title={category.name}
                description={category.description}
                href="#produtos"
              />
            ))}
          </EditorialList>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
