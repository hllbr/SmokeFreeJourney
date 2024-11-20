import React, { useState, useEffect } from "react";

const Timer = ({ startDateTime }) => {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    if (startDateTime) {
      const interval = setInterval(() => {
        const now = new Date();
        const startTime = new Date(startDateTime);
        const diff = Math.max(0, now - startTime);
        setTimeDifference(diff);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startDateTime]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeDifference);

  return (
    <div className="timer-analog text-center">
      <div className="clock mx-auto">
        {/* Saat */}
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`,
          }}
        ></div>

        {/* Dakika */}
        <div
          className="hand minute-hand"
          style={{
            transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`,
          }}
        ></div>

        {/* Saniye */}
        <div
          className="hand second-hand"
          style={{
            transform: `rotate(${seconds * 6}deg)`,
          }}
        ></div>

        {/* Orta Nokta */}
        <div className="center-circle"></div>
      </div>

      {/* Geçen Süre */}
      <div className="elapsed-time mt-4 text-2xl text-green-400">
        Geçen Süre: <span className="font-bold">{`${hours}:${minutes}:${seconds}`}</span>
      </div>
    </div>
  );
};

export default Timer;
