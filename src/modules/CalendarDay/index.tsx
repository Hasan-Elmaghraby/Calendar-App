import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { hours12 } from "./utlis/data";

export type CalendarDay = {
  day: number;
  monthType: "prev" | "current" | "next";
};

const CalendarDay = () => {
  const { currentDate, goToSpecificDay } = useCalendarContext();
  const location = useLocation();
  const date = location.state?.date as CalendarDay | undefined;

  useEffect(() => {
    if (date && typeof date.day === "number" && date.monthType) {
      goToSpecificDay(date);
    }
  }, [date]);

  return (
    <Container>
      <table className={styles.tableDay}>
        <thead className={styles.theadDay}>
          <tr>
            <td></td>
            <td>{currentDate.format("dddd")}</td>
          </tr>
        </thead>
        <tbody className={styles.tbodyDay}>
          <tr>
            <td>All Day</td>
            <td></td>
          </tr>
          {hours12.map((h, i) => (
            <tr key={i}>
              <td>{h}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CalendarDay;
