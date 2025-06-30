import React, { useState } from "react";
import dayjs from "dayjs";
import { getCalendarDays } from "../utlis/getCalendarDays";
import { getCalendarDaysInNextMonth } from "../utlis/getCalendarDaysInNextMonth";
import { getCalendarDaysInPrevMonth } from "../utlis/getCalendarDaysInPrevMonth";
import { CalendarContext } from "./CalendarContext";

interface Props {
  children: React.ReactNode;
}

export const CalendarContextProvider: React.FC<Props> = ({ children }) => {
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

  const goToPrevDay = () => setCurrentDate((prev) => prev.subtract(1, "day"));

  const goToNextDay = () => setCurrentDate((prev) => prev.add(1, "day"));

  const goToPrevWeek = () => setCurrentDate((prev) => prev.subtract(1, "week"));

  const goToNextWeek = () => setCurrentDate((prev) => prev.add(1, "week"));

  const goToSpecificDay = (dayNumber: number) => {
    const newDate = currentDate.date(dayNumber);
    setCurrentDate(newDate);
  };

  const valueToShare = {
    goToNextMonth,
    goToPrevMonth,
    goToPrevDay,
    goToNextDay,
    goToPrevWeek,
    goToNextWeek,
    goToSpecificDay,
    goToNow,
    weeks,
    currentDate,
  };

  return (
    <CalendarContext.Provider value={valueToShare}>
      {children}
    </CalendarContext.Provider>
  );
};
