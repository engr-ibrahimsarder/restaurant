import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{ 
        fetch('reviews.json')
        .then(res=>res.json())    
        .then(data=> {
            setReviews(data)
            console.log(data)
        })
    },[]); 
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-7xl mx-auto">
            {
                reviews.map(review=>
                    <SwiperSlide key={review._id}>

                        <div className="text-center px-24 my-10">
                            <div className="flex justify-center">
                            <RiDoubleQuotesL className="text-xl" />
                            </div>
                        
                           <p className="my-5">{review.details}</p> 
                           <h1 className="text-xl">{review.name}</h1>
                        </div>
                    </SwiperSlide>
                )
            }
      </Swiper>
    </div>
  );
};

export default Reviews;