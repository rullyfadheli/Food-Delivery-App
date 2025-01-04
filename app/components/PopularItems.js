import { getPopularItems } from "../_lib/logic";
import Card from "./Card";

const response = await getPopularItems();

const PopularItems = () => {
  return (
    <div className="flex overflow-x-auto">
      {response.data.map((items) => {
        return (
          <Card
            key={items.id}
            title={items.title}
            details={items.details}
            image={items.image}
            popular={items.popular}
            recommended={items.recommended}
            id={items.id}
            price={items.price}
          />
        );
      })}
    </div>
  );
};

export default PopularItems;
