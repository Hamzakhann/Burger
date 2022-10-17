import React from "react";
import BestMenu from "../../components/BestMenu/BestMenu";
import DiscountPromo from "../../components/DiscountPromo/DiscountPromo";
import ExclusiveUpdate from "../../components/ExclusiveUpdate/ExclusiveUpdate";
import FoodByPhone from "../../components/FoodByPhone/FoodByPhone";
import CustomHeroHeader from "../../components/HeroHeaders/CustomHeroHeader/CustomHeroHeader";
import ServesYou from "../../components/ServesYou/ServesYou";
import Layout from "../../layout/layout";

const Index = () => {
  return (
    <Layout>
      <CustomHeroHeader
        title={"MENU"}
        description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
`}
        borderW={100}
        bgImage={"/images/about_hero_1.jpeg"}
      />
      <BestMenu />
      <DiscountPromo />
      <ServesYou />
      <FoodByPhone />
      <ExclusiveUpdate />
    </Layout>
  );
};

export default Index;
