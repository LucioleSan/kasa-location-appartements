import React, { useState } from "react";
import arrowLeft from "../../assets/images/arrow_back.png";
import arrowRight from "../../assets/images/arrow_right.png";

const Slideshow = ({ slidesList }) => {
  
  const [index, setIndex] = useState(0);
  const length = slidesList.length;
  const currentSlide = slidesList[index];
  

  return (
    <div className="carousel">
      {
      slidesList.length > 1 &&
      <img
        src={arrowLeft}
        alt="fleche location précédente"
        onClick={() => {
          index === 0 ? setIndex(slidesList.length - 1) : setIndex(index - 1);
        }}
        className="arrowLeft"
        key={slidesList.id}
        loading="lazy"
      />
    }

      {
      slidesList.length > 1 &&
      <img
        src={arrowRight}
        alt="fleche location suivante"
        onClick={() => {
          index === slidesList.length - 1 ? setIndex(0) : setIndex(index + 1);
        }}
        className="arrowRight"
        loading="lazy"
      />
    }

        
        
        <img src={currentSlide} alt={currentSlide} loading="lazy" />

        {
        slidesList.length > 1 &&
        <p>{index + 1 + "/" + length}</p>
      }

      </div>
      
  );
};

export default Slideshow;