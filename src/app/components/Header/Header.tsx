import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import SearchSvg from "../../assets/search-outline.svg";
import Image from "next/image";
import SunSvg from "../../assets/sunny.svg";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link href={"/"}>
          Movie<span>Minds</span> . ჯი
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <HomeIcon className={styles.icon} />
          <Link href={"/"}>მთავარი</Link>
        </li>
        <li>
          <LocalMoviesIcon className={styles.icon} />
          <Link href={"/"}>ფილმები</Link>
        </li>
        <li>
          <ReviewsIcon className={styles.icon} />
          <Link href={"/"}>განხილვები</Link>
        </li>
        <li>
          <PermContactCalendarIcon className={styles.icon} />
          <Link href={"/"}>კონტაქტი</Link>
        </li>
      </ul>
      <div className={styles.right_cont}>
        <div className={styles.search_cont}>
          <input type="search" placeholder="მოძებნე ფილმი ... " />
          <Image src={SearchSvg} alt="search" />
        </div>
        <label className={styles.theme_switcher}>
          <input type="checkbox" />
          <span className={styles.theme_slider}>
            <Image src={SunSvg} alt="sun" />
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
