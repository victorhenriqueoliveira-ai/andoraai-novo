import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Gratuito',
    price: 0,
    period: 'para sempre',
    description: 'Perfeito para testar a plataforma',
    icon: Star,
    features: [
      'Até 50 leads',
      'WhatsApp básico',
      '1 usuário',
      'Relatórios mensais da IA',
      'Suporte por email',
    ],
    limitations: [
      'Sem integrações avançadas',
      'Sem automações premium',
    ],
    cta: 'Começar Grátis',
    ctaVariant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Profissional',
    price: 97,
    period: 'por mês',
    description: 'Para negócios em crescimento',
    icon: Zap,
    features: [
      'Leads ilimitados',
      'WhatsApp completo',
      'Até 3 usuários',
      'Relatórios semanais da IA',
      'Automações avançadas',
      'Integração com Instagram',
      'Suporte prioritário',
      'Dashboard personalizado',
    ],
    cta: 'Teste 7 Dias Grátis',
    ctaVariant: 'default' as const,
    popular: true,
    savings: 'Mais escolhido',
  },
  {
    name: 'Enterprise',
    price: 297,
    period: 'por mês',
    description: 'Para equipes e agências',
    icon: Crown,
    features: [
      'Tudo do Profissional',
      'Usuários ilimitados',
      'Relatórios diários da IA',
      'Integrações personalizadas',
      'API completa',
      'WhiteLabel',
      'Suporte 24/7',
      'Consultor dedicado',
      'Treinamento da equipe',
    ],
    cta: 'Falar com Consultor',
    ctaVariant: 'outline' as const,
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comece grátis,{' '}
            <span className="gradient-text">escale quando precisar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Todos os planos incluem nossa IA sem filtros. A diferença está nos recursos 
            e na quantidade de insights que você recebe.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">30 dias de garantia em todos os planos pagos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-xl scale-105' 
                  : 'hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    {plan.savings}
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-2">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                
                <p className="text-gray-600 mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations?.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-start space-x-3 opacity-60">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-500 text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/registro" className="block">
                  <Button 
                    variant={plan.ctaVariant}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : ''
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Quick */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes sobre Preços
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Posso cancelar a qualquer momento?
                </h4>
                <p className="text-gray-600 text-sm">
                  Sim, sem burocracia. Cancele quando quiser e mantenha acesso até o fim do período pago.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  O plano gratuito expira?
                </h4>
                <p className="text-gray-600 text-sm">
                  Não, você pode usar para sempre com até 50 leads e recursos básicos.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Posso trocar de plano depois?
                </h4>
                <p className="text-gray-600 text-sm">
                  Claro! Faça upgrade ou downgrade a qualquer momento pelo dashboard.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Têm desconto anual?
                </h4>
                <p className="text-gray-600 text-sm">
                  Sim! Pague anualmente e ganhe 2 meses grátis (economia de 16%).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}