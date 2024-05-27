import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const CategoryCard = () => {
  return (
    <div className="h-auto relative">
      <img
        src="https://img.freepik.com/free-photo/portrait-active-young-woman-outdoor_23-2148381964.jpg?t=st=1716761924~exp=1716765524~hmac=3d24a7bf6e95e8e8b7e1a5fe591670aaecbba8428874e5eb64f0b9c32d8053b2&w=826"
        alt=""
        className="w-full h-full bg-conver bg-center brightness-75"
      />
      <button className="px-6 py-2.5 rounded-full bg-gray-100 tracking-wide uppercase font-normal text-sm flex items-center gap-1 absolute bottom-10 left-10">
        Clothing <HiArrowLongRight className="text-base" />
      </button>
    </div>
  );
};

export default CategoryCard;

// image size 1500 x 1200
