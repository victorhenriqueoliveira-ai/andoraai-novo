import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '30d';

    // Em produção, estes dados viriam do banco de dados baseado no período
    const analyticsData = {
      overview: {
        totalUsers: 2847,
        activeUsers: 2156,
        totalRevenue: 487500,
        monthlyGrowth: 12.5,
        churnRate: 3.2,
        averageSessionTime: 24.5
      },
      userGrowth: [
        { date: '2024-10-18', newUsers: 45, activeUsers: 2100, churnedUsers: 12 },
        { date: '2024-10-19', newUsers: 52, activeUsers: 2140, churnedUsers: 8 },
        { date: '2024-10-20', newUsers: 38, activeUsers: 2170, churnedUsers: 15 },
        { date: '2024-10-21', newUsers: 61, activeUsers: 2216, churnedUsers: 9 },
        { date: '2024-10-22', newUsers: 43, activeUsers: 2250, churnedUsers: 11 },
        { date: '2024-10-23', newUsers: 55, activeUsers: 2294, churnedUsers: 7 },
        { date: '2024-10-24', newUsers: 49, activeUsers: 2336, churnedUsers: 13 }
      ],
      revenueData: [
        { date: '2024-10-18', revenue: 15420, subscriptions: 234, averageRevenuePerUser: 65.90 },
        { date: '2024-10-19', revenue: 18750, subscriptions: 267, averageRevenuePerUser: 70.22 },
        { date: '2024-10-20', revenue: 12340, subscriptions: 198, averageRevenuePerUser: 62.32 },
        { date: '2024-10-21', revenue: 21890, subscriptions: 289, averageRevenuePerUser: 75.74 },
        { date: '2024-10-22', revenue: 16780, subscriptions: 245, averageRevenuePerUser: 68.49 },
        { date: '2024-10-23', revenue: 19650, subscriptions: 278, averageRevenuePerUser: 70.68 },
        { date: '2024-10-24', revenue: 17890, subscriptions: 256, averageRevenuePerUser: 69.88 }
      ],
      featureUsage: [
        { feature: 'CRM', usage: 2156, users: 2156, percentage: 100 },
        { feature: 'WhatsApp', usage: 1847, users: 1847, percentage: 85.7 },
        { feature: 'Relatórios IA', usage: 1523, users: 1523, percentage: 70.6 },
        { feature: 'Agendamentos', usage: 1234, users: 1234, percentage: 57.2 },
        { feature: 'Integrações', usage: 987, users: 987, percentage: 45.8 }
      ],
      planDistribution: [
        { plan: 'free', users: 1423, revenue: 0, percentage: 50.0 },
        { plan: 'professional', users: 1138, revenue: 110382, percentage: 40.0 },
        { plan: 'enterprise', users: 286, revenue: 84942, percentage: 10.0 }
      ],
      topUsers: [
        {
          id: '1',
          name: 'João Santos',
          email: 'joao@fitnesspro.com',
          plan: 'enterprise',
          revenue: 28000,
          leads: 1247,
          lastActive: '2024-10-25T14:30:00Z'
        },
        {
          id: '2',
          name: 'Maria Silva',
          email: 'maria@clinicabella.com',
          plan: 'professional',
          revenue: 15000,
          leads: 856,
          lastActive: '2024-10-25T13:45:00Z'
        },
        {
          id: '3',
          name: 'Carlos Mendes',
          email: 'carlos@consultoriacm.com',
          plan: 'enterprise',
          revenue: 12500,
          leads: 634,
          lastActive: '2024-10-25T12:20:00Z'
        },
        {
          id: '4',
          name: 'Ana Costa',
          email: 'ana@amigofiel.com',
          plan: 'professional',
          revenue: 8500,
          leads: 423,
          lastActive: '2024-10-25T11:15:00Z'
        },
        {
          id: '5',
          name: 'Pedro Oliveira',
          email: 'pedro@techsolutions.com',
          plan: 'enterprise',
          revenue: 7800,
          leads: 389,
          lastActive: '2024-10-25T10:30:00Z'
        }
      ]
    };

    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}