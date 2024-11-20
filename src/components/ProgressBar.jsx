import React from "react";

const ProgressBar = ({ startDate }) => {
  const minutesSinceQuit = startDate
    ? Math.floor((new Date() - new Date(startDate)) / (1000 * 60))
    : 0;

  const progress = Math.min((minutesSinceQuit / 525600) * 100, 100).toFixed(2); // 1 yıl = 525,600 dakika

  return (
    <div className="mt-6">
      <p className="text-center text-white">İyileşme Süreci</p>
      <div className="w-full bg-gray-300 rounded mt-2 h-6 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-full animate-pulse"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-2 text-white">{progress}% tamamlandı</p>
    </div>
  );
};

export default ProgressBar;
