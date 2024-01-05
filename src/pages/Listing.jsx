import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfoListing from "../components/infoListing/InfoListing";
import Logements from "../data/logements.json"; 

const Listing = () => {
  const { id } = useParams(); 
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Trouvez l'annonce par son ID
    const foundLogement = Logements.find((item) => item.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      // Gérer le cas où l'annonce n'est pas trouvée
      // Par exemple, rediriger l'utilisateur ou afficher un message
    }
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>; 
  }

  return (
    <main>
      <InfoListing
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        name={logement.host.name}
        picture={logement.host.picture}
        rating={logement.rating}

        
      />
      {/* Autres composants ou informations si nécessaire */}
    </main>
  );
};

export default Listing;