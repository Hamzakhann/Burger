import { Grid, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../../Buttons/Buttons";
import Input from "../../Tags/Input/Input";
import Textarea from "../../Tags/Textarea/Textarea";
import styles from "./DetailsForm.module.scss";

const DetailsForm = () => {
  return (
    <div className={styles.details_form_container}>
      <Typography variant="h3" className={styles.title}>
        YOUR DETAILS
      </Typography>
      <div className={styles.details_form}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.inputs_container}>
              <Typography variant="h5">First Name</Typography>
              <Input type="text" placeHolder="Your Name" />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.inputs_container}>
              <Typography variant="h5">Email Address</Typography>
              <Input type="text" placeHolder="email@yourmail.com" />
            </div>
          </Grid>
        </Grid>
        <div className={styles.inputs_container}>
          <Typography variant="h5">Subject</Typography>
          <Input type="text" placeHolder="Subject" />
        </div>
        <div className={styles.inputs_container}>
          <Typography variant="h5">Comments / Questions</Typography>
          <Textarea type="text" placeHolder="Your Message" />
        </div>
        <div className={styles.btn_container}>
          <PrimaryButton>Submit Message</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
