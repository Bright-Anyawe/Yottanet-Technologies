"use client";

import React, { useState } from "react";
import { useSearchParams, useParams } from "next/navigation";

export default function CheckoutForm() {
  const searchParams = useSearchParams();
  const params = useParams();

  // Extract query params from the URL
  const rawQuantity = searchParams.get("quantity") || "1";
  const rawCost = searchParams.get("cost") || "0";
  const quantity = parseInt(rawQuantity, 10);
  const totalCost = parseFloat(rawCost);

  // We also have the product ID from the route
  const productId = params.id;

  // Local state for user input
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Right now, it just logs the data
    console.log("Form submitted:", {
      email,
      location,
      mobile,
      quantity,
      totalCost,
      productId,
    });

    // You can show a success message or navigate away
    alert("Order submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="mb-2">Product ID: {productId}</p>
        <p className="mb-2">Quantity: {quantity}</p>
        <p className="mb-6">Total Cost: ${totalCost.toFixed(2)}</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <input
              id="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block mb-1 font-medium">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
