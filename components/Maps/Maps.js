import React from "react";
import styles from "./Maps.module.scss";
import GoogleMapReact from "google-map-react";

const Maps = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className={styles.maps_container}>
      <iframe
        title="Jc-Construction-Map"
        width="100%"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=3244%20Fulton%20Ave,%20Sacramento,%20CA%2095821&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Maps;
