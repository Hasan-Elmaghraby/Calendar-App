export const getCalendarDays = (
  startDay: number,

  daysInMonth: number
) => {
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

  return { calendarDays, weeks };
};
