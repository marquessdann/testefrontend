import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';

export default function FeaturedProducts() {
  return (
    <section id="produtos" className="bg-paper-off py-24">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Catálogo"
            title="Produtos em destaque"
            description="Uma seleção dos itens mais procurados pelas profissionais da beleza."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <RevealOnScroll key={product.slug} delayMs={index * 60}>
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
