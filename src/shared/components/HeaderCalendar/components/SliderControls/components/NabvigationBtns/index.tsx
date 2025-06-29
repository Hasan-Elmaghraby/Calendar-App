import React from "react";
import styles from "./styles.module.scss";
import { CheveronLeftIcon } from "@/shared/icons/CheveronLeft";
import { CheveronRightIcon } from "@/shared/icons/CheveronRight";
import { NavigationProps } from "../../../../types/calendarTypes";

export const NavigationBtns: React.FC<NavigationProps> = ({
  onClickNext,
  onClickPrevious,
}) => {
  return (
    <div className={styles.navigationBtns}>
      <button
        type="button"
        className={styles.navigationBtnLeft}
        onClick={onClickNext}
      >
        <div className={styles.iconWrapper}>
          <CheveronLeftIcon />
        </div>
      </button>
      <button
        type="button"
        className={styles.navigationBtnRight}
        onClick={onClickPrevious}
      >
        <div className={styles.iconWrapper}>
          <CheveronRightIcon />
        </div>
      </button>
    </div>
  );
};
