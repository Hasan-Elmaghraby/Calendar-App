import React from "react";
import styles from "./styles.module.scss";
import { FilterBtn } from "./components/FilterBtn";
import { useNavigate } from "react-router-dom";

export const FilterOptionsBtns: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.filterOptionsBtns}>
      <FilterBtn onClick={() => navigate("/")} text="Month" />
      <FilterBtn onClick={() => navigate("/week")} text="Week" />
      <FilterBtn onClick={() => navigate("/day")} text="Day" />
      <FilterBtn onClick={() => navigate("/list")} text="List" />
    </div>
  );
};
