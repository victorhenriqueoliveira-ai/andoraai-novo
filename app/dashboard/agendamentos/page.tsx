'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  User,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  MapPin
} from 'lucide-react';

const appointments = [
  {
    id: 1,
    client: 'Maria Silva',
    service: 'Harmonização Facial',
    date: '2024-10-25',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    phone: '+55 11 99999-9999',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    notes: 'Primeira vez, explicar procedimento',
    value: 'R$ 800',
    location: 'Sala 1',
  },
  {
    id: 2,
    client: 'João Santos',
    service: 'Consulta Nutricional',
    date: '2024-10-25',
    time: '15:30',
    duration: 45,
    status: 'pending',
    phone: '+55 11 88888-8888',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    notes: 'Retorno - ajustar dieta',
    value: 'R$ 150',
    location: 'Sala 2',
  },
  {
    id: 3,
    client: 'Ana Costa',
    service: 'Massagem Relaxante',
    date: '2024-10-25',
    time: '16:00',
    duration: 90,
    status: 'confirmed',
    phone: '+55 11 77777-7777',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    notes: 'Dores nas costas',
    value: 'R$ 200',
    location: 'Sala 3',
  },
  {
    id: 4,
    client: 'Carlos Mendes',
    service: 'Personal Training',
    date: '2024-10-26',
    time: '08:00',
    duration: 60,
    status: 'cancelled',
    phone: '+55 11 66666-6666',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    notes: 'Cancelado pelo cliente',
    value: 'R$ 100',
    location: 'Academia',
  },
];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
];

export default function AgendamentosPage() {
  const [selectedDate, setSelectedDate] = useState('2024-10-25');
  const [viewMode, setViewMode] = useState('day');
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const confirmAppointment = (id: number) => {
    console.log('Confirmando agendamento:', id);
    // Aqui seria a lógica para confirmar o agendamento
  };

  const cancelAppointment = (id: number) => {
    console.log('Cancelando agendamento:', id);
    // Aqui seria a lógica para cancelar o agendamento
  };

  const sendReminder = (id: number) => {
    console.log('Enviando lembrete:', id);
    // Aqui seria a lógica para enviar lembrete via WhatsApp
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Agendamentos</h1>
            <p className="text-gray-600 mt-1">Gerencie consultas e envie lembretes automáticos</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Sincronizar Calendário
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setShowNewAppointment(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Hoje</div>
              <div className="text-xs text-blue-600 mt-1">3 pendentes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-sm text-gray-600">Taxa Confirmação</div>
              <div className="text-xs text-green-600 mt-1">+5% vs mês anterior</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">2.3%</div>
              <div className="text-sm text-gray-600">No-show</div>
              <div className="text-xs text-green-600 mt-1">-1.2% vs mês anterior</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
              <div className="text-sm text-gray-600">Lembretes Enviados</div>
              <div className="text-xs text-green-600 mt-1">Automático</div>
            </CardContent>
          </Card>
        </div>

        {/* View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'day' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('day')}
            >
              Dia
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('week')}
            >
              Semana
            </Button>
            <Button
              variant={viewMode === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('month')}
            >
              Mês
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar agendamentos..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Calendar View */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Time Slots */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Horários Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {timeSlots.map((time) => {
                    const hasAppointment = appointments.some(
                      apt => apt.date === selectedDate && apt.time === time
                    );
                    return (
                      <div
                        key={time}
                        className={`p-2 rounded text-center text-sm cursor-pointer transition-colors ${
                          hasAppointment
                            ? 'bg-primary text-white'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                        onClick={() => !hasAppointment && setShowNewAppointment(true)}
                      >
                        {time}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Agendamentos - {new Date(selectedDate).toLocaleDateString('pt-BR')}
                  </CardTitle>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-auto"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments
                    .filter(apt => apt.date === selectedDate)
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={appointment.avatar} 
                            alt={appointment.client}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{appointment.client}</h4>
                              <Badge className={getStatusColor(appointment.status)}>
                                <div className="flex items-center space-x-1">
                                  {getStatusIcon(appointment.status)}
                                  <span className="capitalize">{appointment.status}</span>
                                </div>
                              </Badge>
                            </div>
                            <p className="text-gray-600 font-medium">{appointment.service}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{appointment.time} ({appointment.duration}min)</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{appointment.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <span className="font-medium text-primary">{appointment.value}</span>
                              </div>
                            </div>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600 mt-2 italic">
                                Obs: {appointment.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {appointment.status === 'pending' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => confirmAppointment(appointment.id)}
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Confirmar
                            </Button>
                          )}
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => sendReminder(appointment.id)}
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Lembrete
                          </Button>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => cancelAppointment(appointment.id)}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Cancelar
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {appointments.filter(apt => apt.date === selectedDate).length === 0 && (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Nenhum agendamento para esta data</p>
                      <Button 
                        className="mt-4" 
                        onClick={() => setShowNewAppointment(true)}
                      >
                        Criar Primeiro Agendamento
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Automation Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Automações de Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Confirmação Automática</h4>
                </div>
                <p className="text-blue-800 text-sm mb-3">
                  Envia confirmação via WhatsApp assim que o agendamento é criado
                </p>
                <Badge className="bg-green-100 text-green-800">Ativo</Badge>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-900">Lembrete 24h</h4>
                </div>
                <p className="text-yellow-800 text-sm mb-3">
                  Lembra o cliente 24h antes do agendamento
                </p>
                <Badge className="bg-green-100 text-green-800">Ativo</Badge>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">Follow-up Pós-Consulta</h4>
                </div>
                <p className="text-purple-800 text-sm mb-3">
                  Pergunta sobre satisfação 2h após o atendimento
                </p>
                <Badge className="bg-green-100 text-green-800">Ativo</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}