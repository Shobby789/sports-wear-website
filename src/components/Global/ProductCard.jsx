import React from "react";
import { Backpack } from "../../assets/export";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to="/products/product/1232435">
      <div className="relative">
        <img src={Backpack} alt="" className="bg-gray-200 py-4" />
        <div className="w-full px-4 pt-1">
          <h1 className="text-base font-semibold tracking-wide">
            Tempor id backpack 8L
          </h1>
          <p className="text-sm font-semibold text-gray-400 tracking-wide">
            $64.80
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
