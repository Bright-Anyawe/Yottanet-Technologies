

import React from "react";
import Header from "@/components/Header";
import H
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/app/components/data/products";



const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-yottech-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our carefully selected range of premium technology products
                that combine innovation with reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;

