import React from "react";

const Card = ({ title, image, price }) => {
  return (
    <div className="flex flex-col items-center min-h-full h-80 w-52 p-3 justify-between shadow-2xl">
      <div>
        <h1 className="text-center font-bold">{title.slice(0, 25)}</h1>
        <h2 className="text-orange-600 text-center">
          Price <span className="text-black">${price}</span>
        </h2>
      </div>
      <img src={image} className="h-36 w-36" />
      <button className="bg-red-500 text-gray-300 font-bold w-full rounded-sm">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
