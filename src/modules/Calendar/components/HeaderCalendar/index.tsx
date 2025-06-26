import React from "react";
import styles from "./styles.module.scss";
import { SliderControls } from "./components/SliderControls";
import { Date } from "./components/Date";
import { FilterOptionsBtns } from "./components/FilterOptionsBtns";
import { SliderControlsProps } from "./types/calendarTypes";

export const HeaderCalendar: React.FC<SliderControlsProps> = ({
  onClickNext,
  onClickPrevious,
  onClickNow,
  text,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <SliderControls
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          onClickNow={onClickNow}
        />
        <Date text={text} />
        <FilterOptionsBtns />
      </div>
    </header>
  );
};
