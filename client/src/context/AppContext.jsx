import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();


  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);


  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});


  const [searchQuery, setSearchQuery] = useState("");

 
  const [categories] = useState([
    "All Products",
    "Medicines",
    "Wellness",
    "Personal Care",
    "Health Devices",
    "Baby Care",
    "Skin Care",
    "Diabetic Care",
    "Fitness & Supplements",
    "Ayurveda",
    "Medical Equipments",
    "Elderly Care",
    "Surgical Supplies",
  ]);


  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) setProducts(data.products);
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });

  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/api/user/is-auth");
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (err) {
      
      if (err.response?.status !== 401) {
        console.error(err);
      }
    }
  };



  // Fetch seller auth
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success);
    } catch (error) {
      toast.error(error.message);
    }
  };


  const addToCart = (itemId, quantity = 1) => {
    if (!itemId) return;
    setCartItems((prev) => {
      const newCart = { ...prev };
      newCart[itemId] = (newCart[itemId] || 0) + quantity;
      return newCart;
    });
    toast.success("Product Added To Cart");
  };

  const updateCartItem = (itemId, quantity) => {
    if (!itemId) return;
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    if (!itemId) return;
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const getCartCount = () =>
    Object.values(cartItems || {}).reduce((acc, qty) => acc + qty, 0);

  const totalCartAmount = () => {
    let total = 0;
    if (!products || !cartItems) return total;
    for (const item in cartItems) {
      const product = products.find((p) => String(p._id) === String(item));
      if (product) total += product.price * cartItems[item];
    }
    return total;
  };

  useEffect(() => {
    const updateCartBackend = async () => {
      if (!user) return;
      try {
        await axios.post("/api/cart/update", { cartItems });
      } catch (error) {
        toast.error(error.message);
      }
    };
    updateCartBackend();
  }, [cartItems, user]);

  
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
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    totalCartAmount,
    getCartCount,
    searchQuery,
    setSearchQuery,
    categories, 
    axios,
    fetchProducts,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
