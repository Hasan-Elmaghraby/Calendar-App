import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HeaderCalendar } from "./shared/components/HeaderCalendar";
import { useCalendarContext } from "./shared/hooks/useCalendarContext";
const Calendar = lazy(() => import("./modules/Calendar"));
const CalendarDay = lazy(() => import("./modules/CalendarDay"));

function App() {
  const { goToNextMonth, goToNow, goToPrevMonth, currentDate } =
    useCalendarContext();

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <HeaderCalendar
        onClickNext={goToNextMonth}
        onClickPrevious={goToPrevMonth}
        onClickNow={goToNow}
        text={currentDate.format("MMMM YYYY")}
      />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/calendar/:id" element={<CalendarDay />} />
      </Routes>
    </Suspense>
  );
}

export default App;
