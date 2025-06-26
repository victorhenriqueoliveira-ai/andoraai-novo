import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade | AndoraAI',
  description: 'Conheça como protegemos seus dados e respeitamos sua privacidade na AndoraAI.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Última atualização: Outubro 2024
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Resumo Executivo</h3>
                  <p className="text-blue-800">
                    A AndoraAI coleta apenas os dados essenciais para funcionamento da plataforma. 
                    Seus dados são criptografados, nunca compartilhados com terceiros e você 
                    tem controle total sobre eles.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">1. Dados que Coletamos</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Dados Pessoais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nome completo e email (fornecidos no cadastro)</li>
                  <li>• Número de telefone (para WhatsApp Business)</li>
                  <li>• Informações da empresa (nome, segmento, tamanho)</li>
                  <li>• Dados de faturamento (apenas para planos pagos)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Dados de Uso</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Leads e contatos inseridos na plataforma</li>
                  <li>• Conversas do WhatsApp Business integrado</li>
                  <li>• Métricas de vendas e performance</li>
                  <li>• Logs de acesso e uso da plataforma</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">2. Como Usamos seus Dados</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">✅ Usos Permitidos</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Fornecer os serviços da plataforma</li>
                    <li>• Gerar relatórios personalizados da IA</li>
                    <li>• Melhorar a experiência do usuário</li>
                    <li>• Suporte técnico e atendimento</li>
                    <li>• Comunicações sobre o serviço</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-3">❌ Nunca Fazemos</h3>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Vender seus dados para terceiros</li>
                    <li>• Usar dados para publicidade externa</li>
                    <li>• Compartilhar com concorrentes</li>
                    <li>• Acessar sem autorização</li>
                    <li>• Spam ou comunicações não solicitadas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">3. Segurança e Proteção</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Criptografia de Ponta</h3>
                  <p className="text-gray-700">
                    Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256). 
                    Senhas são protegidas com hash bcrypt e nunca armazenadas em texto plano.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Infraestrutura Segura</h3>
                  <p className="text-gray-700">
                    Hospedagem em servidores certificados ISO 27001, com backups automáticos, 
                    monitoramento 24/7 e proteção contra ataques DDoS.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Acesso Controlado</h3>
                  <p className="text-gray-700">
                    Apenas funcionários autorizados têm acesso aos dados, com logs de auditoria 
                    completos e autenticação de dois fatores obrigatória.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">4. Seus Direitos (LGPD)</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Acesso:</strong> Saber quais dados temos sobre você
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Correção:</strong> Corrigir dados incorretos ou desatualizados
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Exclusão:</strong> Solicitar remoção dos seus dados
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Portabilidade:</strong> Exportar seus dados
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Oposição:</strong> Contestar o uso dos seus dados
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Informação:</strong> Saber como processamos seus dados
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cookies e Tecnologias</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Utilizamos cookies essenciais para o funcionamento da plataforma e cookies 
                  analíticos para melhorar a experiência do usuário.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Importante:</strong> Você pode gerenciar suas preferências de cookies 
                    nas configurações do seu navegador a qualquer momento.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Retenção de Dados</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Dados da conta:</strong> Mantidos enquanto a conta estiver ativa</li>
                  <li>• <strong>Dados de leads:</strong> Mantidos conforme sua necessidade de negócio</li>
                  <li>• <strong>Logs de sistema:</strong> 12 meses para segurança e auditoria</li>
                  <li>• <strong>Dados financeiros:</strong> 5 anos conforme legislação fiscal</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Contato e DPO</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, 
                  entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                </p>
                
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacidade@andoraai.com</p>
                  <p><strong>Telefone:</strong> (11) 99999-9999</p>
                  <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Alterações nesta Política</h2>
              
              <p className="text-gray-700 mb-4">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre 
                mudanças significativas por email e na plataforma.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Dica:</strong> Recomendamos revisar esta política regularmente 
                  para se manter informado sobre como protegemos seus dados.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}