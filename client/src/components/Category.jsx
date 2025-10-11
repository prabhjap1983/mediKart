import React from "react";
import { useNavigate } from "react-router-dom";
import medicines from "../assets/medicines.jpg";
import wellness from "../assets/wellness.jpeg";
import personal_car from "../assets/personal_car.jpeg";
import health_device from "../assets/health_device.jpeg";
import baby_care from "../assets/baby_care.jpg";
import skin_care from "../assets/skin_care.jpeg";
import diabetic_care from "../assets/diabetic_care.jpeg";
import fitness_supplements from "../assets/fitness_supplements.jpg";
import ayurveda from "../assets/ayurveda.jpg";
import medical_equipments from "../assets/medical_equipments.jpg";
import surgical_supplies from "../assets/surgical_supplies.jpg";
import elderly_care from "../assets/elderly_care.jpg";

const categories = [
  { title: "Medicines", description: "Buy prescription & OTC medicines safely and conveniently.", image: medicines, path: "Medicines" },
  { title: "Wellness", description: "Products to support your mental and physical well-being.", image: wellness, path: "Wellness" },
  { title: "Personal Care", description: "Skincare, haircare & hygiene essentials for everyday health.", image: personal_car, path: "Personal Care" },
  { title: "Health Devices", description: "BP monitors, oximeters, thermometers and more.", image: health_device, path: "Health Devices" },
  { title: "Baby Care", description: "Gentle and safe products for your baby's needs.", image: baby_care, path: "Baby Care" },
  { title: "Skin Care", description: "Nourish and protect your skin with trusted solutions.", image: skin_care, path: "Skin Care" },
  { title: "Diabetic Care", description: "Essential tools and supplies for diabetic support.", image: diabetic_care, path: "Diabetic Care" },
  { title: "Fitness & Supplements", description: "Nutrition and gear to power your health journey.", image: fitness_supplements, path: "Fitness & Supplements" },
  { title: "Ayurveda", description: "Explore Ayurvedic remedies for holistic healing.", image: ayurveda, path: "Ayurveda" },
  { title: "Medical Equipments", description: "From nebulizers to walkers — essential devices for care.", image: medical_equipments, path: "Medical Equipments" },
  { title: "Elderly Care", description: "Adult diapers, support belts & more for senior comfort.", image: elderly_care, path: "Elderly Care" },
  { title: "Surgical Supplies", description: "Sterile instruments and surgical products for clinics & homes.", image: surgical_supplies, path: "Surgical Supplies" },
];


const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
        Explore Our Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/medicines-and-more/${cat.path}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-900 group-hover:text-[#4d59e2]">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-md mt-4 leading-relaxed group-hover:text-gray-800">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
