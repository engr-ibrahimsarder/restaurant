import OurShopCard from "./OurShopCard";

const OurShopTab = ({foods}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
       {
            foods.map((food)=><OurShopCard
            key={food._id}
            food={food}
            ></OurShopCard>)
          }
    </div>
  );
};

export default OurShopTab;