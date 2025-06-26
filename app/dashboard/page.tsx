import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Brain,
  Target
} from 'lucide-react';

const stats = [
  {
    name: 'Leads Ativos',
    value: '247',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'WhatsApp Hoje',
    value: '89',
    change: '+23%',
    changeType: 'positive',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Reuniões Agendadas',
    value: '12',
    change: '+8%',
    changeType: 'positive',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Taxa de Conversão',
    value: '18.5%',
    change: '-3%',
    changeType: 'negative',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const aiAlerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Tempo de resposta crítico',
    message: 'Você está demorando 4h para responder leads. Isso custou R$ 3.200 esta semana.',
    action: 'Configurar autoresposta',
    time: '2h atrás',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Leads não qualificados',
    message: '40% dos seus leads não têm perfil ideal. Ajuste seu targeting.',
    action: 'Ver análise completa',
    time: '1 dia atrás',
  },
  {
    id: 3,
    type: 'success',
    title: 'Oportunidade identificada',
    message: '15 leads prontos para upgrade. Potencial de R$ 8.500 em vendas.',
    action: 'Ver lista',
    time: '3h atrás',
  },
];

const recentActivities = [
  { type: 'lead', message: 'Novo lead: Maria Silva (Instagram)', time: '5 min' },
  { type: 'meeting', message: 'Reunião confirmada com João Santos', time: '15 min' },
  { type: 'whatsapp', message: '23 mensagens respondidas automaticamente', time: '30 min' },
  { type: 'report', message: 'Relatório semanal da IA gerado', time: '2h' },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bem-vindo, João! 👋</h1>
            <p className="text-gray-600 mt-1">Aqui está o resumo do seu negócio hoje</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Últimos 30 dias
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Brain className="h-4 w-4 mr-2" />
              Novo Relatório IA
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.name} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className={`text-sm mt-2 ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} vs mês anterior
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* AI Alerts */}
          <div className="xl:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Alertas da IA</span>
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Ver todos
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                    alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-green-500 bg-green-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {alert.type === 'critical' && <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />}
                        {alert.type === 'warning' && <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />}
                        {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{alert.title}</h4>
                          <p className="text-gray-700 text-sm mt-1">{alert.message}</p>
                          <div className="flex items-center justify-between mt-3">
                            <Button size="sm" variant="outline" className="text-xs">
                              {alert.action}
                            </Button>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'lead' ? 'bg-blue-500' :
                        activity.type === 'meeting' ? 'bg-purple-500' :
                        activity.type === 'whatsapp' ? 'bg-green-500' :
                        'bg-primary'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time} atrás</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Latest AI Report */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Último Relatório IA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Análise de Performance - Outubro
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    "Você está perdendo 30% dos leads por demora na resposta. 
                    Configure automações para recuperar R$ 12.000/mês."
                  </p>
                  <Button size="sm" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}