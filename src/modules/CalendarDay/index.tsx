import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { hours12 } from "./utlis/data";

const CalendarDay = () => {
  const location = useLocation();
  const number = location.state?.date;
  console.log(number);

  const { currentDate, goToSpecificDay } = useCalendarContext();

  useEffect(() => {
    goToSpecificDay(number);
  }, []);
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
