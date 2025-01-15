
const MenuItem = ({item}) => {
  const {name, image, price, recipe} = item;

  return (   
    <div className="flex gap-5">
      <img className="w-16 h-16" style={{borderRadius: "0px 50px 50px 50px"}} src={image} alt="food" />
      <div>
        <h1 className="text-xl">{name}------------</h1>
        <p className="w-96">{recipe}</p>
      </div>
      <div>
        <p className="text-orange-400">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;