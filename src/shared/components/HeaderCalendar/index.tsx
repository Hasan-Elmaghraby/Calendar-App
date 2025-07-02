import React from "react";
import { Header } from "./components/Header";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { useClickHeader } from "./hooks/useClickHeader";

export const HeaderCalendar: React.FC = () => {
  const { onClickNext, onClickPrevious, format } = useClickHeader();
  const { goToNow } = useCalendarContext();

  return (
    <Header
      onClickPrevious={onClickNext}
      onClickNext={onClickPrevious}
      onClickNow={goToNow}
      text={format}
    />
  );
};
