import React from "react";
import styles from "./HeroBanner.module.css";
import Image from "next/image";
const HeroBanner = ({ img }: { img: string }) => {
  return (
    <section className={styles.hero_banner_cont}>
      <img src={img} className={styles.blured_edge} alt="banner" />
      <div className={styles.main_img_cont}>
        <img src={img} alt="banner" />
      </div>
    </section>
  );
};

export default HeroBanner;
