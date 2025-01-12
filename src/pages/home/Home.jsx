import SectionHeading from "../../components/SectionHeading";
import Banner from "./Banner";
import Category from "./Category";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading
      title="From 11:00am to 10:00pm"
      heading="ORDER ONLINE"
      ></SectionHeading>
      <Category></Category>
      <SectionHeading
      title="Check it out"
      heading="From Our Menu"
      ></SectionHeading>
      <Menu></Menu>
    </div>
  );
};

export default Home;