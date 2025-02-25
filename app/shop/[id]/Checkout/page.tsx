"use client";

import React, { useState } from "react";
import { useSearchParams, useParams } from "next/navigation";

export default function CheckoutForm() {
  const searchParams = useSearchParams();
  const params = useParams();

  const rawQuantity = searchParams.get("quantity") || "1";
  const rawCost = searchParams.get("cost") || "0";
  const quantity = parseInt(rawQuantity, 10);
  const totalCost = parseFloat(rawCost);
  const productId = params.id;

  // Local state for user input
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gather the form + product data
    const formData = {
      email,
      location,
      mobile,
      quantity,
      totalCost,
      productId,
    };

    try {
      // POST to our API route
      const response = await fetch("/api/sendOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order submitted successfully! We’ll be in touch soon.");
        // Optionally, clear the form or navigate somewhere
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to send order."}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Request failed. Check the console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>

        <div className="mb-6 text-center">
          <p className="mb-2 text-gray-700">Product ID: {productId}</p>
          <p className="mb-2 text-gray-700">Quantity: {quantity}</p>
          <p className="text-gray-700">Total Cost: ${totalCost.toFixed(2)}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {}
          <div className="transition-transform transform hover:scale-105 duration-300">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {}
          <div className="transition-transform transform hover:scale-105 duration-300">
            <label htmlFor="location" className="block mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              id="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {}
          <div className="transition-transform transform hover:scale-105 duration-300">
            <label htmlFor="mobile" className="block mb-2 font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
