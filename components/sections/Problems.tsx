import { AlertTriangle, Clock, TrendingDown, MessageCircle, BarChart3, Target } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Falta de Tempo',
    description: 'Você passa mais tempo organizando leads do que vendendo de verdade.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: TrendingDown,
    title: 'Vendas Estagnadas',
    description: 'Seus números não crescem e você não sabe identificar o que está travando.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Desorganizado',
    description: 'Mensagens perdidas, clientes sem resposta e oportunidades desperdiçadas.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: BarChart3,
    title: 'Sem Relatórios Claros',
    description: 'Você não tem dados confiáveis para tomar decisões estratégicas.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Target,
    title: 'Foco Disperso',
    description: 'Você trabalha muito mas não consegue priorizar o que realmente importa.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: AlertTriangle,
    title: 'Decisões no Escuro',
    description: 'Falta clareza sobre o que funciona e o que precisa ser mudado no seu negócio.',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
  },
];

export function Problems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reconhece esses problemas no seu negócio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A maioria dos empreendedores enfrenta os mesmos desafios. 
            O problema não é você, é a falta de ferramentas que falem a verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`${problem.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className={`h-6 w-6 ${problem.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">
              E se existisse uma solução que resolvesse todos esses problemas de uma vez?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}