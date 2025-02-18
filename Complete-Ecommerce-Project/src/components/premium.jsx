import React from "react";

function Premium() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <img 
          src="/images/img1.jpg" // Replace with your image URL
          alt="Premium Product"
          className="w-full h-full object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold mt-4">Premium Shawl</h2>
        <p className="text-gray-600 mt-2">$99.99</p>
      </div>
    </div>
  );
}

export default Premium;
