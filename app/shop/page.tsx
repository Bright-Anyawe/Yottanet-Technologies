import React from "react";
import products from "@/app/components/data/products";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-yottech-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our carefully selected range of premium technology products that combine innovation with reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-md">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
                  <Link 
                    href={`/shop/${product.id}`} 
                    className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;
