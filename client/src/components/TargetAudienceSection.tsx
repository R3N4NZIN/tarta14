import { Sparkles, Clock, Shield } from "lucide-react";

const audiences = [
  {
    icon: Sparkles,
    title: "Crianças Engajadas",
    description: "Para crianças que adoram aprender brincando, com atividades que prendem a atenção e ensinam valores cristãos de forma divertida.",
  },
  {
    icon: Clock,
    title: "Pais que Querem Transformar o Tempo Livre",
    description: "Para pais preocupados com telas e distrações, que desejam momentos de aprendizado, fé e diversão com seus filhos.",
  },
  {
    icon: Shield,
    title: "Garantia de Aprendizado e Conexão",
    description: "Para quem quer garantir que cada atividade seja educativa, divertida e fortaleça vínculos entre pais e filhos.",
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-blue-50 border-t-4 border-ring/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="audience-title">
          Para Quem É Este Livro?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-border"
                data-testid={`card-audience-${index}`}
              >
                <div className="w-16 h-16 bg-ring/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-ring" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-audience-title-${index}`}>
                  {audience.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-audience-desc-${index}`}>
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
