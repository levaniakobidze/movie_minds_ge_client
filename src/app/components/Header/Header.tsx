"use client";
import React, { useState, useEffect } from "react";
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
import { useAppSelector } from "@/app/redux/hooks";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isAuth } = useAppSelector((state) => state.auth);

  const navigation = [
    { label: "მთავარი", href: "/" },
    { label: "ფილმები", href: "/movies" },
    { label: "განხილვები", href: "/reviews" },
    { label: "კონტაცტი", href: "/contact" },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${scroll ? styles.scroll_header : ""}`}
      >
        <div className={styles.header_logo}>
          <Link href={"/"}>
            Movie<span>Minds</span> . ჯი
          </Link>
        </div>
        <ul className={styles.menu}>
          {navigation.map((nav, index) => {
            return (
              <li key={index}>
                {/* <HomeIcon className={styles.icon} /> */}
                <Link href={nav.href}>{nav.label}</Link>
              </li>
            );
          })}
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
        {isAuth ? (
          <div className={styles.btn_cont}>
            <Link href={"/auth/login"} className={styles.button_86}>
              შესვლა
            </Link>
            <Link href={"/auth/register"} className={styles.button_86}>
              რეგისტრაცია
            </Link>
          </div>
        ) : (
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
          </div>
        )}
        {showModal && (
          <ProfileModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </header>
    </>
  );
};

export default Header;
