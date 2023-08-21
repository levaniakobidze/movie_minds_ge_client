"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import { useAppSelector } from "./redux/hooks";

export default function Home() {
  const { reviews } = useAppSelector((state: any) => state.reviews);
  console.log(reviews);
  return (
    <main className={styles.main}>
      <HeroBanner />
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        <ReviewCard
          img="https://images6.alphacoders.com/714/thumbbig-714381.webp"
          description={"Suicide squad - მიმოხილვა"}
        />
        <ReviewCard
          img="https://images8.alphacoders.com/131/thumbbig-1318289.webp"
          description={"The best movie ever. the best review"}
        />
        <ReviewCard
          img="https://images3.alphacoders.com/993/thumbbig-99309.webp"
          description={"Shutter iceland - შეშლილთა კუნძული (განხილვა)"}
        />
        <ReviewCard
          img="https://images3.alphacoders.com/993/thumbbig-99309.webp"
          description={"The best movie ever. the best review"}
        />
      </div>
    </main>
  );
}
