import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Buttons/Buttons";
import Divider from "../Divider/Divider";
import styles from "./SpecialOffer.module.scss";

const SpecialOffer = () => {
  return (
    <div className={styles.special_offer_container}>
      <div className={styles.special_img_container}>
        <Image
          src="/images/special_img_1.jpeg"
          alt="special image"
          width={"100%"}
          height={"100%"}
          layout="fill"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.special_offer_content_container}>
        <Typography variant="h2">
          GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION
        </Typography>
        <Divider width={150} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </Typography>
        <div className={styles.btn_container}>
          <PrimaryButton>Book a Reservation</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
