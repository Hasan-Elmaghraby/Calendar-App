type CalendarDay = {
  day: number;
  monthType: "prev" | "current" | "next";
};

export const getCalendarDays = (
  startDay: number,
  daysInMonth: number,
  daysInNextMonth: number[],
  daysInPrevMonth: number[]
) => {
  const calendarDays: CalendarDay[] = [];

  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth[i],
      monthType: "prev",
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      monthType: "current",
    });
  }

  const CELLS = 49;
  const calendarCells = CELLS - (daysInMonth + startDay);
  for (let i = 0; i < calendarCells; i++) {
    calendarDays.push({
      day: daysInNextMonth[i],
      monthType: "next",
    });
  }

  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return weeks;
};
