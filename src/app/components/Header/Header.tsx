"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import SearchSvg from "../../assets/search-outline.svg";
import Image from "next/image";
import SunSvg from "../../assets/sunny.svg";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ProfileModal from "../Modals/ProfileModal/ProfileModal";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const scrollHandler = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <header
      className={`${styles.header} ${scroll ? styles.scroll_header : ""}`}
    >
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
          <div className={styles.search_svg_cont}>
            <Image src={SearchSvg} alt="search" />
          </div>
        </div>
        {/* <label className={styles.theme_switcher}>
          <input type="checkbox" />
          <span className={styles.theme_slider}>
            <Image src={SunSvg} alt="sun" />
          </span>
        </label> */}
      </div>
      <div
        className={styles.profileCard}
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        <div className={styles.avatar}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU"
            alt="User Avatar"
          />
        </div>
        {/* <h2 className=>John Doe</h2> */}
        {/* <p>Frontend Developer</p> */}
      </div>
      {showModal && (
        <ProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </header>
  );
};

export default Header;
