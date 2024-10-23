export const todaysDate = new Date();
export const currentYear = todaysDate.getFullYear();
export const currentMonth = todaysDate.getMonth() + 1;
export const currentDay = todaysDate.getDate();

export const lastWeeksDate = new Date(
  todaysDate.getTime() - 7 * 24 * 60 * 60 * 1000
);
export const lastWeekYear = lastWeeksDate.getFullYear();
export const lastWeekMonth = lastWeeksDate.getMonth() + 1;
export const lastWeekDay = lastWeeksDate.getDate();
