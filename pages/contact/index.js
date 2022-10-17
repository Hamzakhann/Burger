import React from "react";
import Contact from "../../components/Contact/contact";
import CustomHeroHeader from "../../components/HeroHeaders/CustomHeroHeader/CustomHeroHeader";
import Maps from "../../components/Maps/Maps";
import Layout from "../../layout/layout";

const Index = () => {
  return (
    <Layout>
      <CustomHeroHeader
        title={"CONTACT US"}
        description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
`}
        borderW={100}
        bgImage={"/images/contact_hero.jpeg"}
      />
      <Contact />
      <Maps />
    </Layout>
  );
};

export default Index;
