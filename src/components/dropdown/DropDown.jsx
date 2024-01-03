import React, { useState } from "react";
import arrowUp from "../../assets/images/arrow_up.png";
import arrowDown from "../../assets/images/arrow_down.png";

const DropDown = ({ title, content, isList = false, open= false }) => {
  // Using state to keep track of dropdown status (open or closed)
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="dropDown">
      <div className="dropDown__header" onClick={toggleOpen}>
        <h3 className="dropDown__title">{title}</h3>
        {isOpen ? (
          <img src={arrowUp} alt="fermé" />
        ) : (
          <img src={arrowDown} alt="ouvert" />
        )}
      </div>
      {/* Displaying content of the dropdown if it is open */}
      {isList === true
        ? isOpen && <ul className="dropDown__content">{content}</ul>
        : isOpen && <p className="dropDown__content">{content}</p>}
    </article>
  );
};

export default DropDown;