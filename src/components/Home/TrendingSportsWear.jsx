import React from "react";
import { styles } from "../../styles/styles";

const TrendingSportsWear = () => {
  return (
    <section
      className={`py-6 lg:py-12 bg-black h-auto lg:h-screen ${styles.paddingHorizontal} tracking-wide`}
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="">
          <h1 className="text-4xl font-bold text-white">
            Trending Sports Wear For
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205606.jpg?t=st=1716762575~exp=1716766175~hmac=6789871c83ab8117f4b8fedf7f72ef6a61e3ed174ef0b24394170a1fa844f37b&w=360"
            alt=""
            className="w-full h-5/6 brightness-75 object-cover"
          />
          <h2 className="text-white font-bold text-xl">Men</h2>
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="https://img.freepik.com/free-photo/woman-pink-doing-leg-training-with-dumbells-gym_114579-2692.jpg?t=st=1716762723~exp=1716766323~hmac=19f95b09a24dff5d026c0ef6fc2a01e0e939609bdd0889f99d8a9c03968de9dd&w=360"
            alt=""
            className="w-full h-5/6 brightness-75 lg:order-2 object-cover"
          />
          <h2 className="text-white font-bold text-xl lg:order-1">Women</h2>
        </div>
      </div>
    </section>
  );
};

export default TrendingSportsWear;

// 667 x 1000
