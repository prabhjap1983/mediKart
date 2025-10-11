import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Medikart?",
    answer:
      "Medikart is a healthcare platform offering medical equipment like CPAP machines, oxygen concentrators, and health support solutions trusted by hospitals and families across India.",
  },
  {
    question: "Is Medikart made in India?",
    answer:
      "Yes, Medikart proudly supports Make in India by sourcing and supporting local manufacturers and partners.",
  },
  {
    question: "How can I place an order on Medikart?",
    answer:
      "You can place an order through our website using the product page. Add items to your cart and proceed to secure checkout.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our customer support team is available 24/7 via call, email, and live chat to help with any queries or issues.",
  },
  {
    question: "Are your products covered under warranty?",
    answer:
      "Yes, most of our medical devices come with a standard manufacturer's warranty. Please check the product page for specific details.",
  },
  {
    question: "Do you provide doorstep delivery?",
    answer:
      "Absolutely! We provide fast and safe doorstep delivery across India with real-time order tracking.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a return and exchange policy. Kindly refer to our return policy page or contact our support for help.",
  },
];


const gradients = [
  "bg-gradient-to-r from-blue-50 to-blue-100",
  "bg-gradient-to-r from-rose-50 to-rose-100",
  "bg-gradient-to-r from-indigo-50 to-indigo-100",
  "bg-gradient-to-r from-emerald-50 to-emerald-100",
  "bg-gradient-to-r from-yellow-50 to-yellow-100",
  "bg-gradient-to-r from-red-50 to-red-100",
  "bg-gradient-to-r from-teal-50 to-teal-100",
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md hover:shadow-xl transition duration-300 backdrop-blur-sm bg-opacity-30 ${gradients[index % gradients.length]}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-left text-gray-800"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-800" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-800" />
                )}
              </button>
              <div
                className={`px-6 text-gray-700 text-base transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[300px] py-3" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
