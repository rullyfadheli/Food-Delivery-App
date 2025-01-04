import { getData } from "../_lib/logic";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import Navbar from "../components/Navbar";

const data = await getData();
export default function AllProducts() {
  return (
    <div className="md:justify-center md:flex bg-primary font-inter">
      <ul className="flex flex-col h-content w-full max-w-3xl bg-secondary p-6">
        <Header
          title="All Products"
          style="flex jusify-between h-16 w-full"
          linkBack="/"
          buttonTextLeft={
            <Image width={40} height={40} src="/Arrow_Left.png" />
          }
        />
        {data.map((items) => (
          <li
            key={items.id}
            className="border-solid border-2 border-primary h-content my-4 rounded-md"
          >
            <Link className="flex" href={`/product/${items.id}`}>
              <div className="bg-primary rounded-sm">
                <Image width={100} height={100} src={`/${items.image}`} />
              </div>
              <div className="ml-6">
                <h1 className="font-bold font-inter my-2">{items.title}</h1>
                <p className="text-sm opacity-40">{items.details}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Navbar adjustPosition="md:right-[-15px] lg:left-[502px]" />
    </div>
  );
}
