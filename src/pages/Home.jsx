import React from "react";
import Hero from "../components/Home/Hero";
import ShopByCategory from "../components/Home/ShopByCategory";
import TrendingSportsWear from "../components/Home/TrendingSportsWear";
import ProductGrid from "../components/Home/ProductGrid";
import SubscribeSection from "../components/Global/SubscribeSection";
import FitnessReadySection from "../components/Home/FitnessReadySection";
import StreetReadySection from "../components/Home/StreetReadySection";
import ExploreCollections from "../components/Home/ExploreCollections";
import Footer from "../components/Global/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ShopByCategory />
      <TrendingSportsWear />
      <ProductGrid />
      <FitnessReadySection />
      <StreetReadySection />
      <ExploreCollections />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;
