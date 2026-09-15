import Header from '@/components/Header';
import CategoryBar from '@/components/CategoryBar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Categories from '@/sections/Categories';
import FeaturedProducts from '@/sections/FeaturedProducts';
import ImpactBanner from '@/sections/ImpactBanner';
import NewsCategories from '@/sections/NewsCategories';
import About from '@/sections/About';
import WhyUs from '@/sections/WhyUs';
import Location from '@/sections/Location';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import WhereToBuy from '@/sections/WhereToBuy';

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryBar />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ImpactBanner />
        <NewsCategories />
        <About />
        <WhyUs />
        <Location />
        <Testimonials />
        <Contact />
        <WhereToBuy />
      </main>
      <Footer />
    </>
  );
}
