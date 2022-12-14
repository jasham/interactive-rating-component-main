import React from "react";
import styles from "../../../styles/Rating.module.css";

type RatingProps = {
  onSelectRadio: (id: number) => void;
};

const ratingList = [1, 2, 3, 4, 5];
export const Rating = ({ onSelectRadio }: RatingProps) => {
  return (
    <div className={styles.rating}>
      {ratingList.map((data, index) => (
        <label
          key={index.toString()}
          className={styles.radio}
          htmlFor={index.toString()}
        >
          <input
            id={index.toString()}
            type="radio"
            name="rating"
            value={data}
            className={styles.inputRadio}
            onClick={() => onSelectRadio(data)}
          />
          <span className={styles.ratingCheck}>{data}</span>
        </label>
      ))}
    </div>
  );
};
