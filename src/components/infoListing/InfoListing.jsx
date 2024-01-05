import React from "react";
import starEmpty from "../../assets/images/starEmpty.svg";
import starFilled from "../../assets/images/starFilled.svg";

const InfoAccommadation = ({
  title,
  location,
  tags,
  name,
  picture,
  rating,
}) => {
  // RATING:----------------------------------------------------
  // transform string in number:
  const ratingNum = parseInt(rating);

  // Array with the number of stars corresponding to the rating
  const filledStars = Array.from({ length: ratingNum }, (i) => i);

  // Array with the remaining stars
  const emptyStars = Array.from(
    { length: 5 - ratingNum },
    (i) => i + ratingNum
  );
// -------------------------------------------------------------
  return (
    <section className="sectionInfo">
      <div className="info">
        <h3 className="info__title">{title}</h3>
        <p className="info__location">{location}</p>
        {/* tags */}
        <div className="info__tags">
          {tags.map((tag) => (
            <span key={tag} className="info__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="containerHost">
        {/* host */}
        <div className="host">
          <h3>{name}</h3>
          <img src={picture} alt={name} />
        </div>
        {/* rating */}
        <div className="rating">
          {filledStars.map((star) => (
            <img key={star} src={starFilled} alt="Filled Star" />
          ))}
          {emptyStars.map((star) => (
            <img key={star} src={starEmpty} alt="Empty Star" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoAccommadation;