import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  User,
  MapPin
} from 'lucide-react';

const stages = [
  { name: 'Novos Leads', count: 23, color: 'bg-blue-500' },
  { name: 'Contato Feito', count: 18, color: 'bg-yellow-500' },
  { name: 'Proposta Enviada', count: 12, color: 'bg-purple-500' },
  { name: 'Negociação', count: 8, color: 'bg-orange-500' },
  { name: 'Fechado', count: 15, color: 'bg-green-500' },
];

const leads = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria@email.com',
    phone: '(11) 99999-9999',
    source: 'Instagram',
    value: 'R$ 2.500',
    stage: 0,
    lastContact: '2 horas atrás',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    priority: 'high',
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao@email.com',
    phone: '(11) 88888-8888',
    source: 'WhatsApp',
    value: 'R$ 1.800',
    stage: 1,
    lastContact: '1 dia atrás',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    priority: 'medium',
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana@email.com',
    phone: '(11) 77777-7777',
    source: 'Site',
    value: 'R$ 3.200',
    stage: 2,
    lastContact: '3 horas atrás',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    priority: 'high',
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    email: 'carlos@email.com',
    phone: '(11) 66666-6666',
    source: 'Indicação',
    value: 'R$ 4.500',
    stage: 3,
    lastContact: '5 horas atrás',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    priority: 'high',
  },
];

const getLeadsByStage = (stageIndex: number) => {
  return leads.filter(lead => lead.stage === stageIndex);
};

export default function CrmPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CRM - Pipeline de Vendas</h1>
            <p className="text-gray-600 mt-1">Gerencie seus leads do primeiro contato ao fechamento</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Novo Lead
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar leads..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              Este Mês
            </Button>
          </div>
        </div>

        {/* Pipeline Board */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max pb-4">
            {stages.map((stage, stageIndex) => (
              <div key={stageIndex} className="w-80 flex-shrink-0">
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                        <span>{stage.name}</span>
                      </CardTitle>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
                        {stage.count}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {getLeadsByStage(stageIndex).map((lead) => (
                      <div key={lead.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        {/* Priority Indicator */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={lead.avatar} 
                              alt={lead.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                              <p className="text-sm text-gray-500">{lead.source}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              lead.priority === 'high' ? 'bg-red-500' :
                              lead.priority === 'medium' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}></div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Lead Info */}
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Phone className="h-3 w-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>

                        {/* Value and Last Contact */}
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{lead.value}</span>
                          <span className="text-xs text-gray-500">{lead.lastContact}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-blue-600">
                              <Phone className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-green-600">
                              <MessageSquare className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-purple-600">
                              <Calendar className="h-4 w-4" />
                            </button>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            Ver Perfil
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* Add New Lead in Stage */}
                    <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
                      <Plus className="h-5 w-5 mx-auto mb-1" />
                      <span className="text-sm">Adicionar Lead</span>
                    </button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">76</div>
              <div className="text-sm text-gray-600">Total de Leads</div>
              <div className="text-xs text-green-600 mt-1">+12% este mês</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">18.5%</div>
              <div className="text-sm text-gray-600">Taxa de Conversão</div>
              <div className="text-xs text-red-600 mt-1">-2% este mês</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">R$ 47.5k</div>
              <div className="text-sm text-gray-600">Pipeline Total</div>
              <div className="text-xs text-green-600 mt-1">+8% este mês</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">5.2 dias</div>
              <div className="text-sm text-gray-600">Tempo Médio</div>
              <div className="text-xs text-green-600 mt-1">-1.2 dias</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}