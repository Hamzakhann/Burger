import { Grid } from "@mui/material";
import React from "react";
import styles from "./contact.module.scss";
import DetailsForm from "./DetailsForm/DetailsForm";
import GetCloser from "./GetCloser/GetCloser";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} lg={6}>
          <GetCloser />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <DetailsForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
