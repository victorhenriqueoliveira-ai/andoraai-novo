import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Termos de Uso | AndoraAI',
  description: 'Conheça os termos e condições de uso da plataforma AndoraAI.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Condições claras e justas para uso da plataforma AndoraAI.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Última atualização: Outubro 2024
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Resumo Amigável</h3>
                  <p className="text-green-800">
                    Use a AndoraAI de forma ética e legal. Respeitamos seus dados, 
                    você respeita nossa plataforma. Cancelamento sem burocracia, 
                    suporte sempre disponível.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">1. Aceitação dos Termos</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Ao criar uma conta na AndoraAI, você concorda com estes termos de uso. 
                Se não concordar com algum ponto, não utilize nossos serviços.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Importante:</strong> Estes termos se aplicam a todos os usuários, 
                  incluindo planos gratuitos e pagos.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Descrição do Serviço</h2>
              
              <p className="text-gray-700 mb-4">
                A AndoraAI é uma plataforma de CRM com inteligência artificial que oferece:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Recursos Principais</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Gestão de leads e pipeline de vendas</li>
                    <li>• Integração com WhatsApp Business</li>
                    <li>• Relatórios inteligentes com IA</li>
                    <li>• Automação de tarefas</li>
                    <li>• Dashboard de métricas</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Integrações</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• WhatsApp Business API</li>
                    <li>• Instagram Business</li>
                    <li>• Google Calendar</li>
                    <li>• Stripe (pagamentos)</li>
                    <li>• APIs personalizadas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Planos e Pagamentos</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Plano Gratuito</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Uso ilimitado no tempo</li>
                    <li>• Até 50 leads</li>
                    <li>• Recursos básicos inclusos</li>
                    <li>• Sem compromisso ou cartão de crédito</li>
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Planos Pagos</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cobrança mensal ou anual</li>
                    <li>• Cancelamento a qualquer momento</li>
                    <li>• Reembolso em até 30 dias</li>
                    <li>• Upgrade/downgrade imediato</li>
                    <li>• Suporte prioritário</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Uso Aceitável</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">✅ Permitido</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Usar para fins comerciais legítimos</li>
                    <li>• Integrar com suas ferramentas</li>
                    <li>• Exportar seus próprios dados</li>
                    <li>• Compartilhar com sua equipe</li>
                    <li>• Personalizar conforme necessário</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-3">❌ Proibido</h3>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Spam ou comunicações não solicitadas</li>
                    <li>• Atividades ilegais ou fraudulentas</li>
                    <li>• Revenda ou redistribuição da plataforma</li>
                    <li>• Tentativas de hack ou invasão</li>
                    <li>• Uso que viole direitos de terceiros</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Propriedade Intelectual</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Seus Dados</h3>
                  <p className="text-gray-700 text-sm">
                    Você mantém total propriedade sobre todos os dados inseridos na plataforma. 
                    Leads, conversas, relatórios - tudo é seu e pode ser exportado a qualquer momento.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Nossa Plataforma</h3>
                  <p className="text-gray-700 text-sm">
                    O código, design, IA e funcionalidades da AndoraAI são de nossa propriedade. 
                    Você tem licença de uso, mas não pode copiar, modificar ou redistribuir.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Disponibilidade e Suporte</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Disponibilidade</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>• Meta de 99.9% de uptime</li>
                      <li>• Manutenções programadas notificadas</li>
                      <li>• Monitoramento 24/7</li>
                      <li>• Backups automáticos diários</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Suporte</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>• Email: suporte@andoraai.com</li>
                      <li>• Chat na plataforma</li>
                      <li>• Base de conhecimento</li>
                      <li>• Vídeos tutoriais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cancelamento e Reembolso</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Política de Cancelamento</h3>
                  <p className="text-green-800 text-sm">
                    Cancele a qualquer momento sem burocracia. Acesso mantido até o fim do período pago. 
                    Dados preservados por 30 dias após cancelamento.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Garantia de 30 Dias</h3>
                  <p className="text-blue-800 text-sm">
                    Não ficou satisfeito? Reembolso integral em até 30 dias da primeira cobrança, 
                    sem perguntas ou complicações.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitação de Responsabilidade</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-800 text-sm">
                      A AndoraAI é fornecida "como está". Não nos responsabilizamos por perdas 
                      indiretas, lucros cessantes ou danos consequenciais. Nossa responsabilidade 
                      máxima é limitada ao valor pago pelo serviço nos últimos 12 meses.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Alterações nos Termos</h2>
              
              <p className="text-gray-700 mb-4">
                Podemos atualizar estes termos ocasionalmente. Mudanças significativas serão 
                notificadas por email com 30 dias de antecedência.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Continuidade:</strong> O uso continuado após as alterações constitui 
                  aceitação dos novos termos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contato e Jurisdição</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Contato</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p><strong>Email:</strong> legal@andoraai.com</p>
                      <p><strong>Telefone:</strong> (11) 99999-9999</p>
                      <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Jurisdição</h3>
                    <p className="text-gray-700 text-sm">
                      Estes termos são regidos pelas leis brasileiras. 
                      Foro da comarca de São Paulo/SP para resolução de conflitos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}