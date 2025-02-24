"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Your One-Stop Tech Solution",
    subtitle: "Premium tech products and professional network services",
    bgColor: "from-blue-600 to-blue-800",
  },
  {
    title: "Professional Starlink Installation",
    subtitle: "Expert setup and configuration services",
    bgColor: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Network Solutions",
    subtitle: "Complete networking infrastructure for your business",
    bgColor: "from-purple-600 to-purple-800",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-gradient-to-r ${
              slide.bgColor
            } 
                ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="container mx-auto px-6 h-full flex items-center">
              <div
                className={`max-w-2xl transition-transform duration-1000 transform 
                  ${
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {slide.subtitle}
                </p>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
