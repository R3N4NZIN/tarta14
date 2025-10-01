import { Button } from "@/components/ui/button";
import heroImage from "@assets/Lucid_Origin_a_surreal_and_vibrant_cinematic_photo_of_an_illus_2_1759350090593.jpg";

export default function HeroSection() {
  const handleCTA = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ring mb-6" data-testid="hero-title">
            Transforme o Tempo do Seu Filho em Momentos de Fé
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="hero-subtitle">
            Cansado de ver seu filho preso ao celular? Transforme esse tempo em momentos de leitura divertida e cheia de valores cristãos.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <img 
            src={heroImage} 
            alt="Livro Infantil Cristão" 
            className="w-full max-w-lg rounded-2xl shadow-2xl"
            data-testid="hero-image"
          />
          
          <Button 
            onClick={handleCTA}
            size="lg"
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform drop-shadow-lg"
            data-testid="button-hero-cta"
          >
            Quero meu filho crescendo em fé
          </Button>
        </div>
      </div>
    </section>
  );
}
