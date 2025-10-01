import { ShoppingCart, Mail, BookOpen } from "lucide-react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ShoppingCart,
    title: "Você Compra o Livro",
    description: "Clique no botão e faça seu pedido de forma rápida e segura.",
  },
  {
    number: "2",
    icon: Mail,
    title: "Receba no E-mail",
    description: "Ele chega no seu e-mail em formato digital (PDF) instantaneamente.",
  },
  {
    number: "3",
    icon: BookOpen,
    title: "Leia e Aproveite",
    description: "Leia com seu filho(a) e viva momentos únicos em família.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="how-title">
          Como Funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-ring rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg" data-testid={`step-number-${index}`}>
                  {step.number}
                </div>
                
                <div className="w-12 h-12 bg-ring/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-ring" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 lg:-right-8 w-8 h-8 text-ring/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
