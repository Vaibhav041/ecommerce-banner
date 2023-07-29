import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "@/context/productContext";

const BottomSection = () => {
  const [localProducts, setLocalPoducts] = useState([]);
  const { products, setData, category, searched } = useContext(ProductContext);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data, "products");
    setLocalPoducts(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (products.length) {
      if (category === "All category") {
        return setLocalPoducts(products);
      }
      const data = products?.filter((item) => item.category === category);
      setLocalPoducts(data);
    }
  }, [category]);
  useEffect(() => {
    if (searched) {
      const data = products?.filter(
        (item) =>
          item.title.includes(searched) ||
          item?.description.includes(searched) ||
          item?.category.includes(searched)
      );
      setLocalPoducts(data);
    }
  }, [searched]);
  console.log(products);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold">Man & Woman Fashion</h1>
      <div className="flex flex-wrap w-[65%] mt-5 gap-10 justify-center">
        {localProducts?.map((product) => {
          return (
            <Card
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomSection;
