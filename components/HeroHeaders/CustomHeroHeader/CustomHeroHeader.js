import { Typography } from "@mui/material";
import React from "react";
import Divider from "../../Divider/Divider";
import styles from "./CustomHeroHeader.module.scss";

const CustomHeroHeader = ({ title, description, borderW, bgImage }) => {
  return (
    <div
      className={styles.CustomHeroHeader}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.about_hero_header_content_container}>
        <Typography variant="h2">{title}</Typography>
        <Divider width={borderW} />
        <Typography variant="body1">{description}</Typography>
      </div>
    </div>
  );
};

export default CustomHeroHeader;
