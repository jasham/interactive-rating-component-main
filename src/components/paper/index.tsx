import React from "react";
import styles from "../../../styles/Paper.module.css";

type PaperProps = {
  children: React.ReactNode;
};

export const Paper = ({ children }: PaperProps) => {
  return <div className={styles.main}>{children}</div>;
};
