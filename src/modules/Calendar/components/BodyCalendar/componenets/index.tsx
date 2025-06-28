import React from "react";
import styles from "./styles.module.scss";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface BodyCalendarProps {
  weeks: Array<Array<number | null>>;
}

export const BodyCalendar: React.FC<BodyCalendarProps> = ({ weeks }) => {
  return (
    <div className={styles.bodyCalendar}>
      <table className={styles.table}>
        <thead>
          <tr>
            {WEEKDAYS.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j} onClick={() => console.log(day)}>
                  {day ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
