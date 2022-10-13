import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./BestTasted.module.scss";
import Divider from "../Divider/Divider";
import { PrimaryButton } from "../Buttons/Buttons";

const BestTasted = () => {
  return (
    <div className={styles.tasted_container}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.tasted_img_container}>
            <Image
              src="/images/bestTasted_1.jpeg"
              alt="bestTasted logo"
              width={"100%"}
              height={"55%"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.tasted_content_container}>
            <Typography variant="h2">
              FIND YOUR BEST TASTED FOOD {"&"} DRINK JUST IN ONE PLACE
            </Typography>
            <Divider width={"150px"} />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </Typography>
            <div className={styles.prices_container}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className={styles.prices}>
                    <Image
                      src="/images/check.svg"
                      alt="check logo"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                    <Typography variant="body1">Best Price</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles.prices}>
                    <Image
                      src="/images/check.svg"
                      alt="check logo"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                    <Typography variant="body1">Best Price</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles.prices}>
                    <Image
                      src="/images/check.svg"
                      alt="check logo"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                    <Typography variant="body1">Best Price</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles.prices}>
                    <Image
                      src="/images/check.svg"
                      alt="check logo"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                    <Typography variant="body1">Best Price</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={styles.btn_container}>
              <PrimaryButton>About Us</PrimaryButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BestTasted;
