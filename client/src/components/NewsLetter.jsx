
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

   
    console.log("Subscribed Email:", email);

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      >
        <input
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className="text-green-600 font-medium mt-2">{message}</p>
      )}
    </div>
  );
};

export default NewsLetter;
