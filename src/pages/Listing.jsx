import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DropDown from "../components/dropdown/DropDown";
import InfoAccommodation from "../components/infoListing/InfoListing";
import logementsData from "../data/logements.json";

const Accommodation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [logement, setLogement] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const foundLogement = logementsData.find((item) => item.id === id);
    if (!foundLogement) {
      navigate('/Erreur');
      return;
    }

    setLogement(foundLogement);
  }, [id, navigate]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  // Extraction des données pour faciliter l'accès
  const { title, location: logLocation, tags, rating, description, equipments, host, cover } = logement;
  const equipmentList = (equipments || []).map((equi, index) => <li key={index}>{equi}</li>);
  
  return (
    <main>
      <InfoAccommodation
        title={title}
        tags={tags || []}
        location={logLocation}
        rating={rating}
        name={host?.name}
        picture={host?.picture}
        cover={cover} 
      />

      <section className="dropDownAccommodation">
        <DropDown
          key="0"
          title="Description"
          content={description}
          isList={false}
          open={true}
        />
        <DropDown
          key="1"
          title="Équipements"
          content={<ul>{equipmentList}</ul>}
          isList={true}
          open={true}
        />
      </section>
    </main>
  );
};

export default Accommodation;