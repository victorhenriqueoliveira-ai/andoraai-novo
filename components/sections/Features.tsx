import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Brain, 
  Zap, 
  Shield,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Inteligente',
    description: 'Automatize respostas, organize conversas e nunca perca um lead importante.',
    benefits: ['Autoresposta inteligente', 'Organização por etapas', 'Histórico completo'],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'CRM Visual',
    description: 'Gerencie leads em um board intuitivo, do primeiro contato até o fechamento.',
    benefits: ['Board kanban', 'Filtros avançados', 'Tags personalizadas'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Calendar,
    title: 'Agendamento Automático',
    description: 'Sincronize calendários e envie confirmações automáticas via WhatsApp.',
    benefits: ['Sincronização completa', 'Lembretes automáticos', 'Reagendamento fácil'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Brain,
    title: 'IA Proativa',
    description: 'Receba relatórios mensais com críticas construtivas e insights diretos.',
    benefits: ['Análise de performance', 'Identificação de problemas', 'Soluções práticas'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Inteligentes',
    description: 'Dashboards em tempo real com métricas que realmente importam.',
    benefits: ['Métricas essenciais', 'Gráficos intuitivos', 'Exportação fácil'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Zap,
    title: 'Integrações Poderosas',
    description: 'Conecte com WhatsApp Business, Instagram, Google Calendar e Stripe.',
    benefits: ['APIs completas', 'Sincronização em tempo real', 'Setup simplificado'],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em{' '}
            <span className="gradient-text">uma plataforma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não é apenas um CRM. É um sistema completo de automação e inteligência 
            para escalar seu negócio sem perder o controle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">+250%</div>
              <div className="text-gray-600">Aumento em Conversões</div>
            </div>
            <div>
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">90%</div>
              <div className="text-gray-600">Redução em Tarefas Manuais</div>
            </div>
            <div>
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">24h</div>
              <div className="text-gray-600">Setup Completo</div>
            </div>
            <div>
              <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600">Precisão dos Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}