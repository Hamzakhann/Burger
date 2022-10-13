import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./OurNewsAndArticle.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OurNewsAndArticle = () => {
  return (
    <div className={styles.our_news_article_container}>
      <div className={styles.our_news_article_header}>
        <Typography variant="h2">CUSTOMER REVIEW</Typography>
        <Divider width={150} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </Typography>
      </div>
      <div className={styles.our_news_article_card_container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.our_news_article_card}>
              <div className={styles.our_news_article_img_container}>
                <Image
                  src="/images/article_1.jpeg"
                  alt="article image"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.article_tag_container}>
                  <Typography variant="body1">Food</Typography>
                </div>
              </div>
              <div className={styles.our_news_article_content_container}>
                <Typography variant="h3">
                  LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </Typography>
                <div className={styles.btn_container}>
                  <Typography variant="body1">Read More</Typography>
                  <FontAwesomeIcon icon={faArrowRight} color="#ffba00" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.our_news_article_card}>
              <div className={styles.our_news_article_img_container}>
                <Image
                  src="/images/article_2.jpeg"
                  alt="article image"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.article_tag_container}>
                  <Typography variant="body1">News</Typography>
                </div>
              </div>
              <div className={styles.our_news_article_content_container}>
                <Typography variant="h3">
                  GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR $20 SPEND
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </Typography>
                <div className={styles.btn_container}>
                  <Typography variant="body1">Read More</Typography>
                  <FontAwesomeIcon icon={faArrowRight} color="#ffba00" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className={styles.our_news_article_card}>
              <div className={styles.our_news_article_img_container}>
                <Image
                  src="/images/article_3.jpeg"
                  alt="article image"
                  width={"100%"}
                  height={"100%"}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.article_tag_container}>
                  <Typography variant="body1">Beverage</Typography>
                </div>
              </div>
              <div className={styles.our_news_article_content_container}>
                <Typography variant="h3">
                  STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </Typography>
                <div className={styles.btn_container}>
                  <Typography variant="body1">Read More</Typography>
                  <FontAwesomeIcon icon={faArrowRight} color="#ffba00" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurNewsAndArticle;
