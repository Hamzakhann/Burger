import { Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "../../Divider/Divider";
import styles from "./GetCloser.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const GetCloser = () => {
  return (
    <div className={styles.get_closer_container}>
      <Typography variant="h2" className={styles.title}>
        GET CLOSER
      </Typography>
      <Divider width={120} />
      <Typography variant="body1" className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </Typography>
      <div className={styles.close_container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.close}>
              <div className={styles.img_container}>
                <FontAwesomeIcon
                  icon={faMap}
                  color="#ffba00"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className={styles.content_container}>
                <Typography variant="h3">LOCATION</Typography>
                <Typography variant="body1">
                  Jl. Pantai Kuta No.34, Badung, Bali
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.close}>
              <div className={styles.img_container}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="#ffba00"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className={styles.content_container}>
                <Typography variant="h3">EMAIL</Typography>
                <Typography variant="body1">contact@burgry.com</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.close}>
              <div className={styles.img_container}>
                <FontAwesomeIcon
                  icon={faPhone}
                  color="#ffba00"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className={styles.content_container}>
                <Typography variant="h3">PHONE</Typography>
                <Typography variant="body1">+62831-2864-3491</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.close}>
              <div className={styles.img_container}>
                <FontAwesomeIcon
                  icon={faMap}
                  color="#ffba00"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className={styles.content_container}>
                <Typography variant="h3">OPEN HOUR</Typography>
                <Typography variant="body1">10.00 am - 09.00 pm</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.social_container}>
        <Typography variant="h3">OUR SOCIAL MEDIA</Typography>
        <div className={styles.social_links}>
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
    </div>
  );
};

export default GetCloser;
