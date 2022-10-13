import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Buttons/Buttons";
import styles from "./HeroHeader.module.scss";
import { faDroplet, faUtensils } from "@fortawesome/free-solid-svg-icons";

const HeroHeader = () => {
  return (
    <div className={styles.hero_header_container}>
      <div className={styles.overlay}></div>
      <div className={styles.hero_header}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.hero_header_img_container}>
              <Image
                src="/images/hero_1.png"
                alt="hero header image"
                width={510}
                height={633}
                objectFit="contain"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.hero_header_content_container}>
              <Typography variant="h1">
                Enjoy Burgry Make Your Tummy Happy
              </Typography>
              <div className={styles.divider}>
                <Divider />
              </div>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </Typography>
              <div className={styles.status_leaf_container}>
                <div className={styles.status_tags}>
                  <FontAwesomeIcon
                    icon={faUtensils}
                    color="#ffba00"
                    style={{ width: "35", height: "35px" }}
                  />
                  <Typography variant="h5">Delicious</Typography>
                </div>
                <div className={styles.status_tags}>
                  <FontAwesomeIcon
                    icon={faDroplet}
                    color="#ffba00"
                    style={{ width: "35", height: "35px" }}
                  />
                  <Typography variant="h5">Freash</Typography>
                </div>
                <div className={styles.status_tags}>
                  <Image
                    src="/images/leaf.svg"
                    alt="leaf icon"
                    width={35}
                    height={35}
                    objectFit="contain"
                  />
                  <Typography variant="h5">Organic</Typography>
                </div>
              </div>
              <div className={styles.btn_container}>
                <PrimaryButton>Learn More</PrimaryButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroHeader;
