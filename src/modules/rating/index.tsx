import React, { useState } from "react";
import { Paper } from "../../components/paper";
import styles from "../../../styles/Rating.module.css";
import { Star } from "../../components/star";
import { Rating } from "../../components/rating";
import { Button } from "../../components/button";
import Router from "next/router";
export const RatingMain = () => {
  const [rateNumber, setRateNumber] = useState<number>();
  const { router } = Router;
  const onSelectRadio = (id: number) => {
    setRateNumber(id);
  };
  const onClickButton = () => {
    rateNumber &&
      router?.push({
        pathname: "/showRating",
        query: { id: rateNumber },
      });
  };
  return (
    <Paper>
      <div className={styles.ratingWrapper}>
        <Star />
        <div className={styles.head}>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offerings!
          </p>
        </div>

        <Rating onSelectRadio={onSelectRadio} />
        <Button onClickButton={onClickButton} />
      </div>
    </Paper>
  );
};
