import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Divider from "../Divider/Divider";
import styles from "./CustomerReview.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-elastic-carousel";

const CustomerReview = () => {
  let slideRef = useRef();
  let [time, setTime] = useState(3000);

  return (
    <div className={styles.customer_review_container}>
      <div className={styles.customer_review_restructor_container}>
        <div className={styles.customer_review_header}>
          <Typography variant="h2">CUSTOMER REVIEW</Typography>
          <Divider width={150} />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Typography>
        </div>
        <div className={styles.customer_review_cards_container}>
          <Carousel
            pagination={false}
            showArrows={false}
            enableAutoPlay
            ref={slideRef}
            onNextEnd={(e) => {
              console.log(e?.index);
              if (e?.index === 2) {
                setTimeout(() => {
                  slideRef?.current?.goTo(0);
                }, time);
              }
            }}
          >
            {Array(3)
              .fill()
              .map((item, i) => (
                <Grid container spacing={4} key={i}>
                  {Array(3)
                    .fill()
                    ?.map((item, i) => (
                      <Grid item xs={12} md={12} lg={4} key={i}>
                        <div className={styles.customer_review_cards}>
                          <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </Typography>
                          <div
                            className={styles.customer_review_author_container}
                          >
                            <div className={styles.author_container}>
                              <div className={styles.author_img}>
                                <Image
                                  src="/images/author_1.jpeg"
                                  alt="author image"
                                  width={60}
                                  height={60}
                                  objectFit="contain"
                                />
                              </div>
                              <div className={styles.author_details}>
                                <Typography variant="h3">JOHN DOE</Typography>
                                <Typography variant="body1">
                                  Designation
                                </Typography>
                              </div>
                            </div>
                            <div className={styles.quotes_container}>
                              <FontAwesomeIcon
                                icon={faQuoteRight}
                                color="#ffba00"
                                style={{ width: "40px", height: "50px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Grid>
                    ))}
                </Grid>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
