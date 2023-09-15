"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

export default function Home() {
  const { reviews } = useAppSelector((state: any) => state.reviews);
  const [imgindx, setImgindx] = useState(0);
  const [images, setImages] = useState([
    "https://wallpaperaccess.com/full/1077148.jpg",
    "https://wallpaperaccess.com/full/1077153.jpg",
    "https://wallpaperaccess.com/full/1077173.jpg",
    "https://wallpaperaccess.com/full/1077197.jpg",
    "https://wallpaperaccess.com/full/1988347.jpg",
  ]);

  setTimeout(() => {
    const random = Math.floor(Math.random() * images.length);
    setImgindx(random);
  }, 7000);

  return (
    <>
      <HeroBanner img={images[1]} />
      <main className={styles.main}>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          <div>
            <h2 className={styles.section_title}>Latest reviews</h2>
            <div className={styles.latest_reviews_list}>
              {reviews &&
                reviews.map((review: any, index: number) => {
                  return (
                    <ReviewCard
                      key={review._id}
                      img={review.poster}
                      description={review.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
