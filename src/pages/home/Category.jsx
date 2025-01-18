import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <Swiper
    className="max-w-7xl mx-auto"
    spaceBetween={50}
    slidesPerView={4}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <img src={slide1} alt="" />
        <h1 className="text-center text-xl  -mt-24 uppercase pb-10">Salad</h1>
    </SwiperSlide> 
    <SwiperSlide>
    <img src={slide2} alt="" />
    <h1 className="text-center text-xl -mt-24 uppercase pb-10">Soups</h1>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide3} alt="" />
    <h1 className="text-center text-xl -mt-24 uppercase pb-10">Pizzas</h1>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide4} alt="" />
    <h1 className="text-center text-xl -mt-24 uppercase pb-10">Desserts</h1>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide5} alt="" />
    <h1 className="text-center text-xl -mt-24 uppercase pb-10">Salad</h1>
    </SwiperSlide>
  </Swiper>
  );
};

export default Category;