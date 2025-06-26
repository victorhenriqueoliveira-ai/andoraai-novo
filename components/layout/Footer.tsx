import Link from 'next/link';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">AndoraAI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              O CRM com IA que te diz a verdade sobre sua empresa. Automatize vendas, 
              organize leads e receba insights diretos para crescer seu negócio.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contato@andoraai.com</span>
              </div>
            </div>
          </div>

          {/* Links Produto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#recursos" className="text-gray-300 hover:text-secondary transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#precos" className="text-gray-300 hover:text-secondary transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-secondary transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-secondary transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-300 hover:text-secondary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 AndoraAI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}