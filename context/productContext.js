"use client";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All category");
  const [searched, setSearched] = useState("");

  const setData = (val, state) => {
    switch (state) {
      case "products":
        return setProducts(val);
      case "categories":
        return setCategory(val);
      case "searched":
        return setSearched(val);
    }
  };

  return (
    <ProductContext.Provider value={{ products, category, searched, setData }}>
      {children}
    </ProductContext.Provider>
  );
};
