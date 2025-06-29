import React from "react";
import styles from "./styles.module.scss";
import { Container } from "../../shared/components/Container";
import { BodyCalendar } from "./components/BodyCalendar/componenets";
import { useCalendarContext } from "../../shared/hooks/useCalendarContext";

const Calendar: React.FC = () => {
  const { weeks } = useCalendarContext();

  return (
    <main>
      <Container>
        <div className={styles.calendar}>
          <BodyCalendar weeks={weeks} />
        </div>
      </Container>
    </main>
  );
};

export default Calendar;
