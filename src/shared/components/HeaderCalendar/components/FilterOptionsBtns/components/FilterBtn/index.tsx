import React from "react";
import styles from "./styles.module.scss";

interface Props{
  onClick: () => void;
  text: string;
}

export const FilterBtn : React.FC<Props>= ({onClick,text}) => {
  return <button className={styles.filterBtn} onClick={onClick}> {text}</button>;
};
