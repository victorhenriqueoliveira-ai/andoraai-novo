'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, DollarSign, Brain, TrendingUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock, Settings, ChartBar as BarChart3, Zap, RefreshCw, Activity, Server, Globe } from 'lucide-react';

interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  monthlyGrowth: number;
  systemHealth: 'healthy' | 'warning' | 'critical';
  aiUsage: {
    totalTokens: number;
    totalCost: number;
    avgCostPerUser: number;
  };
}

interface SystemAlert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  resolved: boolean;
}

interface RecentActivity {
  id: string;
  type: 'user_registered' | 'user_upgraded' | 'system_error' | 'payment_received';
  message: string;
  timestamp: string;
  userId?: string;
  userName?: string;
}

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [alerts, setAlerts] = useState<SystemAlert[]>([]);
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, alertsRes, activitiesRes] = await Promise.all([
        fetch('/api/admin/dashboard/stats'),
        fetch('/api/admin/dashboard/alerts'),
        fetch('/api/admin/dashboard/activities')
      ]);

      const [statsData, alertsData, activitiesData] = await Promise.all([
        statsRes.json(),
        alertsRes.json(),
        activitiesRes.json()
      ]);

      setStats(statsData);
      setAlerts(alertsData.alerts || []);
      setActivities(activitiesData.activities || []);
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const resolveAlert = async (alertId: string) => {
    try {
      await fetch(`/api/admin/alerts/${alertId}/resolve`, {
        method: 'PUT'
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Erro ao resolver alerta:', error);
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'info': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'error': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registered': return <Users className="h-4 w-4 text-blue-500" />;
      case 'user_upgraded': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'system_error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'payment_received': return <DollarSign className="h-4 w-4 text-green-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
            <p className="text-gray-600 mt-1">Visão geral da plataforma AndoraAI</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" onClick={fetchDashboardData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <BarChart3 className="h-4 w-4 mr-2" />
              Relatórios
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-gray-600">Carregando dados...</p>
          </div>
        ) : stats ? (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stats.totalUsers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Usuários</div>
                  <div className="text-xs text-blue-600 mt-1">
                    {stats.activeUsers} ativos
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatCurrency(stats.totalRevenue)}
                  </div>
                  <div className="text-sm text-gray-600">Receita Total</div>
                  <div className={`text-xs mt-1 ${
                    stats.monthlyGrowth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stats.monthlyGrowth > 0 ? '+' : ''}{stats.monthlyGrowth.toFixed(1)}% este mês
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stats.aiUsage.totalTokens.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Tokens IA</div>
                  <div className="text-xs text-purple-600 mt-1">
                    {formatCurrency(stats.aiUsage.totalCost)} custo
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stats.monthlyGrowth.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Crescimento</div>
                  <div className="text-xs text-orange-600 mt-1">Mensal</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Server className={`h-8 w-8 mx-auto mb-2 ${
                    stats.systemHealth === 'healthy' ? 'text-green-600' :
                    stats.systemHealth === 'warning' ? 'text-yellow-600' :
                    'text-red-600'
                  }`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stats.systemHealth === 'healthy' ? '100%' :
                     stats.systemHealth === 'warning' ? '95%' : '85%'}
                  </div>
                  <div className="text-sm text-gray-600">Sistema</div>
                  <div className={`text-xs mt-1 ${
                    stats.systemHealth === 'healthy' ? 'text-green-600' :
                    stats.systemHealth === 'warning' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {stats.systemHealth}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* System Alerts */}
              <div className="xl:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <span>Alertas do Sistema</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alerts.filter(alert => !alert.resolved).map((alert) => (
                        <div 
                          key={alert.id} 
                          className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.type)}`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              {getAlertIcon(alert.type)}
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900 text-sm">{alert.title}</h5>
                                <p className="text-gray-700 text-sm mt-1">{alert.message}</p>
                                <div className="flex items-center justify-between mt-3">
                                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="text-xs"
                                    onClick={() => resolveAlert(alert.id)}
                                  >
                                    Resolver
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {alerts.filter(alert => !alert.resolved).length === 0 && (
                        <div className="text-center py-8">
                          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                          <p className="text-gray-500">Nenhum alerta ativo</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Atividades Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          {getActivityIcon(activity.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(activity.timestamp).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      ))}
                      
                      {activities.length === 0 && (
                        <div className="text-center py-8">
                          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">Nenhuma atividade recente</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                    <h4 className="font-semibold text-purple-900 mb-2">Total de Tokens</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {stats.aiUsage.totalTokens.toLocaleString()}
                    </div>
                    <p className="text-purple-800 text-sm">
                      Processados hoje
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Custo Total</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {formatCurrency(stats.aiUsage.totalCost)}
                    </div>
                    <p className="text-blue-800 text-sm">
                      Gasto com IA hoje
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Custo Médio</h4>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {formatCurrency(stats.aiUsage.avgCostPerUser)}
                    </div>
                    <p className="text-green-800 text-sm">
                      Por usuário ativo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center py-12">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-gray-500">Erro ao carregar dados do dashboard</p>
          </div>
        )}

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6" />
                <span>Gerenciar Usuários</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Server className="h-6 w-6" />
                <span>Status do Sistema</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Settings className="h-6 w-6" />
                <span>Configurações</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}