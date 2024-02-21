export const getTime = (date) => {
  const targetDate = new Date(date);
  const hours = targetDate.getHours();
  const minutes = targetDate.getMinutes();

  const amPm = hours > 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amPm}`;
  return formattedTime;
};
