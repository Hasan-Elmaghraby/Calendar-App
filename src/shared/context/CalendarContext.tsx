import dayjs from "dayjs";
import { createContext } from "react";

type CalendarDay = {
  day: number;
  monthType: "prev" | "current" | "next";
};

interface CalendarContextType {
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToNow: () => void;
  goToNextDay: () => void;
  goToPrevDay: () => void;
  goToNextWeek: () => void;
  goToPrevWeek: () => void;
  goToSpecificDay: (day: CalendarDay) => void;
  startOfWeek: string;
  endOfWeek: string;
  weeks: (CalendarDay | null)[][];
  currentDate: dayjs.Dayjs;
}

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);
