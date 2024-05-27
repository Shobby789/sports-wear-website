import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ pages }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-full bg-gray-50">{pages}</div>
      <Footer />
    </div>
  );
};

export default Layout;
