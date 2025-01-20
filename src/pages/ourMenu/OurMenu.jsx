import CoverImage from "../shared/CoverImage";
import SectionHeading from "../../components/SectionHeading"
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import bannerImg from "../../assets/home/chef-service.jpg"
import coverImg from "../../assets/menu/banner3.jpg"

const OurMenu = () => {
  const [menu] = useMenu()
  const popular  = menu.filter(food => food.category === "popular")
  const dessert  = menu.filter(food => food.category === "dessert")
  const pizza  = menu.filter(food => food.category === "pizza")
  const salad  = menu.filter(food => food.category === "salad")
  const soup  = menu.filter(food => food.category === "soup")
  console.log(popular, dessert, pizza, salad, soup)
  return (
    <div>
      <CoverImage
       title="Our Menu"
       bannerImg={coverImg}
      ></CoverImage>
      <SectionHeading    
      title="Don't Miss"
      heading="Today's Offer"
      ></SectionHeading>
      <MenuCategory
      title="Desserts"
      bannerImg={bannerImg}
      item={popular}
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;