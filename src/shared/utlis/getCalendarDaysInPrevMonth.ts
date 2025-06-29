export const getCalendarDaysInPrevMonth = (daysInMonth: number) => {
  const calendarDays = [];

  for (let i = daysInMonth; i >= 1; i--) {
    calendarDays.push(i);
  }

  return calendarDays;
};
