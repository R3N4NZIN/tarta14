import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Meu filho ficou encantado com as aventuras de Nick e agora pede para lermos juntos todos os dias. Ele aprende sobre a Bíblia de forma tão natural!",
    author: "Maria Silva",
  },
  {
    text: "Como professora da escola bíblica, este livro tem sido uma ferramenta incrível! As crianças adoram e os pais me agradecem!",
    author: "João Santos",
  },
  {
    text: "Comprei para minha filha de 6 anos e virou o livro favorito dela! Ela adora a história e aprende sobre a fé. A primeira aventura! Recomendo muito!",
    author: "Ana Paula",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="testimonials-title">
          O Que Os Pais Estão Dizendo
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Veja o que famílias como a sua têm a dizer sobre o livro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-border"
              data-testid={`card-testimonial-${index}`}
            >
              <StarRating />
              <p className="text-muted-foreground italic mb-4" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-sm" data-testid={`text-author-${index}`}>
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
