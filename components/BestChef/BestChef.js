import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./BestChef.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.card}>
              <div className={styles.best_chef_card}>
                <Image
                  src="/images/best_chef_2.jpeg"
                  alt="best chef images"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.best_chef_content}>
                <div className={styles.tag}>
                  <Typography variant="body1">Food Chef</Typography>
                </div>
                <div className={styles.social_links}>
                  <div className={styles.link}>
                    <Image
                      src="/images/facebook_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/twitter_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/instagram_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.title}>
                  <Typography variant="h4">Tine Bauer</Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.card}>
              <div className={styles.best_chef_card}>
                <Image
                  src="/images/best_chef_1.jpeg"
                  alt="best chef images"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.best_chef_content}>
                <div className={styles.tag}>
                  <Typography variant="body1">Food Chef</Typography>
                </div>
                <div className={styles.social_links}>
                  <div className={styles.link}>
                    <Image
                      src="/images/facebook_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/twitter_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/instagram_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.title}>
                  <Typography variant="h4">Tine Bauer</Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.card}>
              <div className={styles.best_chef_card}>
                <Image
                  src="/images/best_chef_3.jpeg"
                  alt="best chef images"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.best_chef_content}>
                <div className={styles.tag}>
                  <Typography variant="body1">Food Chef</Typography>
                </div>
                <div className={styles.social_links}>
                  <div className={styles.link}>
                    <Image
                      src="/images/facebook_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/twitter_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.link}>
                    <Image
                      src="/images/instagram_white.svg"
                      alt="fb icon"
                      width={11}
                      height={18}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.title}>
                  <Typography variant="h4">Tine Bauer</Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BestChef;
