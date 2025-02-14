
"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const defaultFAQs = [
  {
    question: "What services does Yottanet Technologies offer?",
    answer:
      "We provide networking engineering services, tech product sales, Starlink installation, MTN product sales, and more.",
  },
  {
    question: "How can I purchase products online?",
    answer:
      "You can explore our products on our website and purchase them directly through our secure online store.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we offer installation services for Starlink kits, CCTV, Dish mounting, and other network equipment.",
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(defaultFAQs);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== "") {
      const newFAQ = {
        question: newQuestion,
        answer: "Thank you for your question! We will get back to you shortly.",
      };
      setFaqs([...faqs, newFAQ]);
      setNewQuestion("");
    }
  };

  return (
    <>
      {}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {selectedIndex === index ? (
                  <FiMinus className="text-gray-600" />
                ) : (
                  <FiPlus className="text-gray-600" />
                )}
              </div>

              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {}
        {}
      </section>
    </>
  );
};

export default FAQSection;
