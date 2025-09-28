import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam do banco de dados
    const activities = [
      {
        id: '1',
        type: 'user_registered',
        message: 'Novo usuário registrado: Pedro Silva',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        userId: 'user_123',
        userName: 'Pedro Silva'
      },
      {
        id: '2',
        type: 'user_upgraded',
        message: 'Maria Santos fez upgrade para plano Enterprise',
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
        userId: 'user_456',
        userName: 'Maria Santos'
      },
      {
        id: '3',
        type: 'payment_received',
        message: 'Pagamento recebido: R$ 297,00 - João Costa',
        timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        userId: 'user_789',
        userName: 'João Costa'
      },
      {
        id: '4',
        type: 'system_error',
        message: 'Erro na API do WhatsApp - Serviço reiniciado automaticamente',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '5',
        type: 'user_registered',
        message: 'Novo usuário registrado: Ana Oliveira',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        userId: 'user_101',
        userName: 'Ana Oliveira'
      }
    ];

    return NextResponse.json({ activities });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}