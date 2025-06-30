export const getCalendarDays = (
  startDay: number,
  daysInMonth: number,
  daysInNextMonth: number[],
  daysInPrevMonth: number[]
) => {
  const calendarDays = [];

  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push(daysInPrevMonth[i]);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const CELLS = 49;
  const calendarCells = CELLS - (daysInMonth + startDay);
  for (let i = 0; i < calendarCells; i++) {
    calendarDays.push(daysInNextMonth[i]);
  }

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  console.log(calendarDays.length);
  console.log(calendarDays);

  return weeks;
};
