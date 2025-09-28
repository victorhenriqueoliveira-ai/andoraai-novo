'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Zap, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Activity, HardDrive, Cpu, MemoryStick, Globe, Shield, RefreshCw, Download, Settings } from 'lucide-react';

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  lastCheck: string;
  services: {
    api: { status: 'online' | 'offline' | 'degraded'; responseTime: number };
    database: { status: 'online' | 'offline' | 'degraded'; connections: number; maxConnections: number };
    whatsapp: { status: 'online' | 'offline' | 'degraded'; messagesProcessed: number };
    ai: { status: 'online' | 'offline' | 'degraded'; requestsPerMinute: number };
  };
  resources: {
    cpu: { usage: number; cores: number };
    memory: { used: number; total: number; percentage: number };
    disk: { used: number; total: number; percentage: number };
    network: { inbound: number; outbound: number };
  };
}

interface SystemLogs {
  id: string;
  level: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  timestamp: string;
  service: string;
  details?: any;
}

interface SystemMetrics {
  totalRequests: number;
  averageResponseTime: number;
  errorRate: number;
  activeUsers: number;
  peakConcurrentUsers: number;
  dataProcessed: number;
}

export default function SistemaPage() {
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const [logs, setLogs] = useState<SystemLogs[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    fetchSystemData();
    
    if (autoRefresh) {
      const interval = setInterval(fetchSystemData, 30000); // 30 segundos
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const fetchSystemData = async () => {
    try {
      setLoading(true);
      
      const [healthRes, logsRes, metricsRes] = await Promise.all([
        fetch('/api/admin/system/health'),
        fetch('/api/admin/system/logs?limit=50'),
        fetch('/api/admin/system/metrics')
      ]);

      const [healthData, logsData, metricsData] = await Promise.all([
        healthRes.json(),
        logsRes.json(),
        metricsRes.json()
      ]);

      setHealth(healthData);
      setLogs(logsData.logs || []);
      setMetrics(metricsData);
    } catch (error) {
      console.error('Erro ao buscar dados do sistema:', error);
    } finally {
      setLoading(false);
    }
  };

  const restartService = async (serviceName: string) => {
    try {
      const response = await fetch(`/api/admin/system/services/${serviceName}/restart`, {
        method: 'POST'
      });

      if (response.ok) {
        fetchSystemData();
      }
    } catch (error) {
      console.error('Erro ao reiniciar serviço:', error);
    }
  };

  const exportLogs = async () => {
    try {
      const response = await fetch('/api/admin/system/logs/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'system-logs.json';
      a.click();
    } catch (error) {
      console.error('Erro ao exportar logs:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'online': return 'bg-green-100 text-green-800';
      case 'warning':
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'critical':
      case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${minutes}m`;
  };

  const formatBytes = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Monitoramento do Sistema</h1>
            <p className="text-gray-600 mt-1">Status em tempo real da infraestrutura</p>
          </div>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setAutoRefresh(!autoRefresh)}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
              Auto Refresh {autoRefresh ? 'ON' : 'OFF'}
            </Button>
            <Button variant="outline" size="sm" onClick={exportLogs}>
              <Download className="h-4 w-4 mr-2" />
              Exportar Logs
            </Button>
            <Button size="sm" onClick={fetchSystemData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>

        {/* System Health Overview */}
        {health && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Status Geral do Sistema</span>
                </CardTitle>
                <Badge className={getStatusColor(health.status)}>
                  {health.status.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatUptime(health.uptime)}
                  </div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {health.resources.cpu.usage}%
                  </div>
                  <div className="text-sm text-gray-600">CPU Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {health.resources.memory.percentage}%
                  </div>
                  <div className="text-sm text-gray-600">Memory Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {health.resources.disk.percentage}%
                  </div>
                  <div className="text-sm text-gray-600">Disk Usage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Services Status */}
        {health && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">API</span>
                  </div>
                  <Badge className={getStatusColor(health.services.api.status)}>
                    {health.services.api.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{health.services.api.responseTime}ms</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => restartService('api')}
                  >
                    Reiniciar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">Database</span>
                  </div>
                  <Badge className={getStatusColor(health.services.database.status)}>
                    {health.services.database.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Connections:</span>
                    <span className="font-medium">
                      {health.services.database.connections}/{health.services.database.maxConnections}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => restartService('database')}
                  >
                    Reiniciar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">WhatsApp</span>
                  </div>
                  <Badge className={getStatusColor(health.services.whatsapp.status)}>
                    {health.services.whatsapp.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Messages:</span>
                    <span className="font-medium">{health.services.whatsapp.messagesProcessed}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => restartService('whatsapp')}
                  >
                    Reiniciar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold">AI Service</span>
                  </div>
                  <Badge className={getStatusColor(health.services.ai.status)}>
                    {health.services.ai.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Requests/min:</span>
                    <span className="font-medium">{health.services.ai.requestsPerMinute}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => restartService('ai')}
                  >
                    Reiniciar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* System Metrics */}
        {metrics && (
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metrics.totalRequests.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metrics.averageResponseTime}ms
                  </div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metrics.errorRate}%
                  </div>
                  <div className="text-sm text-gray-600">Error Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metrics.activeUsers}
                  </div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metrics.peakConcurrentUsers}
                  </div>
                  <div className="text-sm text-gray-600">Peak Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatBytes(metrics.dataProcessed)}
                  </div>
                  <div className="text-sm text-gray-600">Data Processed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* System Logs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Logs do Sistema</CardTitle>
              <Button variant="outline" size="sm" onClick={exportLogs}>
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Badge className={getLogLevelColor(log.level)}>
                    {log.level.toUpperCase()}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{log.service}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(log.timestamp).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{log.message}</p>
                    {log.details && (
                      <details className="mt-2">
                        <summary className="text-xs text-gray-500 cursor-pointer">Ver detalhes</summary>
                        <pre className="text-xs text-gray-600 mt-1 bg-white p-2 rounded border overflow-x-auto">
                          {JSON.stringify(log.details, null, 2)}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              ))}
              
              {logs.length === 0 && (
                <div className="text-center py-8">
                  <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhum log encontrado</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}