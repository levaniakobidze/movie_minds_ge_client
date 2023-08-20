import React from "react";
import styles from "./HeroBanner.module.css";
import Image from "next/image";
const HeroBanner = () => {
  return (
    <section className={styles.hero_banner_cont}>
      <img src="https://wallpapercave.com/wp/wp6446246.jpg" alt="banner" />
    </section>
  );
};

export default HeroBanner;
