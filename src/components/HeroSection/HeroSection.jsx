import React from "react";

const HeroSection = () => {
  return (
    <section className="relative ">

      <img
        src="https://i.postimg.cc/mkkgw88z/Banner-min.jpg"
        alt=""
        className="w-full  h-[550px] bg-no-repeat bg-cover bg-fixed
            scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="max-w-6xl mx-auto h-full   flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-xl md:text-4xl font-bold leading-tight tracking-normal">
              Bid on Unique Items from<br />Around the World
            </h1>
            <p className="mt-2 text-slate-200 text-base tracking-tighter">
              Discover rare collectibles, luxury goods and vintage <br></br>treasures in our curated auctions.
            </p>

            <button
              className="mt-5 inline-flex w-fit items-center justify-center  bg-white px-10 py-2 font-semibold text-black shadow-sm hover:text-yellow-300 transition rounded-3xl tracking-tighter"
            >
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
