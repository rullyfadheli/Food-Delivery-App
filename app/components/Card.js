import Link from "next/link";
import Image from "next/image";
import Navigator from "./Navigator";
import Button from "./Button";

/**
 * Card component to display product information.
 *
 * @param {Object} data - The data object containing product information.
 * @param {string} data.title - The title of the product.
 * @param {string} data.details - The details or description of the product.
 * @param {string} data.price - The price of the product.
 * @param {string} data.image - The image URL of the product.
 * @param {string} data.id - The unique identifier for the product.
 *
 * @returns {JSX.Element} The JSX element representing the product card.
 */
export default function Card(data) {
  const { title, details, price, image, id } = data;

  return (
    <div>
      <span
        key={id}
        className="min-h-[198px] mx-2 text-center font-inter rounded-3xl my-6 h-content w-[184px] relative bg-[#A9411D] flex justify-center items-center flex-col"
      >
        <Link className="flex flex-col items-center" href={`/product/${id}`}>
          <Image
            width={100}
            height={100}
            alt={`${title}`}
            className="mt-[-30px] max-h-[100px] max-w-[70%]"
            src={`/${image}`}
          />
          <p className="font-semibold text-white">{title}</p>
          <p className="text-sm text-[#F8BF40]">{details}</p>
          <p className="mt-2 mb-1 font-semibold text-white">${price}.00</p>
        </Link>
        <Navigator
          link={`/bag?id=${id}`}
          text={
            <Image
              width={34}
              height={34}
              alt="Bag"
              className="p-2 bg-[#F8BF40] rounded-full mb-2"
              src="/Bag.png"
            />
          }
        />
      </span>
    </div>
  );
}
