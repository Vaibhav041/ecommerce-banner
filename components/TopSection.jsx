import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Deals from "./Deals";
import Carousel from "./Carousel";

const TopSection = () => {
  const [isTab, setIsTab] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsTab(window.innerWidth < 600);
    });
  }, []);
  return (
    <div
      className="h-[65vh] w-full bg-center bg-cover flex flex-col gap-10 items-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {!isTab && <Deals />}
      <h1 className="text-white font-bold text-4xl">Eflyer</h1>
      <Navbar />
      <Carousel />
      <button className="bg-black text-white w-36 h-10 rounded-sm">
        Buy Now
      </button>
    </div>
  );
};

export default TopSection;
