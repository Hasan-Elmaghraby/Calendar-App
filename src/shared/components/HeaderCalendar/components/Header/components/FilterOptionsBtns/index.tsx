import React from "react";
import styles from "./styles.module.scss";
import { FilterBtn } from "./components/FilterBtn";

export const FilterOptionsBtns = () => {
  return (
    <div className={styles.filterOptionsBtns}>
      <FilterBtn onClick={() => console.log("week")} text="week" />
      <FilterBtn onClick={() => console.log("month")} text="month" />
      <FilterBtn onClick={() => console.log("day")} text="day" />
      <FilterBtn onClick={() => console.log("list")} text="list" />
    </div>
  );
};
