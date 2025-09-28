import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam de métricas reais do sistema
    const metrics = {
      totalRequests: 1247856,
      averageResponseTime: 145,
      errorRate: 0.8,
      activeUsers: 2156,
      peakConcurrentUsers: 3421,
      dataProcessed: 2.3 * 1024 * 1024 * 1024 // 2.3GB em bytes
    };

    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Error fetching system metrics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}