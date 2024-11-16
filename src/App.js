import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import MotivationCard from "./components/MotivationCard";

const App = () => {
  const [startDate, setStartDate] = useState(localStorage.getItem("startDate") || "");
  const [gumCount, setGumCount] = useState(parseInt(localStorage.getItem("gumCount") || "0", 10));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("gumCount", gumCount);
    localStorage.setItem("theme", theme);
  }, [startDate, gumCount, theme]);

  const resetProgress = () => {
    setStartDate("");
    setGumCount(0);
    setTheme("dark"); // Karanlık tema aktif olur
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const incrementGumCount = () => {
    setGumCount(gumCount + 1);
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-darkBg text-white" : "bg-lightBg text-primary"}`}>
      <Header />
      <div className="container mx-auto p-4">
        <label className="block mb-4">
          <span className="text-lg">Sigara Bırakma Tarihi:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
            className="mt-2 p-2 block w-full border border-gray-300 rounded"
          />
        </label>
        <div className="flex gap-4 mb-4">
          <button onClick={incrementGumCount} className="bg-primary text-white py-2 px-4 rounded hover:bg-green-700">
            Sakız Çiğnedim
          </button>
          <button onClick={resetProgress} className="bg-danger text-white py-2 px-4 rounded hover:bg-red-700">
            Süreyi Sıfırla
          </button>
        </div>
        <p className="mb-4">Sakız Sayısı: <strong>{gumCount}</strong></p>
        <ProgressBar startDate={startDate} />
        <MotivationCard />
      </div>
    </div>
  );
};

export default App;
