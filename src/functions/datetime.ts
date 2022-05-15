// sample date: 2020-01-01T00:00:00.000Z
export default function getFormattedDate(date: string): FormattedDate {
  return {
    year: parseInt(date.substring(0, 4)),
    month: parseInt(date.substring(5, 7)),
    monthName: getMonthName(date.substring(5, 7)),
    day: parseInt(date.substring(8, 10)),
    hour: parseInt(date.substring(11, 13)),
    minute: parseInt(date.substring(14, 16)),
    second: parseInt(date.substring(17, 19)),
    millisecond: parseInt(date.substring(20, 23)),
  };
}

export function getMonthName(month: string): string {
  switch (month) {
    case "01":
      return "January";

    case "02":
      return "February";

    case "03":
      return "March";

    case "04":
      return "April";

    case "05":
      return "May";

    case "06":
      return "June";

    case "07":
      return "July";

    case "08":
      return "August";

    case "09":
      return "September";

    case "10":
      return "October";

    case "11":
      return "November";

    case "12":
      return "December";
    default:
      return "";
  }
}

export type FormattedDate = {
  year: number;
  month: number;
  monthName: string;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond?: number;
};
