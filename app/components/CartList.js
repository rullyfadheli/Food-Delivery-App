"use client";
import { useReducer } from "react";
import Button from "./Button";

// Updating item quantity
const CartList = (data) => {
  const { title, details, price, image } = data;
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const quantity = state.count;

  return (
    <div className="h-content w-full flex justify-between md:justify-normal">
      <div className="h-content md:py-4 mr-4 p-1 md:h-full w-2/5 rounded-3xl bg-[#A9411D] flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div className="flex w-2/6 pl-2 md:pl-6 flex-col font-inter">
        <h3>{title}</h3>
        <p className="text-sm text-[#968B7B]">{details}</p>
        <p className="py-1">$ {Number(price)}</p>
        <div className="flex justify-between w-24">
          <Button
            type="button"
            style="flex px-2 jusify-center items-center rounded-full border-solid border-2 border-[#968B7B] text-[#968B7B]"
            text="-"
            onClick={() => quantity > 0 && dispatch({ type: "decrement" })}
          />
          <p>{quantity}</p>
          <Button
            type="button"
            style="flex pl-[6px] pr-[6px] jusify-center items-center rounded-full border-solid border-2 border-[#968B7B] text-[#968B7B]"
            text="+"
            onClick={() => dispatch({ type: "increment" })}
          />
        </div>
      </div>
      <div className="flex justify-end text-[#968B7B] md:w-full">
        <Button text="Remove" style="font-inter" />
      </div>
    </div>
  );
};

export default CartList;
