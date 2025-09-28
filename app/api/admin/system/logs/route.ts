import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');

    // Em produção, estes dados viriam do sistema de logs
    const logs = [
      {
        id: '1',
        level: 'info',
        message: 'Sistema iniciado com sucesso',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        service: 'api',
        details: { version: '1.0.0', port: 3000 }
      },
      {
        id: '2',
        level: 'warning',
        message: 'Alto uso de CPU detectado',
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
        service: 'system',
        details: { cpu_usage: 85, threshold: 80 }
      },
      {
        id: '3',
        level: 'error',
        message: 'Falha na conexão com WhatsApp API',
        timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        service: 'whatsapp',
        details: { error_code: 'ECONNREFUSED', retry_count: 3 }
      },
      {
        id: '4',
        level: 'info',
        message: 'Backup automático concluído',
        timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
        service: 'database',
        details: { backup_size: '2.3GB', duration: '45s' }
      },
      {
        id: '5',
        level: 'critical',
        message: 'Falha crítica no serviço de IA',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        service: 'ai',
        details: { error: 'API_QUOTA_EXCEEDED', affected_users: 156 }
      }
    ].slice(0, limit);

    return NextResponse.json({ logs });
  } catch (error) {
    console.error('Error fetching system logs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}