import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Home,
  ShoppingCart,
  Tag,
  Phone,
  HelpCircle,
  Truck,
  RefreshCw,
  CreditCard,
  MapPin,
} from "lucide-react";
const Footer = () => {
  const headingColor = "text-indigo-600"; // <-- Your website's heading color here

  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", icon: <Home size={16} /> },
        { name: "Best Sellers", icon: <ShoppingCart size={16} /> },
        { name: "Offers & Deals", icon: <Tag size={16} /> },
        { name: "Contact Us", icon: <Phone size={16} /> },
        { name: "FAQs", icon: <HelpCircle size={16} /> },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Delivery Information", icon: <Truck size={16} /> },
        { name: "Return & Refund Policy", icon: <RefreshCw size={16} /> },
        { name: "Payment Methods", icon: <CreditCard size={16} /> },
        { name: "Track Your Order", icon: <MapPin size={16} /> },
        { name: "Contact Support", icon: <Phone size={16} /> },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 text-gray-600">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
        {/* Logo and About */}
        <div className="max-w-md">
          <h2 className={`font-semibold text-2xl md:text-3xl ${headingColor}`}>
            Medikart
          </h2>
          <p className="text-sm md:text-base mt-2">
            Medikart is India’s trusted medical equipment provider offering
            products like CPAP machines, oxygen concentrators, and more for
            home and clinical use. Ensuring care with quality and reliability.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap w-full md:w-[60%] gap-10">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className={`font-semibold mb-4 ${headingColor}`}>
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-indigo-600 transition"
                  >
                    {link.icon}
                    <a href="#">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div>
            <h3 className={`font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-indigo-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="text-center py-4 text-sm text-gray-500">
        © 2025 Medikart Healthcare. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;



