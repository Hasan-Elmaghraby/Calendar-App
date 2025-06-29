import React from "react";
import styles from "./styles.module.scss";
import { NavigationBtns } from "./components/NabvigationBtns";
import { NavigationProps } from "../../types/calendarTypes";

export const SliderControls: React.FC<NavigationProps> = ({
  onClickNext,
  onClickPrevious,
  onClickNow,
}) => {
  return (
    <div className={styles.sliderControls}>
      <NavigationBtns
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
      />
      <button className={styles.navigationBtnNow} onClick={onClickNow}>
        today
      </button>
    </div>
  );
};
