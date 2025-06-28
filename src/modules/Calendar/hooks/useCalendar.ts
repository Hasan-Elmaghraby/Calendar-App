import dayjs from "dayjs";
import { useState } from "react";
import { getCalendarDays } from "../utlis/getCalendarDays";
import { getCalendarDaysInNextMonth } from "../utlis/getCalendarDaysInNextMonth";
import { getCalendarDaysInPrevMonth } from "../utlis/getCalendarDaysInPrevMonth";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();

  const nextMonth = currentDate.add(1, "month");
  const prevMonth = currentDate.subtract(1, "month");
  const daysInNextMonth = nextMonth.daysInMonth();
  const daysInPrevMonth = prevMonth.daysInMonth();

  const weeksInNextMonth = getCalendarDaysInNextMonth(daysInNextMonth);
  const weeksInPrevMonth = getCalendarDaysInPrevMonth(daysInPrevMonth);
  const weeks = getCalendarDays(
    startDay,
    daysInMonth,
    weeksInNextMonth,
    weeksInPrevMonth
  );

  const goToPrevMonth = () =>
    setCurrentDate((prev) => prev.subtract(1, "month"));

  const goToNextMonth = () => setCurrentDate((prev) => prev.add(1, "month"));

  const goToNow = () => setCurrentDate(dayjs());

  return { goToNextMonth, goToPrevMonth, goToNow, weeks, currentDate };
};
