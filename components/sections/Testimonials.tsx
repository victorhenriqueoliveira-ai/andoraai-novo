import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Dona de Clínica Estética',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'A AndoraAI não tem medo de me dizer a verdade. Em 2 meses, aumentei 180% as vendas só seguindo os relatórios da IA. Ela identificou que eu estava perdendo clientes por demora na resposta.',
    rating: 5,
    metrics: '180% ↗ vendas',
  },
  {
    name: 'Carlos Mendes',
    role: 'Personal Trainer',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'Antes eu trabalhava 12h por dia organizando leads. Agora a plataforma faz tudo automaticamente e eu foco só em treinar. A IA me disse que eu estava cobrando pouco - aumentei 40% e as vendas continuaram.',
    rating: 5,
    metrics: '12h → 4h trabalho',
  },
  {
    name: 'Ana Costa',
    role: 'Infoprodutora',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'O WhatsApp estava um caos. 300 leads perdidos por mês. A AndoraAI organizou tudo e criou automações que converteram 85% dos leads abandonados. Foi como ter uma equipe de vendas trabalhando 24h.',
    rating: 5,
    metrics: '85% recuperação',
  },
  {
    name: 'Pedro Santos',
    role: 'Dono de Pet Shop',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'A IA me alertou que eu estava focando nos produtos errados. Mudei o foco para os itens que ela recomendou e o faturamento subiu 200% em 3 meses. Agora tenho dados para tomar decisões certas.',
    rating: 5,
    metrics: '200% ↗ faturamento',
  },
  {
    name: 'Julia Oliveira',
    role: 'Dona de Academia',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'Estava com 60% de desistência nos primeiros 30 dias. A IA identificou exatamente onde estava o problema no meu processo de onboarding. Agora tenho 90% de retenção.',
    rating: 5,
    metrics: '90% retenção',
  },
  {
    name: 'Ricardo Lima',
    role: 'Consultor Digital',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    content: 'Gerencio 5 clientes diferentes. A AndoraAI me dá um relatório semanal de cada um, mostrando exatamente onde preciso intervir. Triplicou minha eficiência.',
    rating: 5,
    metrics: '3x eficiência',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados reais de quem{' '}
            <span className="gradient-text">ouviu a verdade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 2.000 empreendedores já transformaram seus negócios com a AndoraAI. 
            Veja o que eles têm a dizer sobre nossa IA sem filtros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-0 shadow-md"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                <div className="bg-primary/5 rounded-lg p-3 mb-4">
                  <div className="text-primary font-bold text-center">
                    {testimonial.metrics}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">2.000+</div>
              <div className="text-gray-600 text-sm">Clientes Ativos</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600 text-sm">Avaliação Média</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-gray-600 text-sm">Renovam o Plano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}