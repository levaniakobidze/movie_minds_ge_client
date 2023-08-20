import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner />
    </main>
  );
}
