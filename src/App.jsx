import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import "./styles/index.css";

const App = () => {
  const [startDateTime, setStartDateTime] = useState(""); // Başlangıç tarih ve saat
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Timer durumu
  const [resetKey, setResetKey] = useState(0); // Timer sıfırlama anahtarı
  const [errorMessage, setErrorMessage] = useState(""); // Uyarı mesajı

  // Uygulama ilk yüklendiğinde localStorage'dan başlangıç tarihini oku
  useEffect(() => {
    const savedDateTime = localStorage.getItem("startDateTime");
    if (savedDateTime) {
      setStartDateTime(savedDateTime);
      setIsTimerRunning(true); // Kaydedilmiş bir tarih varsa otomatik başlat
    }
  }, []);

  const handleStartDateChange = (e) => {
    setStartDateTime(e.target.value);
    setErrorMessage(""); // Tarih seçilirse hata mesajını temizle
  };

  const toggleTimer = () => {
    if (!startDateTime) {
      setErrorMessage("Lütfen bir başlangıç tarihi ve saati seçin.");
      return;
    }

    if (!isTimerRunning) {
      // Timer başlatıldığında tarihi localStorage'a kaydet
      localStorage.setItem("startDateTime", startDateTime);
    }
    setIsTimerRunning((prev) => !prev); // Timer'ı başlat/durdur
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setStartDateTime("");
    setResetKey((prev) => prev + 1); // Timer bileşenini sıfırlamak için anahtarı değiştir
    localStorage.removeItem("startDateTime"); // LocalStorage'dan tarihi sil
    setErrorMessage(""); // Hata mesajını temizle
  };

  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col">
      <Header />
      <div className="container mx-auto p-4 text-center flex-grow">
        {/* Kronometre */}
        <Timer
          key={resetKey} // Sıfırla işlemi için yeni key kullanılır
          startDateTime={isTimerRunning ? startDateTime : null}
        />

        {/* Tarih Seçimi */}
        <label className="block mb-4">
          <span className="text-lg">Başlangıç Tarihi ve Saati:</span>
          <input
            type="datetime-local"
            onChange={handleStartDateChange}
            value={startDateTime}
            className="mt-2 p-2 block mx-auto w-1/2 border border-gray-300 rounded bg-white text-black"
          />
        </label>

        {/* Uyarı Mesajı */}
        {errorMessage && (
          <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
        )}

        {/* Başlat/Durdur ve Sıfırla Butonları */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={toggleTimer}
            disabled={!startDateTime} // Tarih seçilmediğinde buton devre dışı
            className={`px-6 py-2 rounded text-white ${
              isTimerRunning
                ? "bg-red-500 hover:bg-red-700"
                : "bg-green-500 hover:bg-green-700"
            } ${!startDateTime && "opacity-50 cursor-not-allowed"}`} // Devre dışı stil
          >
            {isTimerRunning ? "Durdur" : "Başlat"}
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-2 rounded bg-gray-500 text-white hover:bg-gray-700"
          >
            Sıfırla
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
