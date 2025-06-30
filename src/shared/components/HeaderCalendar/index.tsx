import React from "react";
import { Header } from "./components/Header";
import { useCalendarContext } from "@/shared/hooks/useCalendarContext";
import { useClickHeader } from "./hooks/useClickHeader";

export const HeaderCalendar: React.FC = () => {
  const { goToNow } = useCalendarContext();

  const { onClickNext, onClickPrevious, format } = useClickHeader();

  return (
    <Header
      onClickPrevious={onClickNext}
      onClickNext={onClickPrevious}
      onClickNow={goToNow}
      text={format}
    />
  );
};
