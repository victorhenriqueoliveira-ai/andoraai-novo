import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Em produção, buscar dados filtrados do banco
    const csvData = `Nome,Email,Empresa,Plano,Status,Receita,Leads,Data Cadastro
Maria Silva,maria@clinicabella.com,Clínica Estética Bella,Profissional,Ativo,R$ 15.000,247,15/08/2024
João Santos,joao@fitnesspro.com,Academia Fitness Pro,Enterprise,Ativo,R$ 28.000,189,20/07/2024
Ana Costa,ana@amigofiel.com,Pet Shop Amigo Fiel,Profissional,Ativo,R$ 8.500,67,18/10/2024
Carlos Mendes,carlos@consultoriacm.com,Consultoria Digital CM,Gratuito,Inativo,R$ 0,23,10/09/2024`;

    return new NextResponse(csvData, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="usuarios.csv"'
      }
    });
  } catch (error) {
    console.error('Error exporting users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}