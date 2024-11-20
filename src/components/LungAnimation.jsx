import React from "react";

const LungAnimation = ({ progress }) => {
  const cleanedPercentage = Math.min(progress, 100); // %100'ü aşmasını engeller

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-48 h-48">
        {/* Akciğer SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-full h-full"
        >
          {/* Sol Akciğer */}
          <path
            d="M32 2c-8 0-14 6-14 14v16c0 7 6 12 14 12s14-5 14-12V16c0-8-6-14-14-14z"
            fill="#ff6f61"
            className="transition-all duration-500 ease-linear"
          />
          {/* Sağ Akciğer */}
          <path
            d="M32 2c8 0 14 6 14 14v16c0 7-6 12-14 12S18 39 18 32V16c0-8 6-14 14-14z"
            fill="#ff6f61"
            className="transition-all duration-500 ease-linear"
          />
          {/* Temizlenen Alan */}
          <path
            d="M32 2c-8 0-14 6-14 14v16c0 7 6 12 14 12s14-5 14-12V16c0-8-6-14-14-14z"
            fill="#6dd47e"
            style={{
              clipPath: `inset(${100 - cleanedPercentage}% 0% 0% 0%)`,
              transition: "clip-path 1s ease-in-out",
            }}
          />
        </svg>
      </div>
      <p className="text-white mt-4 text-xl">
        Temizlik Seviyesi: {cleanedPercentage}%
      </p>
    </div>
  );
};

export default LungAnimation;
