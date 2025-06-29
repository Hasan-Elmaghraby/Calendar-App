import dayjs from "dayjs";
import { createContext } from "react";

interface CalendarContextType {
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToNow: () => void;
  weeks: (number | null)[][];
  currentDate: dayjs.Dayjs;
}

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);
