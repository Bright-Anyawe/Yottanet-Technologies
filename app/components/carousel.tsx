"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Carousel = () => {
  const products = [
    {
      id: 1,
      src: "/starlink-kit.jpg",
      name: "Starlink Kit",
      description: "High-speed satellite internet kit.",
    },
    {
      id: 2,
      src: "/starlink-dish.jpg",
      name: "Starlink Dish",
      description: "Compact and easy-to-install satellite dish.",
    },
    {
      id: 3,
      src: "/starlink-router.jpg",
      name: "Starlink Router",
      description: "Advanced router for seamless connectivity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={products[currentIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <Image
            src={products[currentIndex].src}
            alt={products[currentIndex].name}
            width={800}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {products[currentIndex].name}
            </h2>
            <p className="text-gray-600">{products[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-800 hover:text-gray-600"
      >
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-800 hover:text-gray-600"
      >
        <ArrowRightCircleIcon className="w-10 h-10" />
      </button>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index
                ? "bg-yellow-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
