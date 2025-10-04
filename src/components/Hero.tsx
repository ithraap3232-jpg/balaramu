import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Free Delivery on Orders Over $30
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Delicious Food
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Order your favorite meals from LALA and enjoy restaurant-quality food delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Menu
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">4.8★</p>
                <p className="text-sm text-muted-foreground">2,500+ Reviews</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold">30min</p>
                <p className="text-sm text-muted-foreground">Avg Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Delicious food from LALA restaurant"
              className="relative w-full h-full object-cover rounded-3xl shadow-[var(--shadow-elevated)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
