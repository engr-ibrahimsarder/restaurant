import { useEffect, useState } from "react";
import Review from "./Review";

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
      <Review></Review>
    </div>
  );
};

export default Reviews;