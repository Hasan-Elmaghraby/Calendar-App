import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { Container } from "@/shared/components/Container";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const navigate = useNavigate();

  const { weeks } = useCalendarContext();

  console.log(weeks);

  return (
    <div className={styles.bodyCalendar}>
      <Container>
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
                {week.map((cell, j) => (
                  <td
                    key={j}
                    className={
                      cell?.monthType !== "current" ? styles.notCurrent : ""
                    }
                  >
                    {cell?.day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Calendar;
