// import { useState } from "react";
// import { AppContext } from "../../context/AppContext";
// import { NavLink } from "react-router-dom";

// const SellerLayout = () => {
//     const {isSeller, setIsSeller, navigate }= useContext(AppContext);
  

//     const sidebarLinks = [
//         { name: "Add Product", path: "/seller", icon: dashboardicon },
//         { name: "Product List", path: "/seller/product-list", icon: overviewicon },
//         { name: "Orders", path: "/seller/orders", icon: chaticon },
//     ];

//     return (
//         <>
//             <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
//                 <h1 className="text-2xl text-orange-600">Medikart</h1>
//                 <div className="flex items-center gap-5 text-gray-500">
//                     <p>Hi! Admin</p>
//                     <button onClick={()=>
//                       setIsSeller(false);
//                       navigate("/");
//                     }
//                      className='border rounded-full text-sm px-4 py-1'>Logout</button>
//                 </div>
//             </div>
//             <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
//                 {sidebarLinks.map((item) => (
//                     <NavLink to={item.path} key={item.name} end={item.path == "/seller"}
      
                        
//                     >
//                         {item.icon}
//                         <p className="md:block hidden text-center">{item.name}</p>
//                     </NavLink>
//                 ))}
//             </div>
//         </>
//     );
// };
// export default SellerLayout;


// import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { NavLink, useNavigate } from "react-router-dom";
// import { PackagePlus, List, ShoppingCart } from "lucide-react"; // ✅ Icons

// const SellerLayout = () => {
//   const { isSeller, setIsSeller } = useContext(AppContext);
//   const navigate = useNavigate(); // ✅ useNavigate hook

//   const sidebarLinks = [
//     { name: "Add Product", path: "/seller", icon: <PackagePlus size={20} /> },
//     { name: "Product List", path: "/seller/product-list", icon: <List size={20} /> },
//     { name: "Orders", path: "/seller/orders", icon: <ShoppingCart size={20} /> },
//   ];

//   return (
//     <>
//       {/* ✅ Header */}
//       <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
//         <h1 className="text-2xl text-orange-600">Medikart</h1>
//         <div className="flex items-center gap-5 text-gray-500">
//           <p>Hi! Admin</p>
//           <button
//             onClick={() => {
//               setIsSeller(false);
//               navigate("/"); // ✅ Redirect to home after logout
//             }}
//             className="border rounded-full text-sm px-4 py-1"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* ✅ Sidebar */}
//       <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
//         {sidebarLinks.map((item) => (
//           <NavLink
//             to={item.path}
//             key={item.name}
//             end={item.path === "/seller"} // exact match for dashboard
//             className={({ isActive }) =>
//               `flex items-center py-3 px-4 gap-3 transition-colors ${
//                 isActive
//                   ? "border-r-4 md:border-r-[6px] bg-indigo-50 border-indigo-500 text-indigo-500 font-medium"
//                   : "hover:bg-gray-100/90 text-gray-700"
//               }`
//             }
//           >
//             {item.icon}
//             <p className="md:block hidden">{item.name}</p>
//           </NavLink>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SellerLayout;
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PackagePlus, List, ShoppingCart } from "lucide-react"; // ✅ Icons

const SellerLayout = () => {
  const { setIsSeller } = useContext(AppContext);
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: <PackagePlus size={20} /> },
    { name: "Product List", path: "/seller/product-list", icon: <List size={20} /> },
    { name: "Orders", path: "/seller/orders", icon: <ShoppingCart size={20} /> },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* ✅ Header */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <h1 className="text-2xl text-orange-600">Medikart</h1>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={() => {
              setIsSeller(false);
              navigate("/");
            }}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Layout with Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 border-r text-base border-gray-300 pt-4 flex flex-col bg-white">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 rounded-r-md transition-colors ${
                  isActive
                    ? "bg-indigo-50 border-r-4 border-indigo-500 text-indigo-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Main content (Outlet renders here) */}
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
