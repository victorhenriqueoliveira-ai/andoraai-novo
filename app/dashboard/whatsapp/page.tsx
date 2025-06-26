'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Send, 
  Search, 
  Filter, 
  MoreVertical,
  Phone,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Bot,
  Users
} from 'lucide-react';

const conversations = [
  {
    id: 1,
    contact: 'Maria Silva',
    phone: '+55 11 99999-9999',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Oi! Gostaria de saber mais sobre os tratamentos.',
    timestamp: '14:32',
    unread: 3,
    status: 'active',
    stage: 'Novo Lead',
    source: 'Instagram',
  },
  {
    id: 2,
    contact: 'João Santos',
    phone: '+55 11 88888-8888',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Perfeito! Quando podemos agendar?',
    timestamp: '13:45',
    unread: 0,
    status: 'responded',
    stage: 'Interessado',
    source: 'Site',
  },
  {
    id: 3,
    contact: 'Ana Costa',
    phone: '+55 11 77777-7777',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Obrigada pelas informações!',
    timestamp: '12:20',
    unread: 1,
    status: 'pending',
    stage: 'Proposta Enviada',
    source: 'WhatsApp',
  },
];

const messages = [
  {
    id: 1,
    sender: 'contact',
    content: 'Oi! Gostaria de saber mais sobre os tratamentos.',
    timestamp: '14:30',
    type: 'text',
  },
  {
    id: 2,
    sender: 'bot',
    content: 'Olá Maria! 😊 Que bom ter você aqui! Temos diversos tratamentos disponíveis. Qual área você gostaria de melhorar?',
    timestamp: '14:31',
    type: 'text',
    automated: true,
  },
  {
    id: 3,
    sender: 'contact',
    content: 'Estou interessada em harmonização facial.',
    timestamp: '14:32',
    type: 'text',
  },
];

const automationRules = [
  {
    id: 1,
    name: 'Boas-vindas Novos Leads',
    trigger: 'Primeira mensagem',
    action: 'Enviar mensagem de boas-vindas',
    status: 'active',
    responses: 247,
  },
  {
    id: 2,
    name: 'Follow-up 24h',
    trigger: 'Sem resposta por 24h',
    action: 'Enviar lembrete gentil',
    status: 'active',
    responses: 89,
  },
  {
    id: 3,
    name: 'Qualificação de Lead',
    trigger: 'Interesse demonstrado',
    action: 'Fazer perguntas qualificadoras',
    status: 'paused',
    responses: 156,
  },
];

export default function WhatsAppPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('conversations');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Aqui seria a lógica para enviar mensagem
      console.log('Enviando mensagem:', newMessage);
      setNewMessage('');
    }
  };

  const toggleAutomation = (ruleId: number) => {
    // Aqui seria a lógica para ativar/desativar automação
    console.log('Toggling automation:', ruleId);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">WhatsApp Business</h1>
            <p className="text-gray-600 mt-1">Gerencie conversas e automatize respostas</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurar API
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <MessageSquare className="h-4 w-4 mr-2" />
              Nova Conversa
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">1.2k</div>
              <div className="text-sm text-gray-600">Mensagens Hoje</div>
              <div className="text-xs text-green-600 mt-1">+23% vs ontem</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">89</div>
              <div className="text-sm text-gray-600">Conversas Ativas</div>
              <div className="text-xs text-blue-600 mt-1">12 aguardando</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Bot className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">78%</div>
              <div className="text-sm text-gray-600">Automação</div>
              <div className="text-xs text-purple-600 mt-1">492 respostas auto</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">2.3min</div>
              <div className="text-sm text-gray-600">Tempo Resposta</div>
              <div className="text-xs text-green-600 mt-1">-45% vs semana</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('conversations')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'conversations'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Conversas
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'automation'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Automação
            </button>
          </nav>
        </div>

        {activeTab === 'conversations' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <Card className="lg:col-span-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Conversas</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Buscar conversas..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[450px] overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                        selectedConversation.id === conversation.id
                          ? 'border-primary bg-primary/5'
                          : 'border-transparent'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <img 
                            src={conversation.avatar} 
                            alt={conversation.contact}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            conversation.status === 'active' ? 'bg-green-500' :
                            conversation.status === 'responded' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900 truncate">{conversation.contact}</p>
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="secondary" className="text-xs">{conversation.stage}</Badge>
                            {conversation.unread > 0 && (
                              <span className="bg-primary text-white text-xs rounded-full px-2 py-1">
                                {conversation.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2">
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={selectedConversation.avatar} 
                      alt={selectedConversation.contact}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedConversation.contact}</h3>
                      <p className="text-sm text-gray-500">{selectedConversation.phone}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <User className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'contact' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'contact'
                          ? 'bg-gray-100 text-gray-900'
                          : message.automated
                          ? 'bg-purple-100 text-purple-900 border border-purple-200'
                          : 'bg-primary text-white'
                      }`}>
                        {message.automated && (
                          <div className="flex items-center space-x-1 mb-1">
                            <Bot className="h-3 w-3" />
                            <span className="text-xs font-medium">Automático</span>
                          </div>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'contact' ? 'text-gray-500' : 'text-white/70'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Digite sua mensagem..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[40px] max-h-[120px]"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Regras de Automação</CardTitle>
                  <Button size="sm">
                    <Zap className="h-4 w-4 mr-2" />
                    Nova Regra
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automationRules.map((rule) => (
                    <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          <strong>Gatilho:</strong> {rule.trigger}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Ação:</strong> {rule.action}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {rule.responses} respostas enviadas
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={rule.status === 'active' ? 'default' : 'secondary'}>
                          {rule.status === 'active' ? 'Ativo' : 'Pausado'}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleAutomation(rule.id)}
                        >
                          {rule.status === 'active' ? 'Pausar' : 'Ativar'}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}