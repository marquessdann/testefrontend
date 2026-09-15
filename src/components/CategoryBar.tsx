import { categories } from '@/data/categories';

/**
 * Faixa editorial de categorias — não é uma navegação em botões, é uma
 * linha corrida de texto sobre fundo preto, no espírito de um índice
 * editorial. Em telas estreitas rola horizontalmente.
 */
export default function CategoryBar() {
  return (
    <div className="border-b border-white/10 bg-ink">
      <div className="no-scrollbar mx-auto flex w-full max-w-content items-center gap-8 overflow-x-auto whitespace-nowrap px-6 py-3 md:px-10">
        {categories.map((category) => (
          <a
            key={category.slug}
            href="#categorias"
            className="focus-ring group relative shrink-0 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-200 hover:text-lilac"
          >
            {category.name}
            <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-lilac transition-transform duration-200 group-hover:scale-x-100" />
          </a>
        ))}
      </div>
    </div>
  );
}
