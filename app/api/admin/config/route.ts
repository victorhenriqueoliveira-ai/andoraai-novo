import { NextRequest, NextResponse } from 'next/server';

// Mock configuration - Em produção, isso viria do banco de dados
const mockConfig = {
  general: {
    siteName: 'AndoraAI',
    siteUrl: 'https://andoraai.com',
    adminEmail: 'admin@andoraai.com',
    supportEmail: 'suporte@andoraai.com',
    maintenanceMode: false,
    registrationEnabled: true,
    maxUsersPerPlan: {
      free: 1000,
      professional: 5000,
      enterprise: -1 // ilimitado
    }
  },
  email: {
    provider: 'smtp' as const,
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: 'noreply@andoraai.com',
    smtpPassword: '***hidden***',
    fromEmail: 'noreply@andoraai.com',
    fromName: 'AndoraAI'
  },
  whatsapp: {
    apiUrl: 'https://graph.facebook.com/v18.0',
    webhookUrl: 'https://api.andoraai.com/webhook/whatsapp',
    verifyToken: '***hidden***',
    accessToken: '***hidden***',
    phoneNumberId: '123456789',
    businessAccountId: '987654321'
  },
  ai: {
    provider: 'openai' as const,
    openaiApiKey: '***hidden***',
    model: 'gpt-4',
    maxTokens: 4000,
    temperature: 0.7,
    rateLimitPerUser: 100
  },
  security: {
    jwtSecret: '***hidden***',
    jwtExpiresIn: '24h',
    refreshTokenExpiresIn: '7d',
    passwordMinLength: 8,
    maxLoginAttempts: 5,
    lockoutDuration: 15,
    twoFactorEnabled: false
  },
  notifications: {
    emailNotifications: true,
    slackWebhook: '',
    discordWebhook: '',
    telegramBotToken: '',
    telegramChatId: ''
  }
};

export async function GET() {
  try {
    return NextResponse.json(mockConfig);
  } catch (error) {
    console.error('Error fetching config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Em produção, salvar configurações no banco de dados
    // await saveConfig(body);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}