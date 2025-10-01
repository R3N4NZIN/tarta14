import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O pagamento é único?",
    answer: "Sim! Você paga apenas uma vez e tem acesso ao livro para sempre. Não há mensalidades ou taxas adicionais.",
  },
  {
    question: "Como recebo o livro?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente o livro em formato PDF no seu e-mail. Você pode ler em qualquer dispositivo ou imprimir.",
  },
  {
    question: "Para quais idades é indicado?",
    answer: "O livro é perfeito para crianças de 4 a 10 anos. As histórias são adaptadas para serem compreensíveis e interessantes para essa faixa etária.",
  },
  {
    question: "Posso imprimir o livro?",
    answer: "Sim! Você pode imprimir o PDF quantas vezes quiser para ler com seus filhos ou usar em atividades educativas.",
  },
  {
    question: "Há garantia de satisfação?",
    answer: "Sim! Oferecemos garantia de 7 dias. Se você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="faq-title">
          Dúvidas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-border rounded-lg px-6"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
