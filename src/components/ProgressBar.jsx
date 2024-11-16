import React from "react";

const ProgressBar = ({ startDate }) => {
  const healthStages = [
    { time: 20, message: "Nabzınız normale döndü." },
    { time: 480, message: "Kandaki nikotin seviyesi yarıya indi." },
    { time: 10080, message: "Tat ve koku duyularınız iyileşti." },
    { time: 525600, message: "Kalp hastalığı riskiniz %50 azaldı." },
  ];

  const minutesSinceQuit = Math.floor(
    (new Date() - new Date(startDate)) / (1000 * 60)
  );
  const currentStage = healthStages.find(
    (stage) => minutesSinceQuit < stage.time
  ) || { message: "Sağlık gelişiminiz tamamlandı!" };

  return (
    <div className="mt-6">
      <p>{currentStage.message}</p>
      <div className="w-full bg-gray-300 rounded mt-2">
        <div
          className="bg-secondary h-4 rounded"
          style={{
            width: `${Math.min(
              (minutesSinceQuit / healthStages[healthStages.length - 1].time) * 100,
              100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
