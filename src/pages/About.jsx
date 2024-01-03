import React from 'react';
import BannerImg from "../components/banner/BannerImg";
import DropDown from "../components/dropdown/DropDown";
import { dropDownData } from "../data/dropDownData";

const DropDownAbout = ({ data }) => {
  return (
    <section>
      {data.map((item, index) => (
        <DropDown key={index} title={item.title} content={item.paragraph} />
      ))}
    </section>
  );
};

const About = () => {
  return (
    <main>
      <BannerImg />
      <DropDownAbout data={dropDownData} />
    </main>
  );
};

export default About;