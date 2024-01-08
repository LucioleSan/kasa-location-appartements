import React, { useState } from "react";
import arrowDown from "../../assets/images/arrow_up.png";

const DropDown = ({ title, content, isList = false, open= false }) => {
  
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="dropDown">
      <div className="dropDown__header" onClick={toggleOpen}>
        <h3 className="dropDown__title">{title}</h3>
        <img src={arrowDown} alt={isOpen ? "fermé" : "ouvert"} className={isOpen ? "rotated" : ""} />
      </div>
      {isList === true
        ? isOpen && <ul className="dropDown__content">{content}</ul>
        : isOpen && <p className="dropDown__content">{content}</p>}
    </article>
  );
};

export default DropDown;