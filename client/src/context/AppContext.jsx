// AppContext.jsx
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL= import.meta.env.VITE_BACKEND_URL;

import paracetamol_tablet from "../assets/paracetamol_tablet.jpg";
import Digital_thermometer from "../assets/Digital_thermometer.jpg";
import la_roche_posay from "../assets/la_roche_posay.jpg";
import Dettol_Antiseptic_Liquid from "../assets/Dettol_Antiseptic_Liquid.jpg";
import ORS from "../assets/ORS.jpg";
import tixylix_toddler_cough_syrup from "../assets/tixylix_toddler_cough_syrup.jpg";
import stethoscopes from "../assets/stethoscopes.png";
import Zen_Sara_Aromatherapy_Oil from "../assets/Zen_Sara_Aromatherapy_Oil.jpg";
import Sterile_Latex_Gloves from "../assets/Sterile_Latex_Gloves.jpg";
import Accu_Chek_Glucometer from "../assets/Accu_Chek_Glucometer.jpg";
import Selsun_Blue_Medicated_Shampoo from "../assets/Selsun_Blue_Medicated_Shampoo.jpg";
import Pigeon_Baby_Bottle from "../assets/Pigeon_Baby_Bottle.jpg";
import Omron_HEM_7120_BP_Monito from "../assets/Omron_HEM_7120_BP_Monito.jpg";
import Amoxicillin_500mg_Capsule from "../assets/Amoxicillin_500mg_Capsule.jpg";
import DrTrust_Pulse_Oximeter from "../assets/DrTrust_Pulse_Oximeter.jpg";
import Mamaearth_Ubtan_Face_Wash from "../assets/Mamaearth_Ubtan_Face_Wash.jpg";
import Neutrogena_Hydro_Boost_Gel_Cream from "../assets/Neutrogena_Hydro_Boost_Gel_Cream.jpg";
import Ibuprofen_400mg_Tablet from "../assets/Ibuprofen_400mg_Tablet.jpg";
import Digene_Liquid_Antacid from "../assets/Digene_Liquid_Antacid.jpg";
import Surgical_Mask from "../assets/Surgical_Mask.jpg";
import Himalaya_Hand_Sanitizer from "../assets/Himalaya_Hand_Sanitizer.jpg";
import Carbamide_Forte_Tablets from "../assets/Carbamide_Forte_Tablets.jpg";
import Yoga_Mats_with_Carry_Strap from "../assets/Yoga_Mats_with_Carry_Strap.jpg";
import Beurer_Nebulizer_IH26 from "../assets/Beurer_Nebulizer_IH26.jpg";
import Adhesive_Bandages from "../assets/Adhesive_Bandages.jpg";
import Vicryl_Synthetic_Absorbable_Sutures from "../assets/Vicryl_Synthetic_Absorbable_Sutures.jpg";
import Zandu_Pancharisht from "../assets/Zandu_Pancharisht.jpg";
import Oxypower_Oxygen_Concentrator5L from "../assets/Oxypower_Oxygen_Concentrator5L.jpg";
import Himalaya_ImmunoCare_Tablets from "../assets/Himalaya_ImmunoCare_Tablets.jpg";
import Pantoprazole_40mg_Capsule from "../assets/Pantoprazole_40mg_Capsule.png";
import ECG_Recorder from "../assets/ECG_Recorder.jpg";
import Cetaphil_Gentle_Skin_Cleanse from "../assets/Cetaphil_Gentle_Skin_Cleanse.jpg";
import Lactulose_Solution from "../assets/Lactulose_Solution.jpg";
import Cetirizine_10mg_Tablet from "../assets/Cetirizine_10mg_Tablet.jpg";
import The_Ordinary_Niacinamide_Serum from "../assets/The_Ordinary_Niacinamide_Serum.jpg";
import Knee_Cap from "../assets/Knee_Cap.jpg";
import Drive_Folding_Cane from "../assets/Drive_Folding_Cane.jpg";
import Bosch_Adult_Diaper_Medium from "../assets/Bosch_Adult_Diaper_Medium.jpg";
import Liv52_Syrup from "../assets/Liv52_Syrup.jpg";
import Dabur_Chyawanprash from "../assets/Dabur_Chyawanprash.jpg";
import Himalaya_Liv52_DS_Tablets from "../assets/Himalaya_Liv52_DS_Tablets.jpg";
import Pampers_Baby_Diaper from "../assets/Pampers_Baby_Diaper.jpg";
import Gauze_Sponges from "../assets/Gauze_Sponges.jpg";
import Himalaya_Anti_Hair_Fall_Shampoo from "../assets/Himalaya_Anti_Hair_Fall_Shampoo.jpg";


// Create context
export const AppContext = createContext(null);

const dummyProducts = [
  {
    id: 1,
    name: "Paracetamol Tablet",
    price: 30,
    oldPrice: 50,
    image: [paracetamol_tablet],
    isOnSale: true,
    description: "Effective pain reliever and fever reducer, commonly used for headaches, colds, and body pain.",
    category: "Medicines"
  },
  {
    id: 2,
    name: "Digital Thermometer",
    price: 250,
    image: [Digital_thermometer],
    description: "Accurate digital thermometer for quick body temperature readings, suitable for home and clinical use.",
    category: "Health Devices"
  },
  {
    id: 3,
    name: "La Roche-Posay Sunscreen SPF 50",
    price: 1450,
    oldPrice: 1650,
    image: [la_roche_posay],
    isOnSale: true,
    description: "Dermatologist-tested sunscreen with SPF 50 for broad-spectrum protection against harmful UV rays.",
    category: "Skin Care"
  },
  {
    id: 4,
    name: "Dettol Antiseptic Liquid",
    price: 75,
    image: [Dettol_Antiseptic_Liquid],
    description: "Trusted antiseptic liquid for first aid, personal hygiene, and household disinfection.",
    category: "Personal Care"
  },
  {
    id: 5,
    name: "ORS Liquid (Oral Rehydration Salts)",
    price: 20,
    image: [ORS],
    description: "Oral rehydration solution that restores electrolytes and prevents dehydration caused by diarrhea, vomiting, or heat.",
    category: "Medicines"
  },
  {
    id: 6,
    name: "Tixylix Cough Syrup (Pediatric)",
    price: 90,
    oldPrice: 120,
    image: [tixylix_toddler_cough_syrup],
    isOnSale: true,
    description: "Soothing cough syrup for children, providing relief from dry and chesty coughs.",
    category: "Medicines"
  },
  {
    id: 7,
    name: "Stethoscope",
    price: 1200,
    image: [stethoscopes],
    description: "High-quality stethoscope for clear and accurate auscultation, ideal for doctors and medical students.",
    category: "Medical Equipments"
  },
  {
    id: 8,
    name: "Zen Sara Aromatherapy Oil",
    price: 350,
    oldPrice: 450,
    image: [Zen_Sara_Aromatherapy_Oil],
    isOnSale: true,
    description: "Relaxing essential oil blend designed to relieve stress and promote relaxation.",
    category: "Wellness"
  },
  {
    id: 9,
    name: "Sterile Latex Gloves",
    price: 150,
    image: [Sterile_Latex_Gloves],
    description: "Powder-free sterile latex gloves for medical, surgical, and general use.",
    category: "Surgical Supplies"
  },
  {
    id: 10,
    name: "Accu-Chek Glucometer",
    price: 1200,
    image: [Accu_Chek_Glucometer],
    description: "Accurate and portable glucometer to monitor blood sugar levels at home.",
    category: "Diabetic Care"
  },
  {
    id: 11,
    name: "Selsun Blue Medicated Shampoo",
    price: 380,
    oldPrice: 480,
    image: [Selsun_Blue_Medicated_Shampoo],
    isOnSale: true,
    description: "Medicated shampoo that helps control dandruff and relieves itchy scalp.",
    category: "Personal Care"
  },
  {
    id: 12,
    name: "Pigeon Baby Bottle",
    price: 300,
    image: [Pigeon_Baby_Bottle],
    description: "Durable BPA-free baby feeding bottle with anti-colic nipple design.",
    category: "Baby Care"
  },
  {
    id: 13,
    name: "Omron HEM 7120 BP Monitor",
    price: 1600,
    oldPrice: 1850,
    image: [Omron_HEM_7120_BP_Monito],
    isOnSale: true,
    description: "Automatic blood pressure monitor with one-touch operation and accurate results.",
    category: "Health Devices"
  },
  {
    id: 14,
    name: "Amoxicillin 500mg Capsule",
    price: 120,
    image: [Amoxicillin_500mg_Capsule],
    description: "Broad-spectrum antibiotic used to treat bacterial infections such as respiratory and urinary tract infections.",
    category: "Medicines"
  },
  {
    id: 15,
    name: "Dr.Trust Pulse Oximeter",
    price: 900,
    image: [DrTrust_Pulse_Oximeter],
    description: "Compact device for accurate measurement of blood oxygen saturation (SpO2) and pulse rate.",
    category: "Health Devices"
  },
  {
    id: 16,
    name: "Mamaearth Ubtan Face Wash",
    price: 220,
    oldPrice: 300,
    image: [Mamaearth_Ubtan_Face_Wash],
    isOnSale: true,
    description: "Natural face wash enriched with turmeric and saffron to brighten and cleanse skin.",
    category: "Personal Care"
  },
  {
    id: 17,
    name: "Neutrogena Hydro Boost Gel Cream",
    price: 850,
    image: [Neutrogena_Hydro_Boost_Gel_Cream],
    description: "Lightweight gel moisturizer with hyaluronic acid for intense hydration.",
    category: "Skin Care"
  },
  {
    id: 18,
    name: "Ibuprofen 400mg Tablet",
    price: 50,
    oldPrice: 80,
    image: [Ibuprofen_400mg_Tablet],
    isOnSale: true,
    description: "Non-steroidal anti-inflammatory drug (NSAID) that provides relief from pain, inflammation, and fever.",
    category: "Medicines"
  },
  {
    id: 19,
    name: "Digene Liquid Antacid",
    price: 110,
    image: [Digene_Liquid_Antacid],
    description: "Fast-acting antacid providing relief from acidity, indigestion, and gas.",
    category: "Medicines"
  },
  {
    id: 20,
    name: "Surgical Mask",
    price: 200,
    image: [Surgical_Mask],
    description: "Pack of 50 disposable 3-ply surgical masks for effective protection against airborne particles.",
    category: "Surgical Supplies"
  },
  {
    id: 21,
    name: "Himalaya Hand Sanitizer",
    price: 45,
    oldPrice: 60,
    image: [Himalaya_Hand_Sanitizer],
    isOnSale: true,
    description: "Herbal hand sanitizer with neem and tulsi extracts that kills 99.9% of germs without water.",
    category: "Personal Care"
  },
  {
    id: 22,
    name: "Carbamide Forte Tablets",
    price: 450,
    image: [Carbamide_Forte_Tablets],
    description: "Dietary supplement for improved energy, immunity, and overall wellness.",
    category: "Fitness & Supplements"
  },
  {
    id: 23,
    name: "Yoga Mats with Carry Strap",
    price: 700,
    oldPrice: 950,
    image: [Yoga_Mats_with_Carry_Strap],
    isOnSale: true,
    description: "Durable and anti-slip yoga mat with carrying strap for convenient portability.",
    category: "Fitness & Supplements"
  },
  {
    id: 24,
    name: "Beurer Nebulizer IH 26",
    price: 1800,
    image: [Beurer_Nebulizer_IH26],
    description: "Efficient nebulizer for effective medication delivery to the respiratory tract.",
    category: "Medical Equipments"
  },
  {
    id: 25,
    name: "Adhesive Bandages",
    price: 40,
    image: [Adhesive_Bandages],
    description: "Flexible and breathable adhesive bandages for wound protection and quick healing.",
    category: "Surgical Supplies"
  },
  {
    id: 26,
    name: "Vicryl® Synthetic Absorbable Sutures",
    price: 450,
    image: [Vicryl_Synthetic_Absorbable_Sutures],
    description: "Absorbable surgical sutures used for soft tissue approximation and ligation.",
    category: "Surgical Supplies"
  },
  {
    id: 27,
    name: "Zandu Pancharisht",
    price: 130,
    image: [Zandu_Pancharisht],
    description: "Ayurvedic digestive tonic that improves appetite and helps relieve indigestion.",
    category: "Ayurveda"
  },
  {
    id: 28,
    name: "Oxypower Oxygen Concentrator 5L",
    price: 35000,
    oldPrice: 42000,
    image: [Oxypower_Oxygen_Concentrator5L],
    isOnSale: true,
    description: "5L oxygen concentrator machine for patients requiring supplemental oxygen at home.",
    category: "Medical Equipments"
  },
  {
    id: 29,
    name: "Himalaya ImmunoCare Tablets",
    price: 220,
    image: [Himalaya_ImmunoCare_Tablets],
    description: "Herbal supplement designed to boost immunity and overall well-being.",
    category: "Wellness"
  },
  {
    id: 30,
    name: "Pantoprazole 40mg Capsule",
    price: 85,
    oldPrice: 120,
    image: [Pantoprazole_40mg_Capsule],
    isOnSale: true,
    description: "Proton pump inhibitor that reduces stomach acid, effective for acidity and GERD.",
    category: "Medicines"
  },
  {
    id: 31,
    name: "ECG Recorder",
    price: 1800,
    image: [ECG_Recorder],
    description: "Portable ECG machine for accurate cardiac monitoring.",
    category: "Medical Equipments"
  },
  {
    id: 32,
    name: "Cetaphil Gentle Skin Cleanse",
    price: 550,
    image: [Cetaphil_Gentle_Skin_Cleanse],
    description: "Gentle, soap-free cleanser suitable for sensitive and dry skin types.",
    category: "Skin Care"
  },
  {
    id: 33,
    name: "Lactulose Solution",
    price: 150,
    oldPrice: 200,
    image: [Lactulose_Solution],
    isOnSale: true,
    description: "Laxative syrup used to relieve constipation and improve bowel movement.",
    category: "Medicines"
  },
  {
    id: 34,
    name: "Cetirizine 10mg Tablet",
    price: 25,
    image: [Cetirizine_10mg_Tablet],
    description: "Antihistamine that provides quick relief from allergy symptoms like runny nose, sneezing, and watery eyes.",
    category: "Medicines"
  },
  {
    id: 35,
    name: "The Ordinary Niacinamide Serum",
    price: 550,
    oldPrice: 700,
    image: [The_Ordinary_Niacinamide_Serum],
    isOnSale: true,
    description: "Serum with niacinamide and zinc that helps reduce acne, blemishes, and oiliness.",
    category: "Skin Care"
  },
  {
    id: 36,
    name: "Knee Cap",
    price: 180,
    image: [Knee_Cap],
    description: "Elastic knee support that provides stability and compression for joint pain relief.",
    category: "Elderly Care"
  },
  {
    id: 37,
    name: "Drive Folding Cane",
    price: 750,
    image: [Drive_Folding_Cane],
    description: "Adjustable lightweight walking cane with foldable design for elderly mobility support.",
    category: "Elderly Care"
  },
  {
    id: 38,
    name: "Bosch Adult Diaper Medium",
    price: 450,
    oldPrice: 600,
    image: [Bosch_Adult_Diaper_Medium],
    isOnSale: true,
    description: "Super absorbent adult diapers for incontinence management and all-day comfort.",
    category: "Elderly Care"
  },
  {
    id: 39,
    name: "Liv52 Syrup",
    price: 150,
    image: [Liv52_Syrup],
    description: "Popular Ayurvedic liver tonic that supports liver health and digestion.",
    category: "Ayurveda"
  },
  {
    id: 40,
    name: "Dabur Chyawanprash",
    price: 350,
    oldPrice: 420,
    image: [Dabur_Chyawanprash],
    isOnSale: true,
    description: "Ayurvedic health supplement rich in Vitamin C, boosts immunity and energy.",
    category: "Wellness"
  },
  {
    id: 41,
    name: "Himalaya Liv.52 DS Tablets",
    price: 220,
    image: [Himalaya_Liv52_DS_Tablets],
    description: "Double strength herbal liver support tablets promoting healthy liver function.",
    category: "Ayurveda"
  },
  {
    id: 42,
    name: "Pampers Baby Diaper",
    price: 500,
    oldPrice: 600,
    image: [Pampers_Baby_Diaper],
    isOnSale: true,
    description: "Soft and absorbent baby diapers designed for all-day dryness and comfort.",
    category: "Baby Care"
  },
  {
    id: 43,
    name: "Gauze Sponges",
    price: 120,
    image: [Gauze_Sponges],
    description: "Sterile gauze sponges for wound dressing, cleaning, and absorption.",
    category: "Surgical Supplies"
  },
  {
    id: 44,
    name: "Himalaya Anti Hair Fall Shampoo",
    price: 250,
    oldPrice: 350,
    image: [Himalaya_Anti_Hair_Fall_Shampoo],
    isOnSale: true,
    description: "Herbal shampoo enriched with bhringraj and palasha to reduce hair fall and promote growth.",
    category: "Personal Care"
  }
];


const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  // searchQuery should be string
  const [searchQuery, setSearchQuery] = useState(""); 
  const [categories, setCategories] = useState([]);



//   const getCartCount = () => {
//   return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
// };
//  const categories = [...new Set(dummyProducts.map((p) => p.category))];

const getCartCount = () => {
  if (!cartItems || typeof cartItems !== "object") return 0; 
  return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
};

    //  add allproducts data
  // const fetchProducts = async () => {
  //   setProducts(dummyProducts);
  // };

  const fetchSeller = async () => {
    try {
        const { data } = await axios.get("/api/seller/is-auth");
        if (data.success) {
            setIsSeller(true);
        } else {
            setIsSeller(false);
        }
    } catch (error) {
        toast.error(error.message);
    }
};

const fetchUser = async () => {
  try {
    const { data } = await axios.get("/api/user/is-auth");
    if (data.success) {
      setUser(data.user);
      setCartItems(data.user.cart);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};


  const fetchProducts = async () => {
    try {
        const { data } = await axios.get('/api/product/list');
        if (data.success) {
            setProducts(data.products);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
};

const addToCart = (itemId, quantity = 1) => {
  let cartData = structuredClone(cartItems);
  if (cartData[itemId]) {
    cartData[itemId] += quantity;
  } else {
    cartData[itemId] = quantity;
  }
  setCartItems(cartData);
  toast.success("Product Added To Cart...");
};

// update cart item quantity
const updateCartItem = (itemId, quantity) => {
  let  cartData= structuredClone(cartItems);
  cartData[itemId]=quantity;
  setCartItems(cartData);
  toast.success("cart Updated");
};

//total cart items
const cartCount=()=>{
  let totalCount=0;
  for (const item in cartItems){
    totalCount += cartItems[item];
  }
  return totalCount;
};

// total cart amount 
const totalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    let itemInfo = products.find((product) => String(product.id) === String(item));
    if (itemInfo && cartItems[item] > 0) {
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};


// const removeFromCart = (itemId) => {
//   let cartData = structuredClone(cartItems);
//   if(cartData[itemId]){
//     cartData[itemId] -= 1;
//     if (cartData[itemId]==0){
//       delete cartData[itemId];
//     }
//     toast.success("removed from cart");
//     setCartItems(cartData);
//   }
// };
// ✅ AppContext.js
const removeFromCart = (productId) => {
  setCartItems((prev) => {
    const newCart = { ...prev };
    delete newCart[productId]; // completely removes product from cart
    return newCart;
  });
};

useEffect(() => {
  const updateCart = async () => {
    try {
      const { data } = await axios.post("/api/cart/update", { cartItems });
      if (!data.success) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (user) {
    updateCart();
  }
}, [cartItems]);

  useEffect(() => {
    fetchProducts();
    fetchSeller();
    fetchUser();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    addToCart,
    updateCartItem,
    cartCount,
    totalCartAmount,
    removeFromCart,
    cartItems,
    getCartCount,
    searchQuery,
    setSearchQuery,
    categories,
    axios,
    fetchProducts,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


