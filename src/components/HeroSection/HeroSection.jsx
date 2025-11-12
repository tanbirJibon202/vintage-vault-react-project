import React from "react";

const HeroSection = () => {
  return (
    <section className="relative ">

      <img
        src="https://i.postimg.cc/mkkgw88z/Banner-min.jpg"
        className="w-full  h-[555px] bg-no-repeat bg-cover bg-fixed
            scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="pl-[150px] h-full  flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl
                font-semibold">
              Bid on Unique Items from<br />Around the World
            </h1>
            <p className="mt-2 text-white text-sm">
              Discover rare collectibles, luxury goods and vintage <br></br>treasures in our curated auctions.
            </p>
            <button type="button" class="mt-5 text-black w-fit items-center justify-between bg-white focus:outline-none focus:ring-4  font-semibold rounded-full text-base  py-2.5 text-center me-2 mb-2 hover:text-yellow-300 px-12">Explore Auctions</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


