"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import products from "@/app/components/data/products";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [quantity, setQuantity] = useState(1);

  // Handle invalid or missing product ID
  if (!rawId) {
    return <div>Invalid product ID.</div>;
  }

  const productId = parseInt(rawId, 10);
  const product = products.find((p) => p.id === productId);

  // Handle product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
      </div>
    );
  }

  const productStock = 10;
  const totalCost = product.price * quantity;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleBuyNow = () => {
    // Navigate to checkout form, passing quantity & cost in search params
    router.push(`/shop/${productId}/checkout?quantity=${quantity}&cost=${totalCost}`);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-800 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="mb-4 text-gray-600">In Stock: {productStock}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-4 text-lg">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                max={productStock}
                value={quantity}
                onChange={handleQuantityChange}
                className="border p-2 rounded w-20"
              />
            </div>
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
            >
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
