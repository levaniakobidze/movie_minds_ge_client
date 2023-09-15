"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const { reviews } = useAppSelector((state: any) => state.reviews);
  return (
    <main className={styles.main}>
      <HeroBanner img="https://images8.alphacoders.com/131/1312070.jpg" />
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
  );
}
