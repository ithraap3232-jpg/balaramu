import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";
import type { FoodItem } from "./MenuSection";

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

const FoodCard = ({ item, onAddToCart }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{item.rating}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${item.price}</span>
          <span className="text-xs text-muted-foreground">{item.reviews} reviews</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full group/btn" 
          onClick={() => onAddToCart(item)}
        >
          <Plus className="h-4 w-4 mr-2 group-hover/btn:rotate-90 transition-transform" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
