import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "./FoodCard";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import saladImg from "@/assets/salad.jpg";
import pastaImg from "@/assets/pasta.jpg";
import sushiImg from "@/assets/sushi.jpg";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const menuItems: FoodItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
    price: 14.99,
    image: pizzaImg,
    category: "pizza",
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    name: "Classic Burger",
    description: "Angus beef, lettuce, tomato, cheese, and special sauce",
    price: 12.99,
    image: burgerImg,
    category: "burgers",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Romaine lettuce, grilled chicken, parmesan, croutons",
    price: 10.99,
    image: saladImg,
    category: "salads",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description: "Creamy sauce with bacon, parmesan, and black pepper",
    price: 13.99,
    image: pastaImg,
    category: "pasta",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 5,
    name: "Sushi Platter",
    description: "Assorted fresh sushi rolls with salmon, tuna, and avocado",
    price: 18.99,
    image: sushiImg,
    category: "sushi",
    rating: 4.8,
    reviews: 198,
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 15.99,
    image: pizzaImg,
    category: "pizza",
    rating: 4.7,
    reviews: 267,
  },
];

interface MenuSectionProps {
  onAddToCart: (item: FoodItem) => void;
}

const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious selection of handcrafted meals, prepared fresh daily with the finest ingredients
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 h-auto">
            <TabsTrigger value="all" className="py-3">All</TabsTrigger>
            <TabsTrigger value="pizza" className="py-3">Pizza</TabsTrigger>
            <TabsTrigger value="burgers" className="py-3">Burgers</TabsTrigger>
            <TabsTrigger value="salads" className="py-3">Salads</TabsTrigger>
            <TabsTrigger value="pasta" className="py-3">Pasta</TabsTrigger>
            <TabsTrigger value="sushi" className="py-3">Sushi</TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
