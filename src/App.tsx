import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HeaderCalendar } from "./shared/components/HeaderCalendar";

const Calendar = lazy(() => import("./modules/Calendar"));
const CalendarDay = lazy(() => import("./modules/CalendarDay"));

function App() {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <HeaderCalendar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/day/:id" element={<CalendarDay />} />
      </Routes>
    </Suspense>
  );
}

export default App;
