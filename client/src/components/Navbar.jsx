
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; 
import user_profile from "../assets/user_profile.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, cartItems, getCartCount, searchQuery,
    setSearchQuery, } = useContext(AppContext);
    
  const navigate = useNavigate();
  useEffect(() => {
  if (searchQuery.trim() !== "") {
    navigate("/medicines-and-more");
  }
}, [searchQuery, navigate]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-orange-600">Medikart</h1>
      </Link>

      
      <div className="hidden sm:flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
        <Link to="/medicines-and-more" className="hover:text-indigo-600 transition">Medicines & More</Link>
       
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 py-1.5 rounded-full hover:shadow-sm transition">
          <input
          onChange={(e)=> setSearchQuery(e.target.value)}
            className="bg-transparent outline-none placeholder-gray-500 w-full"
            type="text"
            placeholder="Search products"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        
<div
  onClick={() => navigate("/cart")}
  className="relative cursor-pointer group"
  title="View Cart"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition-transform duration-200 group-hover:scale-110"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.5 3h15l-1.5 7.5a1 1 0 01-1 .75H7a1 1 0 01-1-.75L5.5 6m1.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
    />
  </svg>

  
  {getCartCount() > 0 && (
    <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 group-hover:ring-2 group-hover:ring-orange-300 transition">
      {getCartCount()}
    </span>
  )}
</div>



     
{user ? (
  <div className="relative group">
    <img
      src={user_profile}
      alt="profile"
      className="w-12 h-12 rounded-full object-cover"
    />
    <ul className="hidden group-hover:flex flex-col absolute top-12 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-50 transition-all duration-300 ease-in-out text-sm text-gray-700">
      

      <hr className="border-gray-200 mx-4" />

      <li
        onClick={() => setUser(null)}
        className="px-4 py-3 hover:bg-red-100 text-gray-800 cursor-pointer rounded-b-xl transition flex items-center gap-2"
      >
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1"
          />
        </svg>
        Logout
      </li>
    </ul>
  </div>
) : (
  <button
    onClick={() =>{ 
      setShowUserLogin(true);
    }}
    className="ml-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition duration-200"
  >
    Login
  </button>
)}
</div>



      
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-6 text-gray-700 font-medium md:hidden transition`}>
        <Link to="/" className="hover:text-indigo-600 w-full">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 w-full">About</Link>
        <Link to="/medicines-and-more" className="hover:text-indigo-600 transition">Medicines & More</Link>
        <Link to="/contact" className="hover:text-indigo-600 w-full">Contact</Link>
        {user ? (
  <div className="relative group">
    <img
      src={user_profile}
      alt="profile"
      className="w-12 h-12 rounded-full object-cover"
    />
    <ul className="hidden group-hover:flex flex-col absolute top-12 right-0 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-50 transition-all duration-300 ease-in-out text-sm text-gray-700">
      

      <hr className="border-gray-200 mx-4" />

      <li
        onClick={() => setUser(null)}
        className="px-4 py-3 hover:bg-red-100 text-gray-800 cursor-pointer rounded-b-xl transition flex items-center gap-2"
      >
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1"
          />
        </svg>
        Logout
      </li>
    </ul>
  </div>
) : (
  <button className="ml-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition duration-200">
    Login
  </button>
)}

      </div>
    </nav>
  ); 
};

export default Navbar;
