import React from "react";
import Hero from "../components/Home/Hero";
import ShopByCategory from "../components/Home/ShopByCategory";
import TrendingSportsWear from "../components/Home/TrendingSportsWear";
import ProductGrid from "../components/Home/ProductGrid";
import SubscribeSection from "../components/Global/SubscribeSection";
import FitnessReadySection from "../components/Home/FitnessReadySection";
import StreetReadySection from "../components/Home/StreetReadySection";
import AdventureReady from "../components/Home/AdventureReady";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ShopByCategory />
      <TrendingSportsWear />
      <ProductGrid />
      <FitnessReadySection />
      <StreetReadySection />
      <AdventureReady />
      <SubscribeSection />
    </div>
  );
};

export default Home;
