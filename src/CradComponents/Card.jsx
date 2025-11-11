import React from "react";

const Card = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-72 h-[400px] p-6 flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">

      <div className="w-full h-44 overflow-hidden rounded-2xl border border-sky-100 shadow-sm">
        <img
          src={image || "https://via.placeholder.com/300x200"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sky-500 font-medium text-sm mt-1">{role}</p>
      </div>

     
      <button className="bg-sky-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-sky-600 hover:shadow-lg transition-all duration-300">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
