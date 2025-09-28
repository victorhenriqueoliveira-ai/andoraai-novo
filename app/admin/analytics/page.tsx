'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign,
  MessageSquare,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';

interface AnalyticsData {
  overview: {
    totalUsers: number;
    activeUsers: number;
    totalRevenue: number;
    monthlyGrowth: number;
    churnRate: number;
    averageSessionTime: number;
  };
  userGrowth: Array<{
    date: string;
    newUsers: number;
    activeUsers: number;
    churnedUsers: number;
  }>;
  revenueData: Array<{
    date: string;
    revenue: number;
    subscriptions: number;
    averageRevenuePerUser: number;
  }>;
  featureUsage: Array<{
    feature: string;
    usage: number;
    users: number;
    percentage: number;
  }>;
  planDistribution: Array<{
    plan: string;
    users: number;
    revenue: number;
    percentage: number;
  }>;
  topUsers: Array<{
    id: string;
    name: string;
    email: string;
    plan: string;
    revenue: number;
    leads: number;
    lastActive: string;
  }>;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('30d');

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/analytics?period=${period}`);
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Erro ao buscar analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics/export?period=${period}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-${period}.csv`;
      a.click();
    } catch (error) {
      console.error('Erro ao exportar analytics:', error);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Avançado</h1>
            <p className="text-gray-600 mt-1">Insights detalhados sobre uso e performance</p>
          </div>
          <div className="flex space-x-3">
            <select 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="7d">Últimos 7 dias</option>
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="1y">Último ano</option>
            </select>
            <Button variant="outline" size="sm" onClick={exportAnalytics}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button size="sm" onClick={fetchAnalytics}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-gray-600">Carregando analytics...</p>
          </div>
        ) : data ? (
          <>
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {data.overview.totalUsers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Usuários</div>
                  <div className="text-xs text-blue-600 mt-1">
                    {data.overview.activeUsers} ativos
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatCurrency(data.overview.totalRevenue)}
                  </div>
                  <div className="text-sm text-gray-600">Receita Total</div>
                  <div className={`text-xs mt-1 ${
                    data.overview.monthlyGrowth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatPercentage(data.overview.monthlyGrowth)} este mês
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatPercentage(data.overview.monthlyGrowth)}
                  </div>
                  <div className="text-sm text-gray-600">Crescimento</div>
                  <div className="text-xs text-purple-600 mt-1">Mensal</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {data.overview.churnRate.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Churn Rate</div>
                  <div className="text-xs text-red-600 mt-1">Mensal</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {Math.round(data.overview.averageSessionTime)}min
                  </div>
                  <div className="text-sm text-gray-600">Sessão Média</div>
                  <div className="text-xs text-orange-600 mt-1">Por usuário</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatCurrency(data.overview.totalRevenue / data.overview.totalUsers)}
                  </div>
                  <div className="text-sm text-gray-600">ARPU</div>
                  <div className="text-xs text-indigo-600 mt-1">Médio</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Crescimento de Usuários</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.userGrowth.slice(-7).map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {new Date(item.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <span className="text-green-600">+{item.newUsers}</span>
                            <span className="text-gray-500 ml-2">novos</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-blue-600">{item.activeUsers}</span>
                            <span className="text-gray-500 ml-2">ativos</span>
                          </div>
                          {item.churnedUsers > 0 && (
                            <div className="text-sm">
                              <span className="text-red-600">-{item.churnedUsers}</span>
                              <span className="text-gray-500 ml-2">churn</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Evolução da Receita</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.revenueData.slice(-7).map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {new Date(item.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <span className="text-green-600 font-medium">
                              {formatCurrency(item.revenue)}
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="text-blue-600">{item.subscriptions}</span>
                            <span className="text-gray-500 ml-1">subs</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-purple-600">
                              {formatCurrency(item.averageRevenuePerUser)}
                            </span>
                            <span className="text-gray-500 ml-1">ARPU</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Usage & Plan Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Feature Usage */}
              <Card>
                <CardHeader>
                  <CardTitle>Uso de Recursos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.featureUsage.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">
                            {feature.feature}
                          </span>
                          <span className="text-sm text-gray-600">
                            {feature.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${feature.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{feature.users} usuários</span>
                          <span>{feature.usage.toLocaleString()} usos</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Plan Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Planos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.planDistribution.map((plan, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900 capitalize">
                            {plan.plan}
                          </span>
                          <span className="text-sm text-gray-600">
                            {plan.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              plan.plan === 'enterprise' ? 'bg-purple-500' :
                              plan.plan === 'professional' ? 'bg-primary' :
                              'bg-gray-400'
                            }`}
                            style={{ width: `${plan.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{plan.users} usuários</span>
                          <span>{formatCurrency(plan.revenue)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Users */}
            <Card>
              <CardHeader>
                <CardTitle>Top Usuários por Receita</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.topUsers.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {formatCurrency(user.revenue)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {user.leads} leads • {user.plan}
                        </div>
                        <div className="text-xs text-gray-500">
                          Ativo: {new Date(user.lastActive).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Erro ao carregar dados de analytics</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}