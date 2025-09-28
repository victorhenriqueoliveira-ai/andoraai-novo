'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Mail, 
  Globe, 
  Shield, 
  Database,
  Key,
  Bell,
  Zap,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';

interface SystemConfig {
  general: {
    siteName: string;
    siteUrl: string;
    adminEmail: string;
    supportEmail: string;
    maintenanceMode: boolean;
    registrationEnabled: boolean;
    maxUsersPerPlan: {
      free: number;
      professional: number;
      enterprise: number;
    };
  };
  email: {
    provider: 'smtp' | 'sendgrid' | 'mailgun';
    smtpHost?: string;
    smtpPort?: number;
    smtpUser?: string;
    smtpPassword?: string;
    sendgridApiKey?: string;
    mailgunApiKey?: string;
    mailgunDomain?: string;
    fromEmail: string;
    fromName: string;
  };
  whatsapp: {
    apiUrl: string;
    webhookUrl: string;
    verifyToken: string;
    accessToken: string;
    phoneNumberId: string;
    businessAccountId: string;
  };
  ai: {
    provider: 'openai' | 'anthropic' | 'google';
    openaiApiKey?: string;
    anthropicApiKey?: string;
    googleApiKey?: string;
    model: string;
    maxTokens: number;
    temperature: number;
    rateLimitPerUser: number;
  };
  security: {
    jwtSecret: string;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    passwordMinLength: number;
    maxLoginAttempts: number;
    lockoutDuration: number;
    twoFactorEnabled: boolean;
  };
  notifications: {
    emailNotifications: boolean;
    slackWebhook?: string;
    discordWebhook?: string;
    telegramBotToken?: string;
    telegramChatId?: string;
  };
}

export default function ConfiguracoesAdminPage() {
  const [config, setConfig] = useState<SystemConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [showPasswords, setShowPasswords] = useState(false);
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/config');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Erro ao buscar configurações:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveConfig = async () => {
    if (!config) return;

    try {
      setSaving(true);
      const response = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });

      if (response.ok) {
        alert('Configurações salvas com sucesso!');
      } else {
        alert('Erro ao salvar configurações');
      }
    } catch (error) {
      console.error('Erro ao salvar configurações:', error);
      alert('Erro ao salvar configurações');
    } finally {
      setSaving(false);
    }
  };

  const testConnection = async (service: string) => {
    try {
      const response = await fetch(`/api/admin/config/test/${service}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });

      const result = await response.json();
      setTestResults(prev => ({ ...prev, [service]: result.success }));
      
      if (result.success) {
        alert(`Teste de ${service} realizado com sucesso!`);
      } else {
        alert(`Erro no teste de ${service}: ${result.error}`);
      }
    } catch (error) {
      console.error(`Erro ao testar ${service}:`, error);
      setTestResults(prev => ({ ...prev, [service]: false }));
    }
  };

  const updateConfig = (section: keyof SystemConfig, field: string, value: any) => {
    if (!config) return;
    
    setConfig(prev => ({
      ...prev!,
      [section]: {
        ...prev![section],
        [field]: value
      }
    }));
  };

  const updateNestedConfig = (section: keyof SystemConfig, parentField: string, field: string, value: any) => {
    if (!config) return;
    
    setConfig(prev => ({
      ...prev!,
      [section]: {
        ...prev![section],
        [parentField]: {
          ...(prev![section] as any)[parentField],
          [field]: value
        }
      }
    }));
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Carregando configurações...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!config) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Erro ao carregar configurações</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Configurações do Sistema</h1>
            <p className="text-gray-600 mt-1">Gerencie todas as configurações da plataforma</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={fetchConfig}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Recarregar
            </Button>
            <Button onClick={saveConfig} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Salvando...' : 'Salvar Tudo'}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'general', name: 'Geral', icon: Settings },
              { id: 'email', name: 'Email', icon: Mail },
              { id: 'whatsapp', name: 'WhatsApp', icon: Globe },
              { id: 'ai', name: 'IA', icon: Zap },
              { id: 'security', name: 'Segurança', icon: Shield },
              { id: 'notifications', name: 'Notificações', icon: Bell }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* General Tab */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Site
                    </label>
                    <Input
                      value={config.general.siteName}
                      onChange={(e) => updateConfig('general', 'siteName', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL do Site
                    </label>
                    <Input
                      value={config.general.siteUrl}
                      onChange={(e) => updateConfig('general', 'siteUrl', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email do Admin
                    </label>
                    <Input
                      type="email"
                      value={config.general.adminEmail}
                      onChange={(e) => updateConfig('general', 'adminEmail', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email de Suporte
                    </label>
                    <Input
                      type="email"
                      value={config.general.supportEmail}
                      onChange={(e) => updateConfig('general', 'supportEmail', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Modo Manutenção</h4>
                      <p className="text-sm text-gray-600">Desabilita o acesso público ao sistema</p>
                    </div>
                    <Switch
                      checked={config.general.maintenanceMode}
                      onCheckedChange={(checked) => updateConfig('general', 'maintenanceMode', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Registro Habilitado</h4>
                      <p className="text-sm text-gray-600">Permite novos usuários se registrarem</p>
                    </div>
                    <Switch
                      checked={config.general.registrationEnabled}
                      onCheckedChange={(checked) => updateConfig('general', 'registrationEnabled', checked)}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Limites por Plano</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gratuito
                      </label>
                      <Input
                        type="number"
                        value={config.general.maxUsersPerPlan.free}
                        onChange={(e) => updateNestedConfig('general', 'maxUsersPerPlan', 'free', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profissional
                      </label>
                      <Input
                        type="number"
                        value={config.general.maxUsersPerPlan.professional}
                        onChange={(e) => updateNestedConfig('general', 'maxUsersPerPlan', 'professional', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enterprise
                      </label>
                      <Input
                        type="number"
                        value={config.general.maxUsersPerPlan.enterprise}
                        onChange={(e) => updateNestedConfig('general', 'maxUsersPerPlan', 'enterprise', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Email Tab */}
        {activeTab === 'email' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Configurações de Email</CardTitle>
                  <div className="flex items-center space-x-2">
                    {testResults.email !== undefined && (
                      <Badge className={testResults.email ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {testResults.email ? <CheckCircle className="h-4 w-4 mr-1" /> : <AlertTriangle className="h-4 w-4 mr-1" />}
                        {testResults.email ? 'Funcionando' : 'Erro'}
                      </Badge>
                    )}
                    <Button variant="outline" size="sm" onClick={() => testConnection('email')}>
                      Testar Conexão
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provedor de Email
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={config.email.provider}
                    onChange={(e) => updateConfig('email', 'provider', e.target.value)}
                  >
                    <option value="smtp">SMTP</option>
                    <option value="sendgrid">SendGrid</option>
                    <option value="mailgun">Mailgun</option>
                  </select>
                </div>

                {config.email.provider === 'smtp' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Host SMTP
                      </label>
                      <Input
                        value={config.email.smtpHost || ''}
                        onChange={(e) => updateConfig('email', 'smtpHost', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Porta SMTP
                      </label>
                      <Input
                        type="number"
                        value={config.email.smtpPort || ''}
                        onChange={(e) => updateConfig('email', 'smtpPort', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Usuário SMTP
                      </label>
                      <Input
                        value={config.email.smtpUser || ''}
                        onChange={(e) => updateConfig('email', 'smtpUser', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Senha SMTP
                      </label>
                      <div className="relative">
                        <Input
                          type={showPasswords ? 'text' : 'password'}
                          value={config.email.smtpPassword || ''}
                          onChange={(e) => updateConfig('email', 'smtpPassword', e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPasswords(!showPasswords)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {config.email.provider === 'sendgrid' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SendGrid API Key
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.email.sendgridApiKey || ''}
                      onChange={(e) => updateConfig('email', 'sendgridApiKey', e.target.value)}
                    />
                  </div>
                )}

                {config.email.provider === 'mailgun' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mailgun API Key
                      </label>
                      <Input
                        type={showPasswords ? 'text' : 'password'}
                        value={config.email.mailgunApiKey || ''}
                        onChange={(e) => updateConfig('email', 'mailgunApiKey', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mailgun Domain
                      </label>
                      <Input
                        value={config.email.mailgunDomain || ''}
                        onChange={(e) => updateConfig('email', 'mailgunDomain', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Remetente
                    </label>
                    <Input
                      type="email"
                      value={config.email.fromEmail}
                      onChange={(e) => updateConfig('email', 'fromEmail', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Remetente
                    </label>
                    <Input
                      value={config.email.fromName}
                      onChange={(e) => updateConfig('email', 'fromName', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* WhatsApp Tab */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Configurações WhatsApp Business</CardTitle>
                  <div className="flex items-center space-x-2">
                    {testResults.whatsapp !== undefined && (
                      <Badge className={testResults.whatsapp ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {testResults.whatsapp ? <CheckCircle className="h-4 w-4 mr-1" /> : <AlertTriangle className="h-4 w-4 mr-1" />}
                        {testResults.whatsapp ? 'Conectado' : 'Erro'}
                      </Badge>
                    )}
                    <Button variant="outline" size="sm" onClick={() => testConnection('whatsapp')}>
                      Testar Conexão
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL da API
                    </label>
                    <Input
                      value={config.whatsapp.apiUrl}
                      onChange={(e) => updateConfig('whatsapp', 'apiUrl', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL do Webhook
                    </label>
                    <Input
                      value={config.whatsapp.webhookUrl}
                      onChange={(e) => updateConfig('whatsapp', 'webhookUrl', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Verify Token
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.whatsapp.verifyToken}
                      onChange={(e) => updateConfig('whatsapp', 'verifyToken', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Access Token
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.whatsapp.accessToken}
                      onChange={(e) => updateConfig('whatsapp', 'accessToken', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number ID
                    </label>
                    <Input
                      value={config.whatsapp.phoneNumberId}
                      onChange={(e) => updateConfig('whatsapp', 'phoneNumberId', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Account ID
                    </label>
                    <Input
                      value={config.whatsapp.businessAccountId}
                      onChange={(e) => updateConfig('whatsapp', 'businessAccountId', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* AI Tab */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Configurações de IA</CardTitle>
                  <div className="flex items-center space-x-2">
                    {testResults.ai !== undefined && (
                      <Badge className={testResults.ai ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {testResults.ai ? <CheckCircle className="h-4 w-4 mr-1" /> : <AlertTriangle className="h-4 w-4 mr-1" />}
                        {testResults.ai ? 'Funcionando' : 'Erro'}
                      </Badge>
                    )}
                    <Button variant="outline" size="sm" onClick={() => testConnection('ai')}>
                      Testar IA
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provedor de IA
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={config.ai.provider}
                    onChange={(e) => updateConfig('ai', 'provider', e.target.value)}
                  >
                    <option value="openai">OpenAI</option>
                    <option value="anthropic">Anthropic</option>
                    <option value="google">Google AI</option>
                  </select>
                </div>

                {config.ai.provider === 'openai' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      OpenAI API Key
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.ai.openaiApiKey || ''}
                      onChange={(e) => updateConfig('ai', 'openaiApiKey', e.target.value)}
                    />
                  </div>
                )}

                {config.ai.provider === 'anthropic' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anthropic API Key
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.ai.anthropicApiKey || ''}
                      onChange={(e) => updateConfig('ai', 'anthropicApiKey', e.target.value)}
                    />
                  </div>
                )}

                {config.ai.provider === 'google' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Google AI API Key
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.ai.googleApiKey || ''}
                      onChange={(e) => updateConfig('ai', 'googleApiKey', e.target.value)}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <Input
                      value={config.ai.model}
                      onChange={(e) => updateConfig('ai', 'model', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Tokens
                    </label>
                    <Input
                      type="number"
                      value={config.ai.maxTokens}
                      onChange={(e) => updateConfig('ai', 'maxTokens', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Temperature
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="2"
                      value={config.ai.temperature}
                      onChange={(e) => updateConfig('ai', 'temperature', parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rate Limit por Usuário
                    </label>
                    <Input
                      type="number"
                      value={config.ai.rateLimitPerUser}
                      onChange={(e) => updateConfig('ai', 'rateLimitPerUser', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      JWT Secret
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.security.jwtSecret}
                      onChange={(e) => updateConfig('security', 'jwtSecret', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      JWT Expires In
                    </label>
                    <Input
                      value={config.security.jwtExpiresIn}
                      onChange={(e) => updateConfig('security', 'jwtExpiresIn', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Refresh Token Expires In
                    </label>
                    <Input
                      value={config.security.refreshTokenExpiresIn}
                      onChange={(e) => updateConfig('security', 'refreshTokenExpiresIn', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tamanho Mínimo da Senha
                    </label>
                    <Input
                      type="number"
                      value={config.security.passwordMinLength}
                      onChange={(e) => updateConfig('security', 'passwordMinLength', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Tentativas de Login
                    </label>
                    <Input
                      type="number"
                      value={config.security.maxLoginAttempts}
                      onChange={(e) => updateConfig('security', 'maxLoginAttempts', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duração do Bloqueio (minutos)
                    </label>
                    <Input
                      type="number"
                      value={config.security.lockoutDuration}
                      onChange={(e) => updateConfig('security', 'lockoutDuration', parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Autenticação de Dois Fatores</h4>
                    <p className="text-sm text-gray-600">Habilita 2FA para todos os usuários</p>
                  </div>
                  <Switch
                    checked={config.security.twoFactorEnabled}
                    onCheckedChange={(checked) => updateConfig('security', 'twoFactorEnabled', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Notificações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Notificações por Email</h4>
                    <p className="text-sm text-gray-600">Enviar alertas do sistema por email</p>
                  </div>
                  <Switch
                    checked={config.notifications.emailNotifications}
                    onCheckedChange={(checked) => updateConfig('notifications', 'emailNotifications', checked)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slack Webhook URL
                    </label>
                    <Input
                      value={config.notifications.slackWebhook || ''}
                      onChange={(e) => updateConfig('notifications', 'slackWebhook', e.target.value)}
                      placeholder="https://hooks.slack.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discord Webhook URL
                    </label>
                    <Input
                      value={config.notifications.discordWebhook || ''}
                      onChange={(e) => updateConfig('notifications', 'discordWebhook', e.target.value)}
                      placeholder="https://discord.com/api/webhooks/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telegram Bot Token
                    </label>
                    <Input
                      type={showPasswords ? 'text' : 'password'}
                      value={config.notifications.telegramBotToken || ''}
                      onChange={(e) => updateConfig('notifications', 'telegramBotToken', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telegram Chat ID
                    </label>
                    <Input
                      value={config.notifications.telegramChatId || ''}
                      onChange={(e) => updateConfig('notifications', 'telegramChatId', e.target.value)}
                    />
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