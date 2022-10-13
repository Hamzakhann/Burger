import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./DiscountProm.module.scss";

const DiscountPromo = () => {
  return (
    <div className={styles.promo_container}>
      <div className={styles.promo}>
        <div className={styles.promo_content_container}>
          <Typography variant="body1" className={styles.primary}>
            Payday promo
          </Typography>
          <Typography variant="h3">
            GET A 10% DISCOUNT ON PAYDAY WEEK
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body1" className={styles.primary}>
            Buy Online
          </Typography>
        </div>
        <div className={styles.promo_img_container}>
          <Image
            src="/images/promo_1.png"
            alt="promo image"
            width={157}
            height={211}
            objectFit="contain"
          />
        </div>
      </div>{" "}
      <div className={styles.promo}>
        <div className={styles.promo_content_container}>
          <Typography variant="body1" className={styles.primary}>
            Payday promo
          </Typography>
          <Typography variant="h3">
            GET A 10% DISCOUNT ON PAYDAY WEEK
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body1" className={styles.primary}>
            Buy Online
          </Typography>
        </div>
        <div className={styles.promo_img_container}>
          <Image
            src="/images/promo_2.png"
            alt="promo image"
            width={193}
            height={211}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountPromo;
