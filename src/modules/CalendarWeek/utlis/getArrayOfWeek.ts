import { Dayjs } from "dayjs";

export const getArrayOfWeek = (
  startOfWeek: Dayjs,
  endOfWeek: Dayjs
): string[] => {
  const daysArray = [];

  let day = startOfWeek;

  while (day.isBefore(endOfWeek) || day.isSame(endOfWeek, "day")) {
    const formatted = `${day.format("ddd")} ${day.format("M/D")}`;
    daysArray.push(formatted);
    day = day.add(1, "day");
  }
  return daysArray;
};
