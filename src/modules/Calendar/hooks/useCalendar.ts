import dayjs from "dayjs";
import { useState } from "react";
import { getCalendarDays } from "../utlis/getCalendarDays";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const startDay = startOfMonth.day();

  const daysInMonth = currentDate.daysInMonth();
  const weeks = getCalendarDays(startDay, daysInMonth).weeks;

  console.log(startDay, startOfMonth, daysInMonth);

  const goToPrevMonth = () =>
    setCurrentDate((prev) => prev.subtract(1, "month"));

  const goToNextMonth = () => setCurrentDate((prev) => prev.add(1, "month"));

  const goToNow = () => setCurrentDate(dayjs());

  return { goToNextMonth, goToPrevMonth, goToNow, weeks, currentDate };
};
