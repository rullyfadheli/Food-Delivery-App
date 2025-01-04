import Navigator from "../components/Navigator";
import PopularItems from "../components/PopularItems";
import RecommendedItems from "../components/RecommendedItems";

export default function Product() {
  return (
    <div>
      <div className="w-full flex justify-between">
        <p className="font-inter text-md">Popular Items</p>
        <Navigator
          link="/all-products"
          text="See more"
          style="text-[#968B7B]"
        />
      </div>
      {/* Product cards */}
      <div className="flex">
        <PopularItems />
      </div>
      {/* Recommended Products */}
      <div className="w-full flex justify-between">
        <p className="font-inter text-md">Recommended Items</p>
        <Navigator
          link="/all-products"
          text="See more"
          style="text-[#968B7B]"
        />
      </div>
      <div className="flex">
        <RecommendedItems />
      </div>
    </div>
  );
}
