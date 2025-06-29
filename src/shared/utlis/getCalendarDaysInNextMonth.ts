export const getCalendarDaysInNextMonth = (daysInMonth: number) => {
  const calendarDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return calendarDays;
};
