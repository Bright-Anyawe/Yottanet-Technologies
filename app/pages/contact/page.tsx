"use client";

import React from "react";
import Header from "@/app/components/header";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      {}
      <Header />

      {}
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:py-16 lg:px-32 bg-gray-100">
        
        {}
        <motion.div
          className="flex flex-col lg:w-1/2 w-full space-y-6 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you! Reach out to us for any inquiries,
            support, or collaboration opportunities.
          </p>

          <form className="space-y-4">
            {}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message here..."
                rows={4}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full p-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {}
        <motion.div
          className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/contact-yotech.jpg"
            alt="Contact Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
