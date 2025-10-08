// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Home,
//   ShoppingCart,
//   Tag,
//   Phone,
//   HelpCircle,
//   Truck,
//   RefreshCw,
//   CreditCard,
//   MapPin,
// } from "lucide-react";
// const Footer = () => {
//   const headingColor = "text-indigo-600"; // <-- Your website's heading color here

//   const linkSections = [
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", icon: <Home size={16} /> },
//         { name: "Best Sellers", icon: <ShoppingCart size={16} /> },
//         { name: "Offers & Deals", icon: <Tag size={16} /> },
//         { name: "Contact Us", icon: <Phone size={16} /> },
//         { name: "FAQs", icon: <HelpCircle size={16} /> },
//       ],
//     },
//     {
//       title: "Customer Service",
//       links: [
//         { name: "Delivery Information", icon: <Truck size={16} /> },
//         { name: "Return & Refund Policy", icon: <RefreshCw size={16} /> },
//         { name: "Payment Methods", icon: <CreditCard size={16} /> },
//         { name: "Track Your Order", icon: <MapPin size={16} /> },
//         { name: "Contact Support", icon: <Phone size={16} /> },
//       ],
//     },
//   ];

//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 text-gray-600">
//       <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
//         {/* Logo and About */}
//         <div className="max-w-md">
//           <h2 className={`font-semibold text-2xl md:text-3xl ${headingColor}`}>
//             Medikart
//           </h2>
//           <p className="text-sm md:text-base mt-2">
//             Medikart is India’s trusted medical equipment provider offering
//             products like CPAP machines, oxygen concentrators, and more for
//             home and clinical use. Ensuring care with quality and reliability.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap w-full md:w-[60%] gap-10">
//           {linkSections.map((section, index) => (
//             <div key={index}>
//               <h3 className={`font-semibold mb-4 ${headingColor}`}>
//                 {section.title}
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 {section.links.map((link, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-2 hover:text-indigo-600 transition"
//                   >
//                     {link.icon}
//                     <a href="#">{link.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Socials */}
//           <div>
//             <h3 className={`font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
//             <div className="flex gap-4 text-gray-500">
//               <a href="#" className="hover:text-indigo-600">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="hover:text-indigo-600">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="hover:text-indigo-600">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="hover:text-indigo-600">
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <p className="text-center py-4 text-sm text-gray-500">
//         © 2025 Medikart Healthcare. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
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
  const headingColor = "text-indigo-600"; // Your website's heading color

  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", icon: <Home size={16} />, href: "/" },
        { name: "Best Sellers", icon: <ShoppingCart size={16} />, href: "/" },
        { name: "Medicines & More", icon: <Tag size={16} />, href: "/medicines-and-more" },
        { name: "About", icon: <Info size={16} />, href: "/about" },
        // { name: "FAQs", icon: <HelpCircle size={16} />, href: "https://www.example.com/faqs" },
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

          {/* Socials */}
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

      {/* Bottom Line */}
      <p className="text-center py-4 text-sm text-gray-500">
        © 2025 Medikart Healthcare. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Home,
//   ShoppingCart,
//   Tag,
//   Phone,
//   HelpCircle,
//   Truck,
//   RefreshCw,
//   CreditCard,
//   MapPin,
//   Info
// } from "lucide-react";

// const Footer = () => {
//   const headingColor = "text-indigo-600"; // Your website's heading color

//   const linkSections = [
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", icon: <Home size={16} />, href: "/" },
//         { name: "Best Sellers", icon: <ShoppingCart size={16} />, href: "/" }, 
//         { name: "Medicines & More", icon: <Tag size={16} />, href: "/medicines-and-more" },
//         { name: "About", icon: <Info size={16} />, href: "/about" }// { name: "About", icon: <Phone size={16} />, href: "/about" },
//         // { name: "FAQs", icon: <HelpCircle size={16} />, href: "https://www.example.com/faqs" },
//       ],
//     },
//     {
//       title: "Customer Service",
//       links: [
//         { name: "Delivery Information", icon: <Truck size={16} />, href: "https://pharmeasy.in/help/delivery-43000349427" },
//         { name: "Offers", icon: <RefreshCw size={16} />, href: "https://pharmeasy.in/offers?src=header" },
//         { name: "Return Policy", icon: <CreditCard size={16} />, href: "https://pharmeasy.in/return-policy" },
//         { name: "Explore More", icon: <MapPin size={16} />, href: "https://pharmeasy.in/health-care/health-essentials-15393" },
//         { name: "Terms & Conditions", icon: <Phone size={16} />, href: "https://pharmeasy.in/legal/terms-and-conditions" },
//       ],
//     },
//   ];

//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 text-gray-600">
//       <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
//         {/* Logo and About */}
//         <div className="max-w-md">
//           <h2 className={`font-semibold text-2xl md:text-3xl ${headingColor}`}>
//             Medikart
//           </h2>
//           <p className="text-sm md:text-base mt-2">
//             Medikart is India’s trusted medical equipment provider offering
//             products like CPAP machines, oxygen concentrators, and more for
//             home and clinical use. Ensuring care with quality and reliability.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap w-full md:w-[60%] gap-10">
//           {linkSections.map((section, index) => (
//             <div key={index}>
//               <h3 className={`font-semibold mb-4 ${headingColor}`}>
//                 {section.title}
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 {section.links.map((link, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-2 hover:text-indigo-600 transition"
//                   >
//                     {link.icon}
//                     {link.href.startsWith("/") ? (
//                       <Link to={link.href}>{link.name}</Link>
//                     ) : (
//                       <a
//                         href={link.href}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         {link.name}
//                       </a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Socials */}
//           <div>
//             <h3 className={`font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
//             <div className="flex gap-4 text-gray-500">
//               <a href="https://www.instagram.com/pharmeasyapp/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://www.facebook.com/pharmeasy/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Facebook size={20} />
//               </a>
//               <a href="https://x.com/pharmeasyapp/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Twitter size={20} />
//               </a>
//               <a href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <p className="text-center py-4 text-sm text-gray-500">
//         © 2025 Medikart Healthcare. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Home,
//   ShoppingCart,
//   Tag,
//   Phone,
//   HelpCircle,
//   Truck,
//   RefreshCw,
//   CreditCard,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   const headingColor = "text-indigo-600"; // <-- Your website's heading color here

//   const linkSections = [
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", icon: <Home size={16} />, href: "/" },
//         { name: "Best Sellers", icon: <ShoppingCart size={16} />, href: "/" },
//         { name: "Medicines & More", icon: <Tag size={16} />, href: "/medicines-and-more" },
//         { name: "About", icon: <Phone size={16} />, href: "/about" },
//         { name: "FAQs", icon: <HelpCircle size={16} />, href: "https://www.example.com/faqs" },
//       ],
//     },
//     {
//       title: "Customer Service",
//       links: [
//         { name: "Delivery Information", icon: <Truck size={16} />, href: "https://www.example.com/delivery" },
//         { name: "Return & Refund Policy", icon: <RefreshCw size={16} />, href: "https://www.example.com/refund" },
//         { name: "Payment Methods", icon: <CreditCard size={16} />, href: "https://www.example.com/payment" },
//         { name: "Track Your Order", icon: <MapPin size={16} />, href: "https://www.example.com/track" },
//         { name: "Contact Support", icon: <Phone size={16} />, href: "/contact" },
//       ],
//     },
//   ];

//   return (
//     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 text-gray-600">
//       <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300">
//         {/* Logo and About */}
//         <div className="max-w-md">
//           <h2 className={`font-semibold text-2xl md:text-3xl ${headingColor}`}>
//             Medikart
//           </h2>
//           <p className="text-sm md:text-base mt-2">
//             Medikart is India’s trusted medical equipment provider offering
//             products like CPAP machines, oxygen concentrators, and more for
//             home and clinical use. Ensuring care with quality and reliability.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap w-full md:w-[60%] gap-10">
//           {linkSections.map((section, index) => (
//             <div key={index}>
//               <h3 className={`font-semibold mb-4 ${headingColor}`}>
//                 {section.title}
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 {section.links.map((link, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-2 hover:text-indigo-600 transition"
//                   >
//                     {link.icon}
//                     <a href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Socials */}
//           <div>
//             <h3 className={`font-semibold mb-4 ${headingColor}`}>Follow Us</h3>
//             <div className="flex gap-4 text-gray-500">
//               <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Facebook size={20} />
//               </a>
//               <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Twitter size={20} />
//               </a>
//               <a href="https://www.youtube.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <p className="text-center py-4 text-sm text-gray-500">
//         © 2025 Medikart Healthcare. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
