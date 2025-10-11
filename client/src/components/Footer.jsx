import React from "react";
import { Link } from "react-router-dom";
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
  Info,
  Box,
  FileText
} from "lucide-react";

const Footer = () => {
  const headingColor = "text-indigo-600"; 

  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", icon: <Home size={16} />, href: "/" },
        { name: "Best Sellers", icon: <ShoppingCart size={16} />, href: "/" },
        { name: "Medicines & More", icon: <Tag size={16} />, href: "/medicines-and-more" },
        { name: "About", icon: <Info size={16} />, href: "/about" },
        
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Delivery Information", icon: <Truck size={16} />, href: "https://pharmeasy.in/help/delivery-43000349427" },
        { name: "Offers", icon: <Tag size={16} />, href: "https://pharmeasy.in/offers?src=header" },
        { name: "Return Policy", icon: <RefreshCw size={16} />, href: "https://pharmeasy.in/return-policy" },
        { name: "Explore More", icon: <Box size={16} />, href: "https://pharmeasy.in/health-care/health-essentials-15393" },
        { name: "Terms & Conditions", icon: <FileText size={16} />, href: "https://pharmeasy.in/legal/terms-and-conditions" },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 text-gray-600">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
        
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
                    {link.href.startsWith("/") ? (
                      <Link to={link.href}>{link.name}</Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          
          <div>
            <h3 className={`font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
            <div className="flex gap-4 text-gray-500">
              <a href="https://www.instagram.com/pharmeasyapp/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/pharmeasy/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/pharmeasyapp/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <p className="text-center py-4 text-sm text-gray-500">
        © 2025 Medikart Healthcare. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
