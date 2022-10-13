import { Grid, Typography } from "@mui/material";
import React from "react";
import { SecondaryButton } from "../Buttons/Buttons";
import styles from "./ExclusiveUpdate.module.scss";

const ExclusiveUpdate = () => {
  return (
    <div className={styles.exclusive_update_container}>
      <div className={styles.exclusive_restructure_container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.exclusive_content_container}>
              <Typography variant="h2">GET EXCLUSIVE UPDATE</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.exlusive_details_container}>
              <div className={styles.custom_input}>
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.btn_container}>
                <SecondaryButton>Subscribe Now</SecondaryButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ExclusiveUpdate;
