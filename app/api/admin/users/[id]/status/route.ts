import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { status } = await request.json();
    
    // Em produção, atualizar status do usuário no banco de dados
    // await updateUserStatus(id, status);
    
    return NextResponse.json({
      id,
      status,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating user status:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}