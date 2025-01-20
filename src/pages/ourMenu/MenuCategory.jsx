import CoverImage from "../shared/CoverImage";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({bannerImg, title, item}) => {
  return (
    <div>
        <div>
        <CoverImage
        title={title}
        bannerImg={bannerImg}
        ></CoverImage>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
        {
            item.map(food=><MenuItem
            item={food}
            ></MenuItem>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;