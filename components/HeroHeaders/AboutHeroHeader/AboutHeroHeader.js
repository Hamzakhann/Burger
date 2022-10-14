import { Typography } from "@mui/material";
import React from "react";
import Divider from "../../Divider/Divider";
import styles from "./AboutHeroHeader.module.scss";

const AboutHeroHeader = () => {
  return (
    <div className={styles.about_hero_header_container}>
      <div className={styles.overlay}></div>
      <div className={styles.about_hero_header_content_container}>
        <Typography variant="h2">ABOUT US</Typography>
        <Divider width={100} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </Typography>
      </div>
    </div>
  );
};

export default AboutHeroHeader;
