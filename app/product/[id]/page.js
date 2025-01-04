"use client";
import { supabase } from "@/app/_lib/supabase";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { useRouter } from "next/router";
/**
 * This component renders the details of a product, including its image, price, title, and full details.
 * It also provides functionality to toggle the display of full details and to send a WhatsApp message
 * regarding the product.
 *
 * @component
 * @param {Object} params - The parameters passed to the component.
 * @param {Object} params.params - The parameters object.
 * @param {string} params.params.id - The ID of the product.
 *
 * @returns {JSX.Element} The rendered ProductDetails component.
 *
 * @example
 * <ProductDetails params={{ id: '123' }} />
 */
export default function ProductDetails({ params }) {
  // const router = useRouter();
  // const { id } = router.query;

  // console.log(id);
  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", params.id);
      if (error) console.log(error);
      setProduct(data);
    }
    getData();
  }, [params.id]);
  const [product, setProduct] = useState([]);

  function sendWhatsappMessage() {
    const phoneNumber = 6285783052362;
    const message = `Hey, I want to ask about this product, http://localhost:3000/product/${productId}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  const [detailsToggle, setDetailsToggle] = useState(false);

  if (product.length >= 1) {
    const { title, price, image, fullDetails } = product[0];
    return (
      <div className="md:justify-center md:flex bg-[#A9411D] font-inter">
        <div className="max-sm:h-full h-screen w-full max-w-3xl bg-[#EBE5DD] p-6">
          <Header
            title={title}
            style="font-bold"
            buttonTextLeft={
              <Image width={20} height={20} src={"/Arrow_left.png"} />
            }
            linkBack="/"
          />
          <div className="flex">
            <div className="mr-12">
              <div className="bg-primary rounded-3xl">
                <Image width={100} height={100} src={`/${image}`} />
              </div>
              <h3 className="flex justify-center py-4 font-bold">
                ${price}.00
              </h3>
            </div>
            <div className="w-full max-w-[60%]">
              <p>
                {detailsToggle === true
                  ? fullDetails
                  : fullDetails.substr(0, 100) + "..."}
              </p>
              <Button
                onClick={() => setDetailsToggle(!detailsToggle)}
                text={detailsToggle === true ? "See less" : "See more"}
                style="opacity-[60%] mt-2"
              />
              <div className="flex">
                <Button
                  style="mt-4 px-4 py-2 border-2 border-[#A9411D] border-solid rounded-2xl"
                  text="Add to bag"
                  onClick={() => handleAddToBag(product.id)}
                />
                <Button
                  style="mx-4 mt-4 px-4 py-2 border-2 border-[#A9411D] border-solid rounded-2xl"
                  text="Contact us"
                  onClick={() => sendWhatsappMessage()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
