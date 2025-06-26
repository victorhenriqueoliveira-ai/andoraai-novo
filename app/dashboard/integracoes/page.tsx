'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Zap, 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  Instagram,
  Settings,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Key,
  Webhook,
  Database,
  Mail,
  Phone
} from 'lucide-react';

const integrations = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'Conecte sua conta do WhatsApp Business para automação completa',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    status: 'connected',
    lastSync: '2024-10-25 14:30',
    features: ['Mensagens automáticas', 'Histórico completo', 'Múltiplos atendentes'],
    config: {
      phone: '+55 11 99999-9999',
      webhook_url: 'https://api.andoraai.com/webhook/whatsapp',
      auto_response: true,
    }
  },
  {
    id: 'instagram',
    name: 'Instagram Business',
    description: 'Gerencie DMs do Instagram direto na plataforma',
    icon: Instagram,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    status: 'connected',
    lastSync: '2024-10-25 13:45',
    features: ['DMs automáticos', 'Stories com CTA', 'Métricas de engajamento'],
    config: {
      account: '@meunegocios',
      auto_dm: true,
      story_cta: true,
    }
  },
  {
    id: 'calendar',
    name: 'Google Calendar',
    description: 'Sincronize agendamentos com seu calendário',
    icon: Calendar,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    status: 'connected',
    lastSync: '2024-10-25 14:00',
    features: ['Sincronização bidirecional', 'Lembretes automáticos', 'Múltiplos calendários'],
    config: {
      calendar_id: 'primary',
      auto_sync: true,
      reminder_time: 24,
    }
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Processe pagamentos e gerencie assinaturas',
    icon: CreditCard,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    status: 'disconnected',
    lastSync: null,
    features: ['Pagamentos online', 'Assinaturas recorrentes', 'Relatórios financeiros'],
    config: null
  },
  {
    id: 'email',
    name: 'Email Marketing',
    description: 'Integre com ferramentas de email marketing',
    icon: Mail,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    status: 'available',
    lastSync: null,
    features: ['Listas automáticas', 'Campanhas segmentadas', 'Analytics avançado'],
    config: null
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Conecte com mais de 5.000 aplicativos',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    status: 'available',
    lastSync: null,
    features: ['Automações personalizadas', 'Triggers avançados', 'Workflows complexos'],
    config: null
  },
];

const webhooks = [
  {
    id: 1,
    name: 'Novo Lead',
    url: 'https://meusite.com/webhook/lead',
    events: ['lead.created', 'lead.updated'],
    status: 'active',
    last_triggered: '2024-10-25 14:25'
  },
  {
    id: 2,
    name: 'Agendamento Confirmado',
    url: 'https://meusite.com/webhook/appointment',
    events: ['appointment.confirmed', 'appointment.cancelled'],
    status: 'active',
    last_triggered: '2024-10-25 13:30'
  },
];

export default function IntegracoesPage() {
  const [selectedIntegration, setSelectedIntegration] = useState(integrations[0]);
  const [activeTab, setActiveTab] = useState('integrations');

  const connectIntegration = (integrationId: string) => {
    console.log('Conectando integração:', integrationId);
    // Aqui seria a lógica para conectar a integração
  };

  const disconnectIntegration = (integrationId: string) => {
    console.log('Desconectando integração:', integrationId);
    // Aqui seria a lógica para desconectar a integração
  };

  const testIntegration = (integrationId: string) => {
    console.log('Testando integração:', integrationId);
    // Aqui seria a lógica para testar a integração
  };

  const saveConfig = (integrationId: string, config: any) => {
    console.log('Salvando configuração:', integrationId, config);
    // Aqui seria a lógica para salvar configurações
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'disconnected': return 'bg-red-100 text-red-800';
      case 'available': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4" />;
      case 'disconnected': return <AlertCircle className="h-4 w-4" />;
      default: return <Settings className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Integrações</h1>
            <p className="text-gray-600 mt-1">Conecte suas ferramentas favoritas com a AndoraAI</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="h-4 w-4 mr-2" />
              Documentação
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Conectadas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">1.2k</div>
              <div className="text-sm text-gray-600">Sincronizações Hoje</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Webhook className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
              <div className="text-sm text-gray-600">Webhooks Ativos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Database className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('integrations')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'integrations'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Integrações
            </button>
            <button
              onClick={() => setActiveTab('webhooks')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'webhooks'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Webhooks
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'api'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              API
            </button>
          </nav>
        </div>

        {activeTab === 'integrations' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Integrations List */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrations.map((integration) => (
                  <Card 
                    key={integration.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedIntegration.id === integration.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedIntegration(integration)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`${integration.bgColor} p-3 rounded-lg`}>
                            <integration.icon className={`h-6 w-6 ${integration.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{integration.name}</CardTitle>
                            <Badge className={getStatusColor(integration.status)}>
                              <div className="flex items-center space-x-1">
                                {getStatusIcon(integration.status)}
                                <span className="capitalize">{integration.status}</span>
                              </div>
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {integration.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {integration.status === 'connected' ? (
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500">
                            Última sincronização: {integration.lastSync}
                          </p>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => testIntegration(integration.id)}
                            >
                              Testar
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => disconnectIntegration(integration.id)}
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              Desconectar
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          size="sm" 
                          className="w-full"
                          onClick={() => connectIntegration(integration.id)}
                        >
                          {integration.status === 'available' ? 'Conectar' : 'Reconectar'}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Configuration Panel */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <selectedIntegration.icon className={`h-5 w-5 ${selectedIntegration.color}`} />
                    <span>{selectedIntegration.name}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {selectedIntegration.config ? (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Configurações</h4>
                      
                      {selectedIntegration.id === 'whatsapp' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Número do WhatsApp
                            </label>
                            <Input 
                              value={selectedIntegration.config.phone} 
                              readOnly 
                              className="bg-gray-50"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Webhook URL
                            </label>
                            <Input 
                              value={selectedIntegration.config.webhook_url} 
                              readOnly 
                              className="bg-gray-50"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">
                              Resposta Automática
                            </label>
                            <Switch 
                              checked={selectedIntegration.config.auto_response}
                              onCheckedChange={(checked) => {
                                const newConfig = { ...selectedIntegration.config, auto_response: checked };
                                saveConfig(selectedIntegration.id, newConfig);
                              }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {selectedIntegration.id === 'calendar' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Calendário Principal
                            </label>
                            <Input 
                              value={selectedIntegration.config.calendar_id} 
                              readOnly 
                              className="bg-gray-50"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">
                              Sincronização Automática
                            </label>
                            <Switch 
                              checked={selectedIntegration.config.auto_sync}
                              onCheckedChange={(checked) => {
                                const newConfig = { ...selectedIntegration.config, auto_sync: checked };
                                saveConfig(selectedIntegration.id, newConfig);
                              }}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Lembrete (horas antes)
                            </label>
                            <Input 
                              type="number"
                              value={selectedIntegration.config.reminder_time}
                              onChange={(e) => {
                                const newConfig = { ...selectedIntegration.config, reminder_time: parseInt(e.target.value) };
                                saveConfig(selectedIntegration.id, newConfig);
                              }}
                            />
                          </div>
                        </div>
                      )}
                      
                      <Button className="w-full">
                        Salvar Configurações
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <selectedIntegration.icon className={`h-12 w-12 ${selectedIntegration.color} mx-auto mb-4 opacity-50`} />
                      <p className="text-gray-500 mb-4">
                        {selectedIntegration.status === 'available' 
                          ? 'Conecte esta integração para ver as configurações'
                          : 'Esta integração não está conectada'
                        }
                      </p>
                      <Button onClick={() => connectIntegration(selectedIntegration.id)}>
                        Conectar {selectedIntegration.name}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'webhooks' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Webhooks Configurados</CardTitle>
                  <Button size="sm">
                    <Webhook className="h-4 w-4 mr-2" />
                    Novo Webhook
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webhooks.map((webhook) => (
                    <div key={webhook.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{webhook.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{webhook.url}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          {webhook.events.map((event, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {event}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Último disparo: {webhook.last_triggered}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={webhook.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {webhook.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Testar
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API da AndoraAI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Endpoint Base</h4>
                  <code className="bg-white px-3 py-2 rounded border text-sm">
                    https://api.andoraai.com/v1
                  </code>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sua API Key</h4>
                  <div className="flex space-x-2">
                    <Input 
                      value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxx" 
                      readOnly 
                      className="bg-white font-mono text-sm"
                    />
                    <Button variant="outline" size="sm">
                      Copiar
                    </Button>
                    <Button variant="outline" size="sm">
                      Regenerar
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Documentação</h4>
                    <p className="text-blue-800 text-sm mb-3">
                      Guia completo para integrar com nossa API
                    </p>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver Docs
                    </Button>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Exemplos</h4>
                    <p className="text-green-800 text-sm mb-3">
                      Códigos de exemplo em várias linguagens
                    </p>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver Exemplos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}