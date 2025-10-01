export default function TopBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground py-3 text-center font-bold text-sm md:text-base sticky top-0 z-50" data-testid="top-banner">
      <span className="line-through mr-2">De R$ 97,00</span>
      <span className="text-lg md:text-xl">POR APENAS R$ 14,99</span>
    </div>
  );
}
