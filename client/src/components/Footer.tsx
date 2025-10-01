import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-white to-blue-50 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-ring fill-ring" />
          <h3 className="text-2xl font-bold text-ring" data-testid="footer-brand">
            Quero Ser Como Jesus
          </h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Transformando a infância através da história de Deus
        </p>
        <p className="text-muted-foreground text-xs mt-4" data-testid="footer-copyright">
          © 2025 Quero Ser Como Jesus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
