export type writeDateType = {
  year: number;
  month: string;
  date: string;
  day: string;
  hour: string;
  min: string;
  sec: string;
};

export const setDate = (
  year: number,
  month: number,
  date: number,
  day: number,
  hour: number,
  min: number,
  sec: number
) => {
  const dateObj: writeDateType = {
    year,
    month: ZeroMake(month),
    date: ZeroMake(date),
    day: ConvertDay(day),
    hour: ZeroMake(hour),
    min: ZeroMake(min),
    sec: ZeroMake(sec),
  };
  return dateObj;
};

export const ZeroMake = (dateValue: number): string => {
  const setValue = dateValue.toString();
  return dateValue < 10 ? '0' + setValue : setValue;
};

export const ConvertYear = (year: number): string => {
  const year1 = year.toString();
  return year1.substring(2);
};

export const ConvertDay = (day: number): string => {
  switch (day) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      throw new Error('Cannot get Date Object');
  }
};
