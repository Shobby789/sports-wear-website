import React from "react";
import { styles } from "../../styles/styles";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  return (
    <section
      className={`${styles.paddingHorizontal} py-6 lg:py-12 tracking-wide`}
    >
      <h1 className="text-2xl font-bold">Shop by Category</h1>
      <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryCard image={"/men-sports-wear.jpg"} title={"Men"} />
        <CategoryCard image={"/women-sports-wear.jpg"} title={"Women"} />
        <CategoryCard image={"/shoes.jpg"} title={"Shoes"} />
        <CategoryCard image={"/sports-shoes.jpg"} title={"Style"} />
      </div>
    </section>
  );
};

export default ShopByCategory;
