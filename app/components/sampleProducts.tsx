import React from "react";
import Link from "next/link";
import Image from "next/image";
import products from "./data/products";

const ProductCard: React.FC = () => {
  const sampleProducts = products.slice(0, 4);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sampleProducts.map((product) => (
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
            href={`/products/${product.id}`}
            className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
