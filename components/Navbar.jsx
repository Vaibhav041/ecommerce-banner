import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import { ProductContext } from "@/context/productContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { category, setData } = useContext(ProductContext);
  const [isTab, setIsTab] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsTab(window.innerWidth < 820);
    });
  }, []);
  return (
    <div className="flex items-center justify-around lg:justify-between w-full lg:w-[65%]">
      <div className="text-white">
        <MenuIcon style={{ fontSize: "45px" }} />
      </div>
      <div className="drop-down relative">
        <button
          type="button"
          className="text-white bg-black w-36 rounded-sm h-7"
          onClick={() => setOpen(!open)}
        >
          <span>{category}</span> <ArrowDropDownIcon />
        </button>
        {open && (
          <div className="absolute bg-black text-white top-[1.79rem] w-36 text-center p-1">
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                setData("electronics", "categories"), setOpen(false);
              }}
            >
              electronics
            </p>
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                setData("jewelery", "categories"), setOpen(false);
              }}
            >
              jewelery
            </p>
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                setData("men's clothing", "categories"), setOpen(false);
              }}
            >
              men's clothing
            </p>
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                setData("women's clothing", "categories"), setOpen(false);
              }}
            >
              women's clothing
            </p>
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                setData("All category", "categories"), setOpen(false);
              }}
            >
              All category
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center rounded-sm">
        <input
          className="p-1 h-7 w-24 md:w-44 lg:w-96 focus:outline-none"
          type="text"
          placeholder="Search this blog"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-white bg-red-500 h-7"
          onClick={() => setData(search, "searched")}
        >
          <SearchIcon />
        </button>
      </div>
      {!isTab && (
        <button className="bg-white h-7 w-24 rounded-sm">
          English <KeyboardArrowDownIcon />
        </button>
      )}
      {!isTab && (
        <button className="text-white font-medium">
          <ShoppingCartIcon /> Cart
        </button>
      )}
      {!isTab && (
        <button className="text-white font-medium">
          <PersonIcon /> Cart
        </button>
      )}
    </div>
  );
};

export default Navbar;
