"use client"; // Only if you're using Next.js 13+ App Router and need client-side rendering

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
// import TechProductSales from "@/app/components/techProject";
import Shop from "@/app/shop/page";
import MtnProducts from "@/app/components/mtnService";
import Testimonial from "@/app/components/testimonial";
import FAQ from "@/app/components/faq";
import Footer from "@/app/components/footer";

const services = [
  {
    title: "Installation Services",
    description:
      "We provide top-notch installation services including CCTV and Dish Mounting.",
    image: "/path/to/cctv-image.jpg", // Replace with actual path in your public folder
  },
  {
    title: "Network Optimization",
    description:
      "Optimize your network with our advanced VOIP solutions.",
    image: "/path/to/voip-image.jpg", // Replace with actual path in your public folder
  },
];

const ServicePage = () => {
  return (
    <>
      {}
      <Header />

      {}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/path/to/background-video.mp4" // Replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10" />

        {}
        <div className="relative flex flex-col justify-center items-center h-full text-center px-4 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl">
            At Yottanet Technologies, we provide a wide range of networking solutions
            and tech products designed to meet the needs of businesses and individuals.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Network Engineering Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title} // Use something unique, like `service.title` instead of `index`
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {}
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0} // Example: prioritize first image
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Shop />
      </section>
      <section>
        <MtnProducts/>
      </section>
      <section>
        <Testimonial/>
         </section>
         <section>
        <FAQ/>
         </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ServicePage;
