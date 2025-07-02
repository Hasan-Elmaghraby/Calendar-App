import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";
import { hours12 } from "./utlis/data";
import { getArrayOfWeek } from "./utlis/getArrayOfWeek";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWeek = () => {
  const { currentDate } = useCalendarContext();
  const startOfWeek = currentDate.startOf("week");
  const endOfWeek = currentDate.endOf("week");

  const daysArray = getArrayOfWeek(startOfWeek, endOfWeek);
  return (
    <Container>
      <table className={styles.tableWeek}>
        <thead className={styles.theadWeek}>
          <tr>
            <th></th>
            {daysArray.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbodyWeek}>
          <tr>
            <td>All Day</td>
            {WEEKDAYS.map((day) => (
              <td key={day}></td>
            ))}
          </tr>
          {hours12.map((h, i) => (
            <tr key={i}>
              <td>{h}</td>
              {WEEKDAYS.map((day) => (
                <td key={day}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CalendarWeek;
