export const updateCountDown = (date) => {
  const currentDate = new Date().getTime();

  const timeDifference = date - currentDate;

  let countingStatus = {};

  if (timeDifference <= 0) {
    const status = "done";
    countingStatus = { status };
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    countingStatus = { days, hours, minutes, seconds };
  }
  return countingStatus;
};
