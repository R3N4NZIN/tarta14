import { BookOpen, Palette, Lightbulb, Heart } from "lucide-react";

const chapters = [
  { icon: BookOpen, title: "Histórias bíblicas contadas de forma lúdica e divertida com viagens do protagonista Nick" },
  { icon: Palette, title: "Atividades de colorir que estimulam criatividade" },
  { icon: Lightbulb, title: "Exercícios de reflexão para aprendizado significativo" },
  { icon: Heart, title: "Momentos de leitura que aproximam pais e filhos" },
];

export default function ChaptersSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white border-t-4 border-ring/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="chapters-title">
          O Que Você Vai Encontrar?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Cada história e atividade foi pensada para ensinar valores cristãos enquanto mantém seu filho entretido.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors"
                  data-testid={`chapter-item-${index}`}
                >
                  <div className="w-12 h-12 bg-ring/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-ring" />
                  </div>
                  <h3 className="text-lg font-semibold" data-testid={`text-chapter-${index}`}>
                    {chapter.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
