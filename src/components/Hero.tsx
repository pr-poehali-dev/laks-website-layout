import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-primary/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Высокотехнологичные услуги в области монтажа и обработки
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            ООО "ЛАКС" предлагает передовые решения в области СМД-монтажа, выводного монтажа, 
            тампопечати и контактной сварки металла с гарантией качества и точности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;