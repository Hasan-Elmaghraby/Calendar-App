import dayjs from "dayjs";
import { createContext } from "react";

interface CalendarContextType {
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToNow: () => void;
  goToNextDay: () => void;
  goToPrevDay: () => void;
  goToNextWeek: () => void;
  goToPrevWeek: () => void;
  goToSpecificDay: (n: number) => void;
  starOfWeek: string;
  endOfWeek: string;

  weeks: (number | null)[][];
  currentDate: dayjs.Dayjs;
}

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);
