"use client";
import CartList from "../components/CartList";
import Header from "../components/Header";
import { getBag } from "../_lib/logic";

const Bag = () => {
  const shoppingBag = getBag();
  console.log(shoppingBag);
  const { title, price, details, image } = shoppingBag;
  return (
    <div className="md:flex justify-center bg-[#A9411D]">
      <div className="p-6 bg-[#EBE5DD] h-screen w-full max-w-3xl">
        <Header
          style="flex w-full justify-between mb-4"
          buttonTextLeft={<img className="h-4 w-10" src="Arrow_Left.png"></img>}
          buttonTextRight=":"
          type="button"
          linkBack="/"
        />
        <CartList
          title={title}
          price="10.00"
          details="Noodle with Pork"
          image="Yakisoba.png"
        />
      </div>
    </div>
  );
};

export default Bag;
