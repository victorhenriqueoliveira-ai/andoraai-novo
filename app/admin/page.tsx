'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  DollarSign, 
  Brain, 
  TrendingUp, 
  Search, 
  Filter,
  MoreVertical,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Settings,
  BarChart3,
  Zap
} from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Clínica Estética Bella',
    email: 'maria@clinicabella.com',
    plan: 'Profissional',
    status: 'active',
    aiUsage: 1250,
    aiCost: 45.50,
    lastLogin: '2024-10-25 14:30',
    leads: 247,
    conversion: 18.5,
    revenue: 15000,
    joinDate: '2024-08-15',
  },
  {
    id: 2,
    name: 'João Santos',
    company: 'Academia Fitness Pro',
    email: 'joao@fitnesspro.com',
    plan: 'Enterprise',
    status: 'active',
    aiUsage: 2100,
    aiCost: 78.90,
    lastLogin: '2024-10-25 13:45',
    leads: 189,
    conversion: 22.3,
    revenue: 28000,
    joinDate: '2024-07-20',
  },
  {
    id: 3,
    name: 'Ana Costa',
    company: 'Pet Shop Amigo Fiel',
    email: 'ana@amigofiel.com',
    plan: 'Profissional',
    status: 'trial',
    aiUsage: 450,
    aiCost: 12.30,
    lastLogin: '2024-10-25 12:20',
    leads: 67,
    conversion: 34.2,
    revenue: 8500,
    joinDate: '2024-10-18',
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    company: 'Consultoria Digital CM',
    email: 'carlos@consultoriacm.com',
    plan: 'Gratuito',
    status: 'inactive',
    aiUsage: 50,
    aiCost: 1.20,
    lastLogin: '2024-10-20 16:00',
    leads: 23,
    conversion: 8.7,
    revenue: 0,
    joinDate: '2024-09-10',
  },
];

const aiMetrics = {
  totalUsage: 3850,
  totalCost: 137.90,
  avgCostPerClient: 34.48,
  topUsers: [
    { name: 'João Santos', usage: 2100, cost: 78.90 },
    { name: 'Maria Silva', usage: 1250, cost: 45.50 },
    { name: 'Ana Costa', usage: 450, cost: 12.30 },
  ]
};

const systemAlerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Alto uso de IA - João Santos',
    message: 'Cliente ultrapassou 2000 tokens hoje. Verificar se há problema.',
    timestamp: '14:30',
  },
  {
    id: 2,
    type: 'info',
    title: 'Novo cliente Enterprise',
    message: 'Ana Costa fez upgrade para Enterprise. Configurar recursos.',
    timestamp: '13:45',
  },
  {
    id: 3,
    type: 'critical',
    title: 'API WhatsApp instável',
    message: 'Taxa de erro de 15% nas últimas 2 horas. Investigar.',
    timestamp: '12:20',
  },
];

export default function AdminPage() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlan, setFilterPlan] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'trial': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      case 'Profissional': return 'bg-primary/10 text-primary';
      case 'Gratuito': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = filterPlan === 'all' || client.plan === filterPlan;
    return matchesSearch && matchesPlan;
  });

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin AndoraAI</h1>
            <p className="text-gray-600 mt-1">Painel administrativo para equipe AndoraAI</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações Sistema
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <BarChart3 className="h-4 w-4 mr-2" />
              Relatório Completo
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{clients.length}</div>
              <div className="text-sm text-gray-600">Clientes Totais</div>
              <div className="text-xs text-green-600 mt-1">
                {clients.filter(c => c.status === 'active').length} ativos
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{aiMetrics.totalUsage.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Tokens IA Hoje</div>
              <div className="text-xs text-purple-600 mt-1">
                R$ {aiMetrics.totalCost.toFixed(2)} custo
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                R$ {clients.reduce((sum, c) => sum + c.revenue, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">MRR Total</div>
              <div className="text-xs text-green-600 mt-1">+12% vs mês anterior</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {(clients.reduce((sum, c) => sum + c.conversion, 0) / clients.length).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Conversão Média</div>
              <div className="text-xs text-orange-600 mt-1">Todos os clientes</div>
            </CardContent>
          </Card>
        </div>

        {/* AI Usage Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>Análise de Uso da IA</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Custo Total Hoje</h4>
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  R$ {aiMetrics.totalCost.toFixed(2)}
                </div>
                <p className="text-purple-800 text-sm">
                  {aiMetrics.totalUsage.toLocaleString()} tokens processados
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Custo Médio por Cliente</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  R$ {aiMetrics.avgCostPerClient.toFixed(2)}
                </div>
                <p className="text-blue-800 text-sm">
                  Baseado em clientes ativos
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Eficiência</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">94%</div>
                <p className="text-green-800 text-sm">
                  Taxa de sucesso das respostas
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Maiores Usuários de IA</h4>
              <div className="space-y-2">
                {aiMetrics.topUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.usage.toLocaleString()} tokens</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">R$ {user.cost.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">hoje</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clients Management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Clients List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Clientes</CardTitle>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Buscar clientes..." 
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <select 
                      className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                      value={filterPlan}
                      onChange={(e) => setFilterPlan(e.target.value)}
                    >
                      <option value="all">Todos os Planos</option>
                      <option value="Enterprise">Enterprise</option>
                      <option value="Profissional">Profissional</option>
                      <option value="Gratuito">Gratuito</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredClients.map((client) => (
                    <div 
                      key={client.id} 
                      className={`p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow ${
                        selectedClient.id === client.id ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={() => setSelectedClient(client)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{client.name}</h4>
                            <Badge className={getStatusColor(client.status)}>
                              {client.status}
                            </Badge>
                            <Badge className={getPlanColor(client.plan)}>
                              {client.plan}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{client.company}</p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Leads:</span>
                              <span className="font-medium ml-1">{client.leads}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Conversão:</span>
                              <span className="font-medium ml-1">{client.conversion}%</span>
                            </div>
                            <div>
                              <span className="text-gray-500">IA Custo:</span>
                              <span className="font-medium ml-1">R$ {client.aiCost.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Details & Alerts */}
          <div className="space-y-6">
            {/* Selected Client Details */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedClient.name}</h4>
                    <p className="text-gray-600 text-sm">{selectedClient.company}</p>
                    <p className="text-gray-500 text-xs">{selectedClient.email}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 block">Plano</span>
                      <Badge className={getPlanColor(selectedClient.plan)}>
                        {selectedClient.plan}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Status</span>
                      <Badge className={getStatusColor(selectedClient.status)}>
                        {selectedClient.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Uso IA Hoje:</span>
                      <span className="font-medium">{selectedClient.aiUsage} tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Custo IA:</span>
                      <span className="font-medium">R$ {selectedClient.aiCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">MRR:</span>
                      <span className="font-medium">R$ {selectedClient.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Último Login:</span>
                      <span className="font-medium">{selectedClient.lastLogin}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Ver Dashboard
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span>Alertas do Sistema</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div 
                      key={alert.id} 
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                        alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                        'border-blue-500 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 text-sm">{alert.title}</h5>
                          <p className="text-gray-700 text-xs mt-1">{alert.message}</p>
                        </div>
                        <span className="text-xs text-gray-500">{alert.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}