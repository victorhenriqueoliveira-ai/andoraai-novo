import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Em produção, estes dados viriam do banco de dados
    const stats = {
      totalUsers: 2847,
      activeUsers: 2156,
      newUsersThisMonth: 234,
      totalRevenue: 487500,
      averageRevenuePerUser: 171.25,
      churnRate: 3.2
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}