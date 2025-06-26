import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const Date: React.FC<Props> = ({ text }) => {
  return <h1 className={styles.date}>{text}</h1>;
};
