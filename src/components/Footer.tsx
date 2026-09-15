import Container from './Container';
import Logo from './Logo';
import { navItems } from '@/data/nav';
import { categories } from '@/data/categories';
import { marketplaces } from '@/data/whereToBuy';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white/70">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Distribuidora e vitrine de produtos profissionais para beleza e
              estética, reunidos com curadoria em um só catálogo.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {navItems
                .filter((item) => item.href !== '#localizacao')
                .map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="focus-ring rounded-sm text-sm text-white/65 transition-colors hover:text-lilac"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Categorias
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <a
                    href="#categorias"
                    className="focus-ring rounded-sm text-sm text-white/65 transition-colors hover:text-lilac"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Compre também em
            </h3>
            <ul className="flex flex-col gap-3">
              {marketplaces.map((store) => (
                <li key={store.name}>
                  <a
                    href={store.href}
                    className="focus-ring rounded-sm text-sm text-white/65 transition-colors hover:text-lilac"
                  >
                    {store.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs text-white/40">
          © 2026 Della Distribuidora de Produtos. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
