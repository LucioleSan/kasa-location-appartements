import React from "react";
import { useLocation } from "react-router-dom";
import imgHome from "../../assets/images/Banner.png";
import imgAbout from "../../assets/images/aboutImg.png";

const BannerImg = () => {
  
  const location = useLocation();
 
  const isHomePage = location.pathname === "/";
  

  return (
    <div className="bannerHome">
      <div className=" bannerHome__overlay">
      {/*Displaying either home image or about image based on isHomePage*/}
        <img src={isHomePage ? imgHome : imgAbout} alt="Banner_image" />
      </div>
      {isHomePage && (
        <h1 className="mainTitle">
          Chez vous,
          <br className="br" /> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default BannerImg;