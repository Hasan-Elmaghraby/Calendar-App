import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { useLocation } from "react-router-dom";

export const useClickHeader = () => {
  const location = useLocation();

  const getActionType = () => {
    if (location.pathname.includes("/day")) return "DAY";
    if (location.pathname.includes("/week")) return "WEEK";
    if (location.pathname.includes("/month")) return "MONTH";
    return "DEFAULT";
  };

  const type = getActionType();

  const {
    goToNextDay,
    goToNextMonth,
    goToNextWeek,
    goToPrevMonth,
    goToPrevDay,
    goToPrevWeek,
    currentDate,
  } = useCalendarContext();

  const onClickNext = () => {
    switch (type) {
      case "DAY":
        goToNextDay();
        break;
      case "WEEK":
        goToNextWeek();
        break;
      case "MONTH":
        goToNextMonth();
        break;
      default:
        goToPrevMonth();
        break;
    }
  };

  const onClickPrevious = () => {
    switch (type) {
      case "DAY":
        goToPrevDay();
        break;
      case "WEEK":
        goToPrevWeek();
        break;
      case "MONTH":
        goToPrevMonth();
        break;
      default:
        goToPrevMonth();
        break;
    }
  };

  const format = `${
    type === "MONTH"
      ? currentDate.format(" MMMM  YYYY")
      : type === "DAY"
      ? currentDate.format(" MMMM DD, YYYY")
      : currentDate.format(" MMMM  YYYY")
  } `;

  return { onClickNext, onClickPrevious, format };
};
