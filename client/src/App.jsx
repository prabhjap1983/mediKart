// import { Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// // import Products from "./pages/Products";
// import MedicinesAndMore from "./pages/MedicinesAndMore";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Navbar from './components/Navbar';
// import { useContext } from "react";
// import { AppContext } from "./context/AppContext";
// import About from "./pages/About";
// import MyOrders from "./pages/MyOrders";
// import Auth from "./models/Auth";
// import ProductCategory from "./pages/ProductCategory";



// const App = () => {
  
//   const{isSeller, showUserLogin}= useContext(AppContext);
//   const isSellerPath = useLocation().pathname.includes("seller");
//   return (
//     <div className="text-default min-h-screen">
//       {isSellerPath ? null : <Navbar />}

//       {showUserLogin ? <Auth /> : null}

//     <div className="px-6 md:px-16 lg:px-24 xl:px-32">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/products" element={<Products />} /> */}
//         <Route path="/medicines-and-more" element={<MedicinesAndMore />} />
//         <Route path="/product/:category" element={<ProductCategory />} />
//         <Route path="/products/:category/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/my-orders" element={< MyOrders/>} />

//       </Routes>
//     </div>
//     </div>
//   );
// };

// export default App;
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MedicinesAndMore from "./pages/MedicinesAndMore";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Make sure this is imported
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import MyOrders from "./pages/MyOrders";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./components/ScrollToTop";
import AddAddress from "./pages/AddAddress";
import SellerLayout from "./pages/Seller/SellerLayout";
import SellerLogin from "./components/Seller/SellerLogin";
import AddProduct from "./pages/Seller/AddProduct";
import ProductList from "./pages/Seller/ProductList";
import Orders from "./pages/Seller/Orders";

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="text-default min-h-screen flex flex-col justify-between">
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Auth />}
      <Toaster/>
      {/* Content area with padding */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicines-and-more" element={<MedicinesAndMore />} />
           <Route path="/medicines-and-more/:category" element={<MedicinesAndMore />} />
          <Route path="/product/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/add-address" element={<AddAddress />} />

          <Route path="/Seller" element={isSeller ? <SellerLayout /> : <SellerLogin />}>
          <Route index  element={isSeller ?<AddProduct/> : null}/>
          <Route path="product-list"
           element={isSeller ?<ProductList/> : null}
           />
          
          <Route path="orders"
           element={isSeller ?<Orders/> : null}
           />
          </Route>
        </Routes>
      </div>
<ToastContainer position="top-right" autoClose={3000} />

      {/* Full-width Footer (no padding here) */}
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;



