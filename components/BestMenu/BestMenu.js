import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./BestMenu.module.scss";

const BestMenu = () => {
  return (
    <div className={styles.best_menu_container}>
      <div className={styles.best_menu_header_container}>
        <Typography variant="h2">OUR BEST MENU</Typography>
        <Divider width={150} />
        <Typography
          variant="body1"
          className={styles.best_menu_header_description}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </Typography>
        <div className={styles.best_menu_tabs_container}>
          <div className={styles.tabs_active}>
            <Typography variant="body1">Food</Typography>
          </div>
          <div className={styles.tabs}>
            <Typography variant="body1">Snack</Typography>
          </div>
          <div className={styles.tabs}>
            <Typography variant="body1">Beverage</Typography>
          </div>
        </div>
      </div>
      <div className={styles.best_menu_card_container}>
        <Grid container spacing={8}>
          {Array(8)
            .fill()
            .map((item, i) => (
              <Grid item xs={12} md={6} lg={3} key={i}>
                <div className={styles.best_menu_card}>
                  <div className={styles.best_menu_card_image_container}>
                    <Image
                      src="/images/best_menu_1.png"
                      width={204}
                      height={165}
                      objectFit="contain"
                      alt="best menu images"
                    />
                  </div>
                  <div className={styles.best_menu_card_content_container}>
                    <Typography
                      variant="h3"
                      className={styles.best_menu_card_title}
                    >
                      REGULAR BEEF BURGER
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.best_menu_card_description}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Typography>
                    <Typography
                      variant="h3"
                      className={styles.best_menu_card_price}
                    >
                      $42.00
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default BestMenu;
