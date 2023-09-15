import React, { FC } from "react";
import styles from "./ReviewCard.module.css";
import Link from "next/link";

interface ICard {
  img: string;
  description: string;
}

const ReviewCard: FC<ICard> = ({ img, description }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={img} alt="card" />
      </div>
      <Link href={"/reviews/sadasda"} className={styles.description}>
        {description}
      </Link>
      <div className={styles.author_cont}>
        <img
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg"
          alt="avatar"
        />
        <p className={styles.author_name}>Levan iakobidze</p>
        <p className={styles.date}>August 20, 2022</p>
      </div>
    </div>
  );
};

export default ReviewCard;
