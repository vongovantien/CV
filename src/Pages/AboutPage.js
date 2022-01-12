import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Web Design"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"C#"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Python"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Java"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"PHP"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React Js"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"Node Js"} progress={"30%"} width={"30%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Coding static pages, building commercial website, Restful API"}
        />
        <ServicesSection
          image={intelligence}
          title={"Desktop Application"}
          text={"Product Management with .Net Framework"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
