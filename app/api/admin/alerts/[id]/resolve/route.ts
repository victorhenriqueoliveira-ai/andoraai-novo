import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Em produção, marcar alerta como resolvido no banco de dados
    // await resolveAlert(id);
    
    return NextResponse.json({
      id,
      resolved: true,
      resolvedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error resolving alert:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}