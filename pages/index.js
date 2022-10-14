import React from "react";
import { Typography } from "@mui/material";
import Layout from "../layout/layout";
import Snacks from "../components/Snacks/Snacks";
import DiscountPromo from "../components/DiscountPromo/DiscountPromo";
import BestTasted from "../components/BestTasted/BestTasted";
import BestMenu from "../components/BestMenu/BestMenu";
import ServesYou from "../components/ServesYou/ServesYou";
import FoodByPhone from "../components/FoodByPhone/FoodByPhone";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";
import OurNewsAndArticle from "../components/OurNewsAndArticle/OurNewsAndArticle";
import ExclusiveUpdate from "../components/ExclusiveUpdate/ExclusiveUpdate";
import HeroHeader from "../components/HeroHeaders/HeroHeader/HeroHeader";

const Home = () => {
  return (
    <Layout>
      <HeroHeader />
      <Snacks />
      <DiscountPromo />
      <BestTasted />
      <BestMenu />
      <ServesYou />
      <FoodByPhone />
      <CustomerReview />
      <SpecialOffer />
      <OurNewsAndArticle />
      <ExclusiveUpdate />
    </Layout>
  );
};

export default Home;
