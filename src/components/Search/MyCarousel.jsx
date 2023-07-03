import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imagesList } from "../../constant";
import ImageCard from "./ImageCard";
import React from "react";
const MyCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
 

  return (
    <div className="flex overflow-hidden mx-20 z-10">
      <Carousel
        responsive={responsive}
        transitionDuration={500}
        infinite={false}
        className="bg-white p-14 "
      >
        {
          imagesList.map((image, i) =><ImageCard image={image} key={i}/> )
        }
       
        
      </Carousel>
    </div>
  );
};

export default MyCarousel;
