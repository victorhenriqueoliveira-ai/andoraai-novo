'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Download,
  Eye,
  Calendar,
  BarChart3,
  Target,
  DollarSign,
  Users,
  MessageSquare,
  Clock
} from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'Análise Crítica - Outubro 2024',
    date: '2024-10-20',
    type: 'monthly',
    status: 'critical',
    summary: 'Você está perdendo R$ 15.000 por mês com leads mal qualificados. Vou te mostrar exatamente onde está o problema e como resolver.',
    insights: [
      'Tempo de resposta aumentou 40% nas últimas 2 semanas',
      '60% dos leads não têm perfil ideal para seu negócio',
      'Taxa de conversão caiu de 25% para 18%',
      'Você está focando nos produtos errados'
    ],
    metrics: {
      revenue_impact: -15000,
      conversion_rate: 18,
      response_time: 4.2,
      lead_quality: 40
    },
    recommendations: 5,
    implemented: 2,
  },
  {
    id: 2,
    title: 'Performance WhatsApp - Semana 42',
    date: '2024-10-15',
    type: 'weekly',
    status: 'warning',
    summary: 'Seu atendimento via WhatsApp melhorou, mas ainda há pontos críticos que estão custando conversões.',
    insights: [
      'Automações funcionando bem (78% de eficiência)',
      'Horário de pico mal aproveitado (14h-16h)',
      'Mensagens muito longas afastam clientes',
      'Follow-up pós-venda inexistente'
    ],
    metrics: {
      revenue_impact: -3200,
      conversion_rate: 22,
      response_time: 2.1,
      lead_quality: 65
    },
    recommendations: 3,
    implemented: 1,
  },
  {
    id: 3,
    title: 'Oportunidades Desperdiçadas - Setembro',
    date: '2024-10-01',
    type: 'monthly',
    status: 'opportunity',
    summary: 'Identifiquei 23 leads prontos para comprar que você não está priorizando. Potencial de R$ 8.500 em vendas.',
    insights: [
      '23 leads com alta intenção de compra ignorados',
      'Clientes antigos prontos para upgrade',
      'Horários vagos que poderiam gerar R$ 2.000/semana',
      'Serviços complementares não oferecidos'
    ],
    metrics: {
      revenue_impact: 8500,
      conversion_rate: 34,
      response_time: 1.8,
      lead_quality: 85
    },
    recommendations: 4,
    implemented: 4,
  },
];

const kpis = [
  {
    name: 'Impacto Financeiro',
    value: 'R$ 12.3k',
    change: '+R$ 3.2k',
    changeType: 'positive',
    icon: DollarSign,
    description: 'Economia gerada pelas implementações'
  },
  {
    name: 'Taxa de Implementação',
    value: '67%',
    change: '+12%',
    changeType: 'positive',
    icon: Target,
    description: 'Recomendações implementadas'
  },
  {
    name: 'Precisão da IA',
    value: '94%',
    change: '+2%',
    changeType: 'positive',
    icon: Brain,
    description: 'Acurácia das previsões'
  },
  {
    name: 'Tempo de Resposta',
    value: '2.1h',
    change: '-1.3h',
    changeType: 'positive',
    icon: Clock,
    description: 'Média de resposta aos leads'
  },
];

export default function RelatoriosPage() {
  const [selectedReport, setSelectedReport] = useState(reports[0]);
  const [viewMode, setViewMode] = useState('list');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'opportunity': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      case 'warning': return <TrendingDown className="h-4 w-4" />;
      case 'opportunity': return <TrendingUp className="h-4 w-4" />;
      default: return <BarChart3 className="h-4 w-4" />;
    }
  };

  const generateNewReport = () => {
    console.log('Gerando novo relatório...');
    // Aqui seria a lógica para gerar um novo relatório
  };

  const downloadReport = (reportId: number) => {
    console.log('Baixando relatório:', reportId);
    // Aqui seria a lógica para download do relatório
  };

  const implementRecommendation = (reportId: number, recommendationId: number) => {
    console.log('Implementando recomendação:', reportId, recommendationId);
    // Aqui seria a lógica para marcar recomendação como implementada
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Relatórios da IA</h1>
            <p className="text-gray-600 mt-1">Insights diretos e sem filtros sobre seu negócio</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Relatório
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={generateNewReport}
            >
              <Brain className="h-4 w-4 mr-2" />
              Gerar Novo Relatório
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.name}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{kpi.value}</p>
                    <p className={`text-sm mt-2 ${
                      kpi.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.change} vs período anterior
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <kpi.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{kpi.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            Lista
          </Button>
          <Button
            variant={viewMode === 'detailed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('detailed')}
          >
            Detalhado
          </Button>
        </div>

        {viewMode === 'list' && (
          <div className="space-y-6">
            {reports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-xl">{report.title}</CardTitle>
                        <Badge className={`${getStatusColor(report.status)} border`}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(report.status)}
                            <span className="capitalize">{report.status}</span>
                          </div>
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {new Date(report.date).toLocaleDateString('pt-BR')} • Relatório {report.type === 'monthly' ? 'Mensal' : 'Semanal'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedReport(report)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Ver Detalhes
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => downloadReport(report.id)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {report.summary}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className={`text-2xl font-bold ${
                          report.metrics.revenue_impact > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {report.metrics.revenue_impact > 0 ? '+' : ''}R$ {Math.abs(report.metrics.revenue_impact / 1000).toFixed(1)}k
                        </div>
                        <div className="text-xs text-gray-600">Impacto Financeiro</div>
                      </div>
                      
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{report.metrics.conversion_rate}%</div>
                        <div className="text-xs text-gray-600">Taxa Conversão</div>
                      </div>
                      
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{report.metrics.response_time}h</div>
                        <div className="text-xs text-gray-600">Tempo Resposta</div>
                      </div>
                      
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{report.metrics.lead_quality}%</div>
                        <div className="text-xs text-gray-600">Qualidade Leads</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{report.recommendations} recomendações</span>
                        <span>•</span>
                        <span className="text-green-600">{report.implemented} implementadas</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {Math.round((report.implemented / report.recommendations) * 100)}% concluído
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {viewMode === 'detailed' && selectedReport && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Report Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{selectedReport.title}</CardTitle>
                      <p className="text-gray-600 text-sm mt-1">
                        {new Date(selectedReport.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(selectedReport.status)} border`}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(selectedReport.status)}
                        <span className="capitalize">{selectedReport.status}</span>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-primary mb-3">Resumo Executivo</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedReport.summary}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Principais Insights</h3>
                    <div className="space-y-3">
                      {selectedReport.insights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <p className="text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Plano de Ação</h3>
                    <div className="space-y-3">
                      {Array.from({ length: selectedReport.recommendations }, (_, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className={`h-5 w-5 ${
                              index < selectedReport.implemented ? 'text-green-500' : 'text-gray-300'
                            }`} />
                            <div>
                              <p className="font-medium text-gray-900">
                                Recomendação {index + 1}
                              </p>
                              <p className="text-sm text-gray-600">
                                Implementar melhoria identificada pela IA
                              </p>
                            </div>
                          </div>
                          {index >= selectedReport.implemented && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => implementRecommendation(selectedReport.id, index)}
                            >
                              Implementar
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Metrics Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Métricas do Período</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg">
                    <div className={`text-3xl font-bold mb-1 ${
                      selectedReport.metrics.revenue_impact > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {selectedReport.metrics.revenue_impact > 0 ? '+' : ''}R$ {(selectedReport.metrics.revenue_impact / 1000).toFixed(1)}k
                    </div>
                    <div className="text-sm text-gray-600">Impacto Financeiro</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Taxa de Conversão</span>
                      <span className="font-semibold">{selectedReport.metrics.conversion_rate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tempo de Resposta</span>
                      <span className="font-semibold">{selectedReport.metrics.response_time}h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Qualidade dos Leads</span>
                      <span className="font-semibold">{selectedReport.metrics.lead_quality}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progresso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Implementação</span>
                        <span>{Math.round((selectedReport.implemented / selectedReport.recommendations) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(selectedReport.implemented / selectedReport.recommendations) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedReport.implemented} de {selectedReport.recommendations} recomendações implementadas
                      </p>
                      <Button size="sm" className="w-full">
                        Ver Próximas Ações
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}