
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
            <Link to="/products" className="text-yottech-900 hover:underline mt-4 inline-block">
              Back to Products
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 px-4">
        <div className="container mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center text-yottech-900 hover:text-yottech-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover animate-fade-up"
              />
            </div>

            <div className="animate-fade-up">
              <div className="mb-6">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h1 className="text-3xl font-bold text-yottech-900 mt-2">
                  {product.title}
                </h1>
                <p className="text-2xl font-bold text-yottech-900 mt-4">
                  ₵{product.price.toFixed(2)}
                </p>
              </div>

              <div className="prose prose-gray mb-8">
                <p className="text-gray-600">
                  Experience the ultimate in technology with our premium {product.title.toLowerCase()}. 
                  Designed for those who demand the best, this product combines cutting-edge features 
                  with elegant design.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 w-32">Availability:</span>
                    <span className="text-green-600">In Stock</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 w-32">Category:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 w-32">SKU:</span>
                    <span>YT-{product.id.toString().padStart(4, '0')}</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full md:w-auto bg-yottech-900 hover:bg-yottech-800"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
