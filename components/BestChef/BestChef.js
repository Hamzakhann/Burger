import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./BestChef.module.scss";

const BestChef = () => {
  return (
    <div className={styles.best_chef_container}>
      <div className={styles.best_chef_content_container}>
        <Typography variant="h2">OUR BEST CHEF</Typography>
        <Divider width={150} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </Typography>
      </div>
      <div className={styles.best_chef_card_container}>
        <Grid container>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.best_chef_card}>
              <Image
                src="/images/best_chef_1.jpeg"
                alt="best chef images"
                width={"100%"}
                height={"100%"}
                objectFit="contain"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BestChef;
