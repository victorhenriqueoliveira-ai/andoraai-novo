'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular registro e redirecionar para dashboard
    window.location.href = '/dashboard';
  };

  const plans = [
    {
      id: 'free',
      name: 'Gratuito',
      price: 'R$ 0',
      period: 'para sempre',
      features: ['50 leads', 'WhatsApp básico', 'Relatórios mensais'],
    },
    {
      id: 'trial',
      name: 'Teste Profissional',
      price: 'R$ 0',
      period: '7 dias grátis',
      features: ['Leads ilimitados', 'Recursos completos', 'Suporte prioritário'],
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
            <Brain className="h-10 w-10" />
            <span className="text-2xl font-bold">AndoraAI</span>
          </Link>
        </div>

        <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Comece sua transformação hoje
            </CardTitle>
            <p className="text-gray-600">
              Crie sua conta e descubra o que a IA tem a dizer sobre seu negócio
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Plan Selection */}
            <div className="space-y-3">
              <Label className="text-gray-700 font-medium">Escolha seu plano</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${plan.highlight ? 'ring-2 ring-secondary/50' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-secondary text-primary px-2 py-1 rounded text-xs font-medium">
                          Recomendado
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPlan === plan.id 
                          ? 'border-primary bg-primary' 
                          : 'border-gray-300'
                      }`}>
                        {selectedPlan === plan.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{plan.name}</div>
                        <div className="text-sm text-gray-600">
                          {plan.price} <span className="text-xs">/{plan.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="mt-3 space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <label className="flex items-start space-x-3 text-sm">
                <input 
                  type="checkbox" 
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                  className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary" 
                  required
                />
                <span className="text-gray-600 leading-relaxed">
                  Eu concordo com os{' '}
                  <Link href="/termos" className="text-primary hover:text-primary/80">
                    Termos de Uso
                  </Link>{' '}
                  e{' '}
                  <Link href="/privacidade" className="text-primary hover:text-primary/80">
                    Política de Privacidade
                  </Link>
                </span>
              </label>

              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium"
                disabled={!formData.acceptTerms}
              >
                {selectedPlan === 'trial' ? 'Começar Teste Gratuito' : 'Criar Conta Grátis'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou registre-se com</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-12 border-gray-200 hover:bg-gray-50">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Já tem uma conta? </span>
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                Faça login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}