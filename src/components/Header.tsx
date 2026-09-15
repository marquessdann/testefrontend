'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data/nav';
import Logo from './Logo';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[76px] w-full max-w-content items-center justify-between px-6 md:px-10"
      >
        <a href="#inicio" className="focus-ring rounded-sm" aria-label="Della — início">
          <Logo tone="dark" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring rounded-sm text-sm font-medium text-ink/65 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="focus-ring hidden rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85 lg:inline-flex"
        >
          Fale com a Della
        </a>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-ink lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-paper transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          menuOpen ? 'border-t border-line' : 'border-t-0'
        }`}
        style={{ gridTemplateRows: menuOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="focus-ring block rounded-lg px-2 py-3 text-lg font-medium text-ink transition-colors hover:text-lilac-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contato"
                onClick={handleNavClick}
                className="focus-ring block rounded-lg bg-ink px-5 py-3 text-center text-sm font-medium text-paper"
              >
                Fale com a Della
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
