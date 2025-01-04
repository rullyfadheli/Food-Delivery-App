import MainHeader from "../components/MainHeader";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Product from "../product/page";
import Image from "next/image";
import { auth } from "../auth";
import { getSession } from "../_lib/logic";

const session = "hello";
const username = session?.user?.name;
const profilePicture = session?.user?.image;

const Home = () => {
  return (
    <div>
      <div className="md:justify-center md:flex bg-[#A9411D]">
        <div className="font-inter md:h-screen h-full w-full max-w-3xl bg-[#EBE5DD] p-6">
          {/* Header */}
          <MainHeader
            title={!username ? "Food Delivery App" : `Hello, ${username}`}
            buttonTextLeft={
              <Image
                src={`${profilePicture || "/logo.png"}`}
                width={42}
                height={42}
                className="rounded-full my-1"
              />
            }
            buttonTextRight={
              <img className="h-4 w-4" src="Notification.png"></img>
            }
          />
          {/* Banner */}
          <Banner />

          {/* Search menu */}
          <div className="my-4 flex flex-row justify-between">
            <Search />
          </div>
          {/* Popular Items */}
          <Product />
          {/* Navbar */}
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
