
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-yottech-100 text-yottech-900 rounded-full text-sm font-medium mb-4 animate-fade-down">
          Welcome to Yottech
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-yottech-900 mb-6 leading-tight animate-fade-up">
          Discover Premium Technology <br /> in Ghana
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
          Experience the future of shopping with our curated collection of
          high-quality tech products delivered right to your doorstep.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up">
          <Button
            size="lg"
            className="bg-yottech-900 hover:bg-yottech-800"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-yottech-900 text-yottech-900 hover:bg-yottech-50"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
