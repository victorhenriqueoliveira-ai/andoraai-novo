'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">AndoraAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#recursos" className="text-gray-600 hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="#precos" className="text-gray-600 hover:text-primary transition-colors">
              Preços
            </Link>
            <Link href="#sobre" className="text-gray-600 hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Entrar
              </Button>
            </Link>
            <Link href="/registro">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Experimente Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="#recursos"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link
              href="#precos"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="#sobre"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="flex flex-col space-y-2 pt-4 pb-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full text-primary">
                  Entrar
                </Button>
              </Link>
              <Link href="/registro" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Experimente Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}