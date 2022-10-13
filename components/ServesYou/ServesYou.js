import { Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Divider from "../Divider/Divider";
import BasicModal from "../Modal/Modal";
import styles from "./ServesYou.module.scss";

const ServesYou = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.serves_you_container}>
      <BasicModal open={isModalOpen} close={setIsModalOpen}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dA0VGEbbw4g?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </BasicModal>
      <div className={styles.video_container}>
        <video autoPlay muted playsInline>
          <source src="/videos/serve_1.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.serves_you_content_container}>
        <div
          className={styles.play_button_container}
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/images/play.svg"
            alt="play logo"
            width={26}
            height={30}
            objectFit="contain"
          />
        </div>
        <Typography variant="h2">WE SERVE YOU THE BEST</Typography>
        <Divider width={150} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </Typography>
      </div>
    </div>
  );
};

export default ServesYou;
