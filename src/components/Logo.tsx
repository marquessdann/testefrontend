/**
 * Wordmark provisório da Della. Substitua por <Image src="/images/logo-della.svg" ... />
 * assim que o arquivo de logo oficial estiver disponível em /public/images/.
 */
export default function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const isLight = tone === 'light';

  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-2xl font-bold tracking-tight ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        Della
      </span>
      <span
        className={`text-[10px] font-medium uppercase tracking-[0.28em] ${
          isLight ? 'text-white/60' : 'text-ink/50'
        }`}
      >
        Distribuidora de Produtos
      </span>
    </span>
  );
}
