import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav
      className={`w-full ${styles.paddingHorizontal} py-6 flex items-center justify-between `}
    >
      <div className="flex items-center gap-12">
        <h1 className="text-black font-semibold text-2xl uppercase">
          sparta<span className="text-orange-600">x</span>
        </h1>
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/shop-all"
            className="text-black font-medium text-sm uppercase hover:text-orange-600 transition-all duration-300"
          >
            shop all
          </Link>
          <Link
            to="/shop-all"
            className="text-black font-medium text-sm uppercase hover:text-orange-600 transition-all duration-300"
          >
            men
          </Link>
          <Link
            to="/shop-all"
            className="text-black font-medium text-sm uppercase hover:text-orange-600 transition-all duration-300"
          >
            women
          </Link>
          <Link
            to="/shop-all"
            className="text-black font-medium text-sm uppercase hover:text-orange-600 transition-all duration-300"
          >
            Packs & Gear
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3 lg:gap-6">
        <p className="text-sm text-black font-medium hover:text-orange-600 transition-all duration-300">
          $0.00
        </p>
        <Link to="/cart">
          <MdShoppingCart className="text-black text-lg hover:text-orange-600 transition-all duration-300" />
        </Link>
        <button
          className="w-9 h-9 bg-orange-600 p-2 block lg:hidden"
          onClick={handleNav}
        >
          <LuMenu className="w-full h-full" />
        </button>
      </div>

      <div
        className={`w-full h-screen bg-transparent lg:hidden fixed top-0 left-0 right-0 bottom-0 ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="w-full h-full bg-gray-100 float-end relative">
          <button
            className="absolute right-5 top-5 w-12 h-12 border border-black rounded-full p-3 hover:bg-orange-600 transition-all duration-300 hover:border-orange-600"
            onClick={handleNav}
          >
            <IoIosClose className="w-full h-full" />
          </button>
          <div className="w-full h-full flex flex-col justify-center items-center gap-7">
            <Link
              to="/shop-all"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              shop all
            </Link>
            <Link
              to="/shop-all"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              men
            </Link>
            <Link
              to="/shop-all"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              women
            </Link>
            <Link
              to="/shop-all"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              Packs & Gear
            </Link>
            <Link
              to="/shop-all"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              Packs & Gear
            </Link>{" "}
            <Link
              to="/contact"
              className="text-black font-normal text-base uppercase hover:text-orange-600 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
