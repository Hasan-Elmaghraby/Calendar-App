import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";

const CalendarDay = () => {
  const location = useLocation();
  const number = location.state?.date;
  console.log(number);

  const { currentDate } = useCalendarContext();

  const fullDate = `${currentDate.year()}-${currentDate.month() + 1}-${number}`;
  // const dayName = currentDate.format("DD MMMM YYYY");

  console.log(fullDate);
  return <div>{fullDate}</div>;
};

export default CalendarDay;
