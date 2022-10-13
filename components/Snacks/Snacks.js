import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Snacks.module.scss";

const Snacks = () => {
  return (
    <div className={styles.snacks_container}>
      <div className={`${styles.snacks_bar} ${styles.primary}`}>
        <div className={styles.snack_img_container}>
          <Image
            src="/images/snack_1.png"
            alt="snacks images"
            width={102}
            height={91}
            objectFit="contain"
          />
        </div>
        <div className={styles.snack_content_container}>
          <Typography variant="h4">FOOD</Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit.
          </Typography>
          <Typography className={styles.buy_online} variant="body1">
            Buy Online
          </Typography>
        </div>
      </div>
      <div className={`${styles.snacks_bar} ${styles.secondary}`}>
        <div className={styles.snack_img_container}>
          <Image
            src="/images/snack_2.png"
            alt="snacks images"
            width={102}
            height={91}
            objectFit="contain"
          />
        </div>
        <div className={styles.snack_content_container}>
          <Typography variant="h4">SNACK</Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit.
          </Typography>
          <Typography className={styles.buy_online} variant="body1">
            Buy Online
          </Typography>
        </div>
      </div>
      <div className={`${styles.snacks_bar} ${styles.danger}`}>
        <div className={styles.snack_img_container}>
          <Image
            src="/images/snack_3.png"
            alt="snacks images"
            width={102}
            height={91}
            objectFit="contain"
          />
        </div>
        <div className={styles.snack_content_container}>
          <Typography variant="h4">BEVERAGE</Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit.
          </Typography>
          <Typography className={styles.buy_online} variant="body1">
            Buy Online
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Snacks;
