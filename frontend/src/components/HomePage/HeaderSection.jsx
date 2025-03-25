import React, { useState, useEffect } from "react";
import goalIcon from "../../assets/goal.png";
import timerIcon from "../../assets/timer.png";

const HeaderSection = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-06-15T09:00:00+08:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-around items-center bg-[#f8f8f8] px-6 py-5 text-[18px] font-bold text-[#333] rounded-lg shadow-md my-5 mx-6">
      <div className="flex items-center gap-2.5">
        <img src={goalIcon} alt="目标分数" className="w-6 h-6" />
        <span>目标分数</span>
        <h2 className="text-[#ff8c00] font-bold">0</h2>
      </div>

      <div className="flex items-center gap-2.5">
        <img src={timerIcon} alt="距考试" className="w-6 h-6" />
        <span>距考试</span>
        <h2 className="text-black text-sm font-bold">
          <span className="text-[30px] text-[#ff8c00]">{countdown.days}</span> Days{" "}
          <span className="text-[30px] text-[#ff8c00]">{countdown.hours}</span> Hrs{" "}
          <span className="text-[30px] text-[#ff8c00]">{countdown.minutes}</span> Min{" "}
          <span className="text-[30px] text-[#ff8c00]">{countdown.seconds}</span> Sec
        </h2>
      </div>
    </div>
  );
};

export default HeaderSection;
