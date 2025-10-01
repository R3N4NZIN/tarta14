import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, CreditCard, Star } from "lucide-react";

export default function PricingSection() {
  const handlePurchaseRegular = () => {
    console.log('Regular purchase clicked');
  };

  const handlePurchaseSpecial = () => {
    console.log('Special purchase clicked');
  };

  return (
    <section id="pricing-section" className="py-20 md:py-28 px-4 bg-gradient-to-b from-blue-50 to-white border-t-4 border-ring/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-chart-4 text-black px-6 py-2 rounded-full font-bold text-sm mb-6">
            OFERTA ESPECIAL - POR TEMPO LIMITADO!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="pricing-title">
            Garanta Agora com Desconto Especial!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a melhor opção para sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Caixa 1 - Oferta Regular */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid="card-pricing-regular">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-pricing-regular-title">
              Oferta Regular
            </h3>
            
            <div className="mb-6">
              <p className="text-4xl font-bold text-chart-4 mb-2" data-testid="text-price-regular">
                R$ 29,90
              </p>
              <p className="text-muted-foreground text-sm">
                Acesso completo ao livro digital "Quero Ser Como Jesus"
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>Mais de 100 atividades bíblicas</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>Histórias lúdicas e envolventes</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>Atividades de colorir e criar</span>
              </li>
            </ul>

            <Button 
              onClick={handlePurchaseRegular}
              size="lg"
              variant="outline"
              className="w-full text-lg font-semibold"
              data-testid="button-purchase-regular"
            >
              Quero esta oferta
            </Button>
          </div>

          {/* Caixa 2 - Oferta Especial com Bônus */}
          <div className="bg-white rounded-xl p-8 shadow-2xl border-4 border-chart-4 relative hover:shadow-3xl transition-all transform hover:scale-105" data-testid="card-pricing-special">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-chart-3 text-white px-4 py-1 text-sm font-bold">
              Mais Popular
            </Badge>
            
            <h3 className="text-2xl font-bold mb-4 text-chart-4" data-testid="text-pricing-special-title">
              Oferta Especial + Bônus Exclusivo
            </h3>
            
            <div className="mb-6">
              <p className="text-5xl font-bold text-chart-4 mb-2" data-testid="text-price-special">
                R$ 39,90
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Livro digital + Bônus: Atividades Extras de Colorir com Valores Cristãos
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span className="font-semibold">TUDO da oferta regular +</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>50+ atividades extras de colorir</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>Guia para pais com dicas de aplicação</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Star className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <span>Certificado de conclusão personalizável</span>
              </li>
            </ul>

            <div className="bg-chart-4/10 rounded-lg p-3 mb-6">
              <p className="text-sm font-semibold text-center">
                ⏰ Oferta válida somente hoje!
              </p>
            </div>

            <Button 
              onClick={handlePurchaseSpecial}
              size="lg"
              className="w-full bg-chart-3 hover:bg-chart-3 text-white text-lg font-bold shadow-xl"
              data-testid="button-purchase-special"
            >
              Quero a oferta completa e bônus agora
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              ⭐ Escolhido por 9 em cada 10 pais
            </p>
          </div>
        </div>

        {/* Garantia e Segurança */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 mb-8 shadow-lg inline-block max-w-lg">
            <h3 className="font-bold text-lg mb-2">Garantia de 7 Dias</h3>
            <p className="text-muted-foreground text-sm">
              Se você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Privacidade Protegida</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Pagamento Único</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
