import React from "react";
import { styles } from "../../styles/styles";
import ProductCard from "../Global/ProductCard";

const PacksAndGearProducts = () => {
  return (
    <div className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <div className="w-full flex items-center justify-between">
        <p className="text-base font-light text-gray-500">
          Home / Packs & Gear
        </p>
        <select
          name=""
          id=""
          className="text-sm text-gray-500 font-light bg-transparent outline-none p-2 border"
        >
          <option value="">Default sorting</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by average rating</option>
          <option value="">Sort by latest</option>
          <option value="">Sort by price: low to high</option>
          <option value="">Sort by price: high to low</option>
        </select>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-y-12 gap-y-6 mt-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default PacksAndGearProducts;
