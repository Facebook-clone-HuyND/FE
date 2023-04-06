import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

export const fTimestamp = (timeStamp: number): Date => {
  return timeStamp ? fromUnixTime(timeStamp) : new Date();
};

export const fToNow = (date: Date) => {
  return date
    ? formatDistanceToNowStrict(new Date(date), {
        addSuffix: true,
      })
    : "";
};

export const convertMonthToName = (month: number) => {
  const date = new Date();
  date.setMonth(month - 1);

  return date.toLocaleString("en-US", { month: "long" });
};

export const convertDate = (timeStamp: number): string => {
  const postTime = fTimestamp(timeStamp);

  const totalDay = fToNow(postTime);
  return totalDay;
};
