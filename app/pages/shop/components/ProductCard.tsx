
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-up">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="font-bold text-yottech-900">₵{price.toFixed(2)}</p>
            <Button
              size="sm"
              className="bg-yottech-900 hover:bg-yottech-800"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality will be implemented later
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
