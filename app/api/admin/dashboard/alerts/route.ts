import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam do banco de dados
    const alerts = [
      {
        id: '1',
        type: 'warning',
        title: 'Alto uso de IA detectado',
        message: 'Usuário João Santos ultrapassou 2000 tokens hoje. Verificar se há problema.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        resolved: false
      },
      {
        id: '2',
        type: 'info',
        title: 'Novo usuário Enterprise',
        message: 'Ana Costa fez upgrade para Enterprise. Configurar recursos adicionais.',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        resolved: false
      },
      {
        id: '3',
        type: 'critical',
        title: 'API WhatsApp instável',
        message: 'Taxa de erro de 15% nas últimas 2 horas. Investigar imediatamente.',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        resolved: false
      }
    ];

    return NextResponse.json({ alerts });
  } catch (error) {
    console.error('Error fetching alerts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}