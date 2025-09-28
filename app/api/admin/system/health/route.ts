import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam de monitoramento real do sistema
    const health = {
      status: 'healthy' as const,
      uptime: 2592000, // 30 dias em segundos
      lastCheck: new Date().toISOString(),
      services: {
        api: {
          status: 'online' as const,
          responseTime: 45
        },
        database: {
          status: 'online' as const,
          connections: 12,
          maxConnections: 100
        },
        whatsapp: {
          status: 'online' as const,
          messagesProcessed: 1247
        },
        ai: {
          status: 'online' as const,
          requestsPerMinute: 23
        }
      },
      resources: {
        cpu: {
          usage: 35,
          cores: 4
        },
        memory: {
          used: 2.1 * 1024 * 1024 * 1024, // 2.1GB em bytes
          total: 8 * 1024 * 1024 * 1024, // 8GB em bytes
          percentage: 26
        },
        disk: {
          used: 45 * 1024 * 1024 * 1024, // 45GB em bytes
          total: 100 * 1024 * 1024 * 1024, // 100GB em bytes
          percentage: 45
        },
        network: {
          inbound: 1.2 * 1024 * 1024, // 1.2MB/s
          outbound: 0.8 * 1024 * 1024  // 0.8MB/s
        }
      }
    };

    return NextResponse.json(health);
  } catch (error) {
    console.error('Error fetching system health:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}