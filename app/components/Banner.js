import Image from "next/image";

const Banner = () => {
    return (
      <div>
        <div className="flex flex-row w-full rounded-3xl bg-[#653700]">
          <div className="p-6 w-3/6">
            <p className="font-inter opacity-35 text-[60%] text-[#F8BF40]">
              #eatwelleveryday
            </p>
            <p className="text-[90%] text-white font-semibold">
              Promo 70% OFF! <br />
              Meal Coupon!
            </p>
            <p className="text-[70%] text-[#F8BF40]">
              Promo period 1 - 28 Sep 2024
            </p>
          </div>
          <div className="flex justify-center w-3/6 pt-2 relative">
            <Image
              width={100}
              height={100}
              className=" important absolute z-10"
              src="/image_35.png"
            />
            <Image
              width={125}
              height={125}
              className="z-0 absolute right-14"
              src="/spaghetti.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  