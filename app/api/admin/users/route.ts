import { NextRequest, NextResponse } from 'next/server';

// Mock data - Em produção, isso viria do banco de dados
const mockUsers = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria@clinicabella.com',
    phone: '+55 11 99999-9999',
    company: 'Clínica Estética Bella',
    plan: 'professional',
    status: 'active',
    createdAt: '2024-08-15T10:00:00Z',
    lastLogin: '2024-10-25T14:30:00Z',
    totalRevenue: 15000,
    leadsCount: 247,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao@fitnesspro.com',
    phone: '+55 11 88888-8888',
    company: 'Academia Fitness Pro',
    plan: 'enterprise',
    status: 'active',
    createdAt: '2024-07-20T10:00:00Z',
    lastLogin: '2024-10-25T13:45:00Z',
    totalRevenue: 28000,
    leadsCount: 189,
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana@amigofiel.com',
    phone: '+55 11 77777-7777',
    company: 'Pet Shop Amigo Fiel',
    plan: 'professional',
    status: 'active',
    createdAt: '2024-10-18T10:00:00Z',
    lastLogin: '2024-10-25T12:20:00Z',
    totalRevenue: 8500,
    leadsCount: 67,
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Carlos Mendes',
    email: 'carlos@consultoriacm.com',
    phone: '+55 11 66666-6666',
    company: 'Consultoria Digital CM',
    plan: 'free',
    status: 'inactive',
    createdAt: '2024-09-10T10:00:00Z',
    lastLogin: '2024-10-20T16:00:00Z',
    totalRevenue: 0,
    leadsCount: 23,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get('searchTerm') || '';
    const filterPlan = searchParams.get('filterPlan') || 'all';
    const filterStatus = searchParams.get('filterStatus') || 'all';

    let filteredUsers = mockUsers;

    // Apply search filter
    if (searchTerm) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply plan filter
    if (filterPlan !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.plan === filterPlan);
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.status === filterStatus);
    }

    return NextResponse.json({
      users: filteredUsers,
      total: filteredUsers.length
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Em produção, aqui você criaria o usuário no banco de dados
    const newUser = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      totalRevenue: 0,
      leadsCount: 0,
      status: 'active'
    };

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}