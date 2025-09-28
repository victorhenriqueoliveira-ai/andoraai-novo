import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam do banco de dados
    const stats = {
      totalUsers: 2847,
      activeUsers: 2156,
      totalRevenue: 487500,
      monthlyGrowth: 12.5,
      systemHealth: 'healthy' as const,
      aiUsage: {
        totalTokens: 125000,
        totalCost: 2450.75,
        avgCostPerUser: 1.14
      }
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}