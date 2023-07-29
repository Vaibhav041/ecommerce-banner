import React from "react";

const Carousel = () => {
  return (
    <div className="flex w-[95%] lg:w-[65%] justify-between items-center">
      <div className="h-10 w-10 bg-gray-100 opacity-50 text-black rounded-full text-md font-semibold flex justify-center items-center">
        {"<"}
      </div>
      <div className="flex flex-col items-center text-white font-bold text-4xl">
        <h1>GET START</h1>
        <h1>YOUR FAVOURITE SHOPPING</h1>
      </div>
      <div className="h-10 w-10 bg-gray-100 opacity-50 text-black rounded-full text-md font-semibold flex justify-center items-center">
        {">"}
      </div>
    </div>
  );
};

export default Carousel;
