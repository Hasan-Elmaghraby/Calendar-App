import dayjs from "dayjs";
import { useState } from "react";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  console.log(endOfMonth);
  console.log(startOfMonth);

  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = currentDate.daysInMonth();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null); // empty cells before 1st day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }
  console.log(weeks);

  const goToPrevMonth = () =>
    setCurrentDate((prev) => prev.subtract(1, "month"));
  const goToNextMonth = () => setCurrentDate((prev) => prev.add(1, "month"));
  const goToNow = () => setCurrentDate(dayjs());

  return { goToNextMonth, goToPrevMonth, goToNow, weeks,currentDate };
};
