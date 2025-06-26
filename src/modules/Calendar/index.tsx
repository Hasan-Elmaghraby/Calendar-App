import React from "react";
import styles from "./styles.module.scss";
import { Container } from "../../shared/components/Container";
import { HeaderCalendar } from "./components/HeaderCalendar";
import { BodyCalendar } from "./components/BodyCalendar/componenets";
import { useCalendar } from "./hooks/useCalendar";

const Calendar: React.FC = () => {
  const { goToNextMonth, goToNow, goToPrevMonth, weeks, currentDate } =
    useCalendar();
  return (
    <main>
      <div className={styles.calendar}>
        <Container>
          <HeaderCalendar
            onClickNext={goToNextMonth}
            onClickPrevious={goToPrevMonth}
            onClickNow={goToNow}
            text={currentDate.format("MMMM YYYY")}
          />
          <BodyCalendar weeks={weeks} />
        </Container>
      </div>
    </main>
  );
};

export default Calendar;
