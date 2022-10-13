import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
// import { } from "@fortawesome/free-solid-svg-icons";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <div className={styles.footer_item_container}>
            <div className={styles.footer_img_container}>
              <Image
                src="/images/logo.png"
                alt="logo image"
                width={172}
                height={43}
                objectFit="contain"
              />
            </div>
            <Typography variant="body1" className={styles.logo_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={styles.footer_item_container}>
            <Typography variant="h3">SUPPORT</Typography>
            <Typography variant="body1">FAQ's</Typography>
            <Typography variant="body1">Privacy Policy</Typography>
            <Typography variant="body1">Term {"&"} Conditions</Typography>
            <Typography variant="body1">Contact</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={styles.footer_item_container}>
            <Typography variant="h3">SUPPORT</Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faPhone} color="#ffba00" />{" "}
              +62831-2864-349-1
            </Typography>
            <Typography variant="h3">EMAIL</Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faEnvelope} color="#ffba00" />{" "}
              contact@burgry.com
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={styles.footer_item_container}>
            <Typography variant="h3">ADDRESS</Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faLocationDot} color="#ffba00" /> Jl.
              Pantai Kuta No. 34, Badung, Bali.
            </Typography>
            <Typography variant="h3">FOLLOW US</Typography>
            <div className={styles.social_links_container}>
              <Image
                src="/images/facebook-f.svg"
                alt="fb icon"
                width={11}
                height={18}
                objectFit="contain"
              />
              <Image
                src="/images/twitter.svg"
                alt="fb icon"
                width={18}
                height={18}
                objectFit="contain"
              />
              <Image
                src="/images/instagram.svg"
                alt="fb icon"
                width={18}
                height={18}
                objectFit="contain"
              />
              <Image
                src="/images/twitter.svg"
                alt="fb icon"
                width={18}
                height={18}
                objectFit="contain"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.footer_line_container}>
        <Typography variant="body1">Burger Template Kit by Jegtheme</Typography>
        <Typography variant="body1">
          Copyright © 2021. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
