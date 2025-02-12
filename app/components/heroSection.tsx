import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@mui/material/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {}
      <div className="absolute inset-0 w-full h-full">
      <Image
  src="/assets/images/hero-image.png"
  alt="PachiPanda Challenge"
  fill
  style={{ objectFit: "cover" }}
  priority
/>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-16">
        {}
        <motion.div
          className="text-white max-w-lg text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-yellow-400">PachiPanda</span> Challenge
          </h1>
          <p className="mt-4 text-lg">
            Empowering Africa’s young eco-preneurs
          </p>
          <Button
            variant="contained"
            color="warning"
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            Read More
          </Button>
        </motion.div>

        {}
        <motion.div
          className="mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-white px-6 py-2 rounded-lg flex items-center shadow-lg">
            <Image
              src="/assets/images/pachipanda-logo.png" // Update this with actual logo path
              alt="PachiPanda Logo"
              width={100}
              height={50}
            />
            <span className="text-3xl font-bold text-gray-800 mx-4">|</span>
            <Image
              src="/assets/images/mtn-logo.png" // Update this with actual logo path
              alt="MTN Logo"
              width={100}
              height={50}
            />
          </div>
        </motion.div>
      </div>

      {}
      <div className="absolute bottom-10 flex space-x-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
};

export default HeroSection;
