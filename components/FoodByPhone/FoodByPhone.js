import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./FoodByPhone.module.scss";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FoodByPhone = () => {
  return (
    <div className={styles.food_by_phone_container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.food_by_phone_img_container}>
            <Image
              src="/images/food_phone_1.jpeg"
              alt="store image"
              width={383}
              height={667}
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.food_by_phone_content_container}>
            <Typography variant="h2">
              DON'T WORRY ! YOU CAN ORDER YOUR FOOD JUST BY PHONE
            </Typography>
            <Divider width={130} />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </Typography>
            <div className={styles.special_tags_container}>
              <div className={styles.special_tags}>
                <div className={styles.special_tags_img}>
                  <Image
                    src="/images/truck-moving.svg"
                    alt="delivery logo"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </div>
                <div className={styles.special_tags_content}>
                  <Typography variant="h3">FREE DELIVERY</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </div>
              </div>
              <div className={styles.special_tags}>
                <div className={styles.special_tags_img}>
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    color={"#fff"}
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <div className={styles.special_tags_content}>
                  <Typography variant="h3">SPECIAL PROMO</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.socials_store_container}>
              <div className={styles.img_container}>
                <Image
                  src="/images/apple_store.png"
                  alt="apple store"
                  width={169}
                  height={57}
                  objectFit="contain"
                />{" "}
              </div>
              <div className={styles.img_container}>
                <Image
                  src="/images/google_play.png"
                  alt="apple store"
                  width={183}
                  height={56}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FoodByPhone;
