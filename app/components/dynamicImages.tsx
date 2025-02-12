

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DynamicImages = () => {
  const images = [
    "/starlink-kit.jpg",
    "/starlink-dish.jpg",
    "/starlink-router.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <Image
        src={images[currentIndex]}
        alt="Starlink Product"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default DynamicImages;
