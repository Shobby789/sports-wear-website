import React from "react";
import { styles } from "../../styles/styles";

const SubscribeSection = () => {
  return (
    <section
      className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal} bg-white tracking-wide`}
    >
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">Be The First To Know</h1>
        <p className="text-xl font-light  text-gray-500 text-center">
          Lectus amet scelerisque fusce est venenatis, eget enim dolor amet
          vitae pharetra.
        </p>
        <div className="w-full flex justify-center">
          <form action="" className="flex items-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              className="py-3 px-4 border text-base lg:w-[420px] outline-none font-normal text-gray-500"
              placeholder="Email address"
            />
            <button className="px-4 lg:px-8 py-3.5 text-white text-sm font-medium uppercase bg-orange-600">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
