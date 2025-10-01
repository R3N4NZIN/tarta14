import { Book, Sparkles, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Book,
    title: "Histórias Bíblicas",
    description: "Passagens bíblicas contadas de forma lúdica e envolvente, que ajudam a criança a compreender a Palavra de Deus enquanto se diverte.",
  },
  {
    icon: Sparkles,
    title: "Passatempos Bíblicos",
    description: "Atividades interativas como jogos, desafios e exercícios que ensinam princípios cristãos de maneira divertida.",
  },
  {
    icon: Heart,
    title: "Colorir e Criar",
    description: "Desenhos e atividades de colorir que desenvolvem a criatividade e reforçam valores cristãos.",
  },
  {
    icon: Users,
    title: "Reflexão e Aprendizado",
    description: "Exercícios que estimulam reflexão sobre cada história, tornando a leitura mais significativa e educativa.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white border-t-4 border-ring/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="benefits-title">
          Por Que Este Livro Vai Transformar o Tempo do Seu Filho?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Mais de 100 atividades bíblicas que ensinam fé, valores e diversão, tornando cada momento de leitura especial em família.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-14 h-14 bg-ring/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-ring" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-benefit-desc-${index}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
