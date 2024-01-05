import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logements from "../../data/logements.json";

const Card = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(Logements);
  }, []);

  return (
    <section className="gallery">
      {data.map((logement) => (
        <NavLink
          to={{
            pathname: `/listing/${logement.id}`,
            state: { logement: logement }
          }}
          className="card"
          key={logement.id}
        >
          <img src={logement.cover} alt={logement.title} />
          <h3>{logement.title}</h3>
        </NavLink>
      ))}
    </section>
  );
};

export default Card;