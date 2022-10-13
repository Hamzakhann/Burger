import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "../Divider/Divider";
import styles from "./CustomerReview.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const CustomerReview = () => {
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
          <Grid container spacing={4}>
            {Array(3)
              .fill()
              ?.map((item, i) => (
                <Grid item xs={12} md={12} lg={4} key={i}>
                  <div className={styles.customer_review_cards}>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Typography>
                    <div className={styles.customer_review_author_container}>
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
                          <Typography variant="body1">Designation</Typography>
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
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
