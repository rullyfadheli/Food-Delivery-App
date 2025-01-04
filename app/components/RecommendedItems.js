import { getRecommendedItems } from "../_lib/logic";
import Card from "./Card";

const response = await getRecommendedItems();

const RecommendedItems = () => {
  return (
    <div className="flex overflow-x-auto">
      {response.data.map((res) => {
        return (
          <Card
            key={res.id}
            title={res.title}
            details={res.details}
            image={res.image}
            id={res.id}
            price={res.price}
          />
        );
      })}
    </div>
  );
};

export default RecommendedItems;
