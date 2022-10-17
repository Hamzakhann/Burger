import React from "react";
import BestChef from "../../components/BestChef/BestChef";
import BestTasted from "../../components/BestTasted/BestTasted";
import ExclusiveUpdate from "../../components/ExclusiveUpdate/ExclusiveUpdate";
import AboutHeroHeader from "../../components/HeroHeaders/AboutHeroHeader/AboutHeroHeader";
import CustomHeroHeader from "../../components/HeroHeaders/CustomHeroHeader/CustomHeroHeader";
import OurHealth from "../../components/OurHealth/OurHealth";
import ServesYou from "../../components/ServesYou/ServesYou";
import Layout from "../../layout/layout";

const About = () => {
  return (
    <Layout>
      {/* <AboutHeroHeader /> */}
      <CustomHeroHeader
        title={"ABOUT US"}
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
        borderW={100}
        bgImage="/images/about_hero_1.jpeg"
      />
      <BestTasted />
      <OurHealth />
      <ServesYou />
      <BestChef />
      <ExclusiveUpdate />
    </Layout>
  );
};

export default About;
