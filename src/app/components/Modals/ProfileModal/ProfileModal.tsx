import React, { useEffect } from "react";
import styles from "./ProfileModal.module.css";
////
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";

const ProfileModal = ({
  setShowModal,
  showModal,
}: {
  setShowModal: any;
  showModal: boolean;
}) => {
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (showModal && e.target.alt !== "er Avatar") {
        setShowModal(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  if (!showModal) return null;

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    // <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
    <div
      className={styles.modalContent}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <AccountCircleIcon className={styles.menuIcon} />
          <span>
            {" "}
            <Link href="/profile" onClick={closeModal}>
              პროფილი
            </Link>
          </span>
        </div>
        <div className={styles.menuItem}>
          <SettingsIcon className={styles.menuIcon} />
          <span>
            {" "}
            <Link href="/dashboard" onClick={closeModal}>
              პარამეტრები
            </Link>
          </span>
        </div>
        <div className={styles.menuItem}>
          <DashboardIcon className={styles.menuIcon} />
          <span>
            <Link href="/dashboard" onClick={closeModal}>
              დეშბორდი
            </Link>
          </span>
        </div>
        <div className={styles.menuItem}>
          <ExitToAppIcon className={styles.menuIcon} />
          <span onClick={closeModal}>გამოსვლა</span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProfileModal;