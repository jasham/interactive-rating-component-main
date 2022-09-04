import React from "react";
import styles from "../../../styles/Button.module.css";

type ButtonProps = {
  onClickButton: () => void;
};
export const Button = ({ onClickButton }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClickButton}>
      Submit
    </button>
  );
};
