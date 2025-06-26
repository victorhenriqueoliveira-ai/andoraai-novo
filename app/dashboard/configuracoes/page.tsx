'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  CreditCard,
  Key,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Upload,
  Download,
  AlertTriangle
} from 'lucide-react';

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email_reports: true,
    whatsapp_alerts: true,
    lead_notifications: true,
    appointment_reminders: true,
    weekly_summary: false,
  });

  const [profile, setProfile] = useState({
    name: 'João Silva',
    email: 'joao@empresa.com',
    phone: '+55 11 99999-9999',
    company: 'Minha Empresa Ltda',
    segment: 'Estética',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
  });

  const saveProfile = () => {
    console.log('Salvando perfil:', profile);
    // Aqui seria a lógica para salvar o perfil
  };

  const saveNotifications = () => {
    console.log('Salvando notificações:', notifications);
    // Aqui seria a lógica para salvar as configurações de notificação
  };

  const exportData = () => {
    console.log('Exportando dados...');
    // Aqui seria a lógica para exportar dados
  };

  const deleteAccount = () => {
    console.log('Excluindo conta...');
    // Aqui seria a lógica para excluir a conta
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
            <p className="text-gray-600 mt-1">Gerencie sua conta e preferências</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="h-4 w-4 mr-2 inline" />
              Perfil
            </button>
            <button
              onClick={() => setActiveTab('company')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'company'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Building className="h-4 w-4 mr-2 inline" />
              Empresa
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'notifications'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Bell className="h-4 w-4 mr-2 inline" />
              Notificações
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'security'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Shield className="h-4 w-4 mr-2 inline" />
              Segurança
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'billing'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CreditCard className="h-4 w-4 mr-2 inline" />
              Faturamento
            </button>
          </nav>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <img 
                        src={profile.avatar} 
                        alt="Avatar"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <Button 
                        size="sm" 
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Foto do Perfil</h3>
                      <p className="text-sm text-gray-600">JPG, PNG ou GIF. Máximo 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <Input 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input 
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Segmento
                      </label>
                      <Input 
                        value={profile.segment}
                        onChange={(e) => setProfile({...profile, segment: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button onClick={saveProfile} className="w-full md:w-auto">
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Plano Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <Badge className="bg-primary text-white px-4 py-2">
                      Profissional
                    </Badge>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">R$ 97</div>
                      <div className="text-sm text-gray-600">por mês</div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>✓ Leads ilimitados</div>
                      <div>✓ WhatsApp completo</div>
                      <div>✓ Relatórios semanais da IA</div>
                      <div>✓ Suporte prioritário</div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Gerenciar Plano
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Company Tab */}
        {activeTab === 'company' && (
          <Card>
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa
                  </label>
                  <Input 
                    value={profile.company}
                    onChange={(e) => setProfile({...profile, company: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CNPJ
                  </label>
                  <Input placeholder="00.000.000/0000-00" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço
                  </label>
                  <Input placeholder="Rua, número, bairro" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade
                  </label>
                  <Input placeholder="São Paulo" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <Input placeholder="SP" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CEP
                  </label>
                  <Input placeholder="00000-000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Negócio
                </label>
                <Textarea 
                  placeholder="Descreva seu negócio, serviços oferecidos, público-alvo..."
                  rows={4}
                />
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Salvar Informações
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Relatórios por Email</h4>
                    <p className="text-sm text-gray-600">Receba relatórios mensais da IA por email</p>
                  </div>
                  <Switch 
                    checked={notifications.email_reports}
                    onCheckedChange={(checked) => setNotifications({...notifications, email_reports: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Alertas WhatsApp</h4>
                    <p className="text-sm text-gray-600">Notificações sobre problemas no WhatsApp</p>
                  </div>
                  <Switch 
                    checked={notifications.whatsapp_alerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, whatsapp_alerts: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Novos Leads</h4>
                    <p className="text-sm text-gray-600">Seja notificado quando receber novos leads</p>
                  </div>
                  <Switch 
                    checked={notifications.lead_notifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, lead_notifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Lembretes de Agendamento</h4>
                    <p className="text-sm text-gray-600">Receba lembretes sobre próximos agendamentos</p>
                  </div>
                  <Switch 
                    checked={notifications.appointment_reminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, appointment_reminders: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Resumo Semanal</h4>
                    <p className="text-sm text-gray-600">Resumo das atividades da semana</p>
                  </div>
                  <Switch 
                    checked={notifications.weekly_summary}
                    onCheckedChange={(checked) => setNotifications({...notifications, weekly_summary: checked})}
                  />
                </div>
              </div>

              <Button onClick={saveNotifications}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha Atual
                  </label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Digite sua senha atual"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nova Senha
                  </label>
                  <Input 
                    type="password"
                    placeholder="Digite sua nova senha"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar Nova Senha
                  </label>
                  <Input 
                    type="password"
                    placeholder="Confirme sua nova senha"
                  />
                </div>

                <Button>
                  <Key className="h-4 w-4 mr-2" />
                  Alterar Senha
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exportar Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Baixe uma cópia de todos os seus dados da plataforma.
                </p>
                <Button variant="outline" onClick={exportData}>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Dados
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Zona de Perigo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Excluir sua conta removerá permanentemente todos os seus dados. 
                  Esta ação não pode ser desfeita.
                </p>
                <Button variant="destructive" onClick={deleteAccount}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Excluir Conta
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Plano Profissional</h3>
                    <p className="text-gray-600">R$ 97,00 por mês</p>
                    <p className="text-sm text-gray-500">Próxima cobrança: 25 de novembro de 2024</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">Ativo</Badge>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Alterar Plano</Button>
                      <Button variant="outline" size="sm">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Método de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600">Expira em 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Alterar</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Faturas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: '25/10/2024', amount: 'R$ 97,00', status: 'Pago' },
                    { date: '25/09/2024', amount: 'R$ 97,00', status: 'Pago' },
                    { date: '25/08/2024', amount: 'R$ 97,00', status: 'Pago' },
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{invoice.amount}</p>
                        <p className="text-sm text-gray-600">{invoice.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-800">{invoice.status}</Badge>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}