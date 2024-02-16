export const getDate = (time) => {
  // months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // get date, month, year
  const day = new Date(time).getDate();
  const month = months[new Date(time).getMonth()];
  const years = new Date(time).getFullYear();

  return `${day} ${month}, ${years}`;
};
