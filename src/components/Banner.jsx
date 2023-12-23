import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between item-center gap-8">
        {/* image containe  */}
        <div className="md:w-1/2">
          <img src="/banner.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-10 gap-5">
            <div className="flex bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md">
              <img
                src="/foodDish.jpeg"
                alt="food-dish-image"
                className="rounded-lg md:w-[6rem]"
              />
              <div className="space-y-1 mr-5">
                <h5 className="font-medium">Thai Food</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
                <p className="text-red text-sm">$ 10.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md w-64">
              <img
                src="/foodDish.jpeg"
                alt="food-dish-image"
                className="rounded-lg md:w-[6rem]"
              />
              <div className="space-y-1 mr-5">
                <h5 className="font-medium">Thai Food</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
                <p className="text-red text-sm">$ 10.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* text container */}
        <div className="md:w-1/2 space-y-7 px-4 md:mt-[8rem]">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
