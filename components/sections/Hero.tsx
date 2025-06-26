'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span className="text-sm">IA que não tem medo da verdade</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              O CRM com IA que{' '}
              <span className="text-secondary">te diz a verdade</span>{' '}
              sobre sua empresa
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl">
              Pare de adivinhar. Nossa IA analisa seus dados, automatiza vendas via WhatsApp 
              e entrega relatórios diretos sobre o que está funcionando (e o que não está).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/registro">
                <Button 
                  size="lg" 
                  className="bg-secondary text-primary hover:bg-secondary/90 font-semibold group w-full sm:w-auto"
                >
                  Experimente Grátis por 7 Dias
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">+200%</div>
                <div className="text-sm text-gray-300">Aumento em Vendas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">95%</div>
                <div className="text-sm text-gray-300">Precisão da IA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">24h</div>
                <div className="text-sm text-gray-300">Setup Completo</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Dashboard AndoraAI</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="text-white text-sm">Leads Ativos</span>
                    </div>
                    <div className="text-2xl font-bold text-white">247</div>
                    <div className="text-green-400 text-xs">+23% este mês</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-secondary" />
                      <span className="text-white text-sm">WhatsApp</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1.2k</div>
                    <div className="text-green-400 text-xs">+45% este mês</div>
                  </div>
                </div>

                {/* AI Alert */}
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <div className="text-secondary font-semibold text-sm mb-1">
                        Alerta da IA
                      </div>
                      <div className="text-white text-sm">
                        Você está perdendo 30% dos leads por demora na resposta. 
                        Veja a solução →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}