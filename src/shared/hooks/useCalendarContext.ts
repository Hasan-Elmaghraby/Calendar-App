import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used inside CalendarContextProvider"
    );
  }
  return context;
};
