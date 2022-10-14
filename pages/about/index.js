import React from "react";
import BestChef from "../../components/BestChef/BestChef";
import BestTasted from "../../components/BestTasted/BestTasted";
import AboutHeroHeader from "../../components/HeroHeaders/AboutHeroHeader/AboutHeroHeader";
import OurHealth from "../../components/OurHealth/OurHealth";
import ServesYou from "../../components/ServesYou/ServesYou";
import Layout from "../../layout/layout";

const About = () => {
  return (
    <Layout>
      <AboutHeroHeader />
      <BestTasted />
      <OurHealth />
      <ServesYou />
      <BestChef />
    </Layout>
  );
};

export default About;
