import { useEffect, useRef, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const deadline = "November 12, 2024";
  let intervalRef = useRef(null);

  const getTime = () => {
    const timeRemaining = Date.parse(deadline) - Date.now();
    if (timeRemaining <= 0) {
      clearInterval(intervalRef.current); // Stop the interval
      setDays(0); setHours(0); setMinutes(0);setSeconds(0);
    } else {
      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeRemaining / 1000 / 60) % 60));
      setSeconds(Math.floor((timeRemaining / 1000) % 60));
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(getTime, 1000);
    return () => clearInterval(intervalRef.current); // Cleanup the interval on unmount
  }, []);

  return (
    <>
      {/* count down time */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3">
        <div>
          <p className="bg-gradient-to-r from-[#3F72AF] to-[#F53F7B] inline-block text-white px-1 rounded">
            Next
          </p>
          <h3 className="font-semibold text-lg mt-[5px]">UPCOMING EVENT</h3>
        </div>
        <div>
          <h3 className="font-medium text-lg">Monday Event</h3>
          <p className="text-neutral-700">January 22-2024</p>
        </div>
        <div className="flex gap-3 md:gap-6 text-center justify-end items-center">
          <div>
            <div className="bg-accent rounded-sm text-neutral font-medium w-[50px] h-[50px] flex items-center justify-center">
              {days}
            </div>
            <h3>Days</h3>
          </div>
          <div>
            <div className="bg-accent rounded-sm text-neutral font-medium w-[50px] h-[50px] flex items-center justify-center">
              {hours}
            </div>
            <h3>Hrs</h3>
          </div>
          <div>
            <div className="bg-accent rounded-sm text-neutral font-medium w-[50px] h-[50px] flex items-center justify-center">
              {minutes}
            </div>
            <h3>Mins</h3>
          </div>
          <div className="">
            <div className="bg-accent rounded-sm text-neutral font-medium w-[50px] h-[50px] flex items-center justify-center text-2xl">
              {seconds}
            </div>
            <h3>Secs</h3>
          </div>
        </div>
        <div className="">
          {/* <button className="bg-gradient-to-r from-[#F53F7B] to-[#3F72AF]  p-2 rounded text-white font-medium">
                All Upcoming Event
              </button> */}
          <button className="button">Up Coming Event</button>
        </div>
      </div>
    </>
  );
};

export default CountDown;
