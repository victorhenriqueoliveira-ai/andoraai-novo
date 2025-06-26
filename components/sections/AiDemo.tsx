import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

const aiReports = [
  {
    id: 1,
    title: 'Relatório de Vendas - Outubro',
    status: 'critical',
    preview: 'Você está perdendo R$ 15.000 por mês com leads mal qualificados. Vou te mostrar exatamente onde está o problema.',
    metrics: { conversion: '12%', response: '65%', leads: '247' },
    date: '2024-10-15',
  },
  {
    id: 2,
    title: 'Análise de Performance - WhatsApp',
    status: 'warning',
    preview: 'Seu tempo de resposta aumentou 40% nas últimas 2 semanas. Isso está custando conversões.',
    metrics: { conversion: '18%', response: '45%', leads: '189' },
    date: '2024-10-10',
  },
  {
    id: 3,
    title: 'Oportunidades Desperdiçadas',
    status: 'success',
    preview: 'Identifiquei 23 leads prontos para comprar que você não está priorizando. Veja a lista.',
    metrics: { conversion: '34%', response: '89%', leads: '67' },
    date: '2024-10-08',
  },
];

export function AiDemo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Demonstração da IA</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja como a AndoraAI{' '}
            <span className="gradient-text">analisa seu negócio</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nossa IA não apenas coleta dados - ela interpreta, critica e oferece soluções práticas. 
            Veja alguns exemplos reais de relatórios que você receberia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Reports List */}
          <div className="space-y-6">
            {aiReports.map((report, index) => (
              <Card 
                key={report.id} 
                className={`transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                  index === 0 ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        report.status === 'critical' ? 'bg-red-500' : 
                        report.status === 'warning' ? 'bg-yellow-500' : 
                        'bg-green-500'
                      }`}></div>
                      <span>{report.title}</span>
                    </CardTitle>
                    <span className="text-sm text-gray-500">{report.date}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {report.preview}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{report.metrics.conversion}</div>
                      <div className="text-xs text-gray-500">Conversão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{report.metrics.response}</div>
                      <div className="text-xs text-gray-500">Resposta</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{report.metrics.leads}</div>
                      <div className="text-xs text-gray-500">Leads</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Ver Solução Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Capabilities */}
          <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  IA que Não Tem Medo da Verdade
                </h3>
                <p className="text-gray-600">
                  Enquanto outros CRMs apenas mostram números, nossa IA interpreta e critica seus resultados.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Análise Proativa</p>
                    <p className="text-gray-600 text-sm">Identifica problemas antes mesmo de você perceber</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Insights Diretos</p>
                    <p className="text-gray-600 text-sm">Sem rodeios, diz exatamente o que precisa ser feito</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Soluções Práticas</p>
                    <p className="text-gray-600 text-sm">Cada crítica vem com um plano de ação claro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Acompanha Resultados</p>
                    <p className="text-gray-600 text-sm">Monitora se você implementou as melhorias</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Exemplo Real:</p>
                    <p className="text-gray-700 text-sm italic">
                      "Você respondeu apenas 60% dos leads esta semana. 
                      Isso custou R$ 8.400 em vendas perdidas. Configure autoresposta agora."
                    </p>
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