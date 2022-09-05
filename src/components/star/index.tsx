import Image from "next/image";
import React from "react";
import styles from "../../../styles/Star.module.css";

export const Star = () => {
  return (
    <div className={styles.star}>
      <Image
        src={"/images/icon-star.svg"}
        width={15}
        height={15}
        alt="star"
        loading="eager"
      />
    </div>
  );
};
