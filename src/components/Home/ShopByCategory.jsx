import React from "react";
import { styles } from "../../styles/styles";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12 tracking-wide`}>
      <h1 className="text-2xl font-bold">Shop by Category</h1>
      <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default ShopByCategory;
