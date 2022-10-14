import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./OurHealth.module.scss";
import {
  faCertificate,
  faPlus,
  faBurger,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const OurHealth = () => {
  return (
    <div className={styles.our_health_container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} md={12}>
          <div className={styles.our_health}>
            <FontAwesomeIcon
              icon={faCertificate}
              color="#ffba00"
              style={{ width: "50px", height: "52px" }}
            />
            <div className={styles.health_by_percentage}>
              <Typography variant="h4">15</Typography>
              <FontAwesomeIcon
                icon={faPlus}
                color="#ffba00"
                style={{ width: "14px", height: "28px" }}
              />
            </div>
            <Typography variant="body1">Your Experience</Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
          <div className={styles.our_health}>
            <FontAwesomeIcon
              icon={faBurger}
              color="#ffba00"
              style={{ width: "50px", height: "52px" }}
            />
            <div className={styles.health_by_percentage}>
              <Typography variant="h4">90</Typography>
              <FontAwesomeIcon
                icon={faPlus}
                color="#ffba00"
                style={{ width: "14px", height: "28px" }}
              />
            </div>
            <Typography variant="body1">Menu Variant</Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
          <div className={styles.our_health}>
            <FontAwesomeIcon
              icon={faStore}
              color="#ffba00"
              style={{ width: "50px", height: "52px" }}
            />
            <div className={styles.health_by_percentage}>
              <Typography variant="h4">24</Typography>
              <FontAwesomeIcon
                icon={faPlus}
                color="#ffba00"
                style={{ width: "14px", height: "28px" }}
              />
            </div>
            <Typography variant="body1">Restaurant Branch</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurHealth;
