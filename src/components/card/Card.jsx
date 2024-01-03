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
      {data.map((item, index) => (
        <NavLink
          to={/listing/ + item.id}
          state={{ logement: data[index] }}
          className="card"
          key={item.id}
        >
          <img src={item.cover} alt={item.title} />
          <h3>{item.title}</h3>
        </NavLink>
      ))}
    </section>
  );
};

export default Card;