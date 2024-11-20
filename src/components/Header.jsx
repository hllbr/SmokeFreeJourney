import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [quotes, setQuotes] = useState([]); // Motivasyon sözleri state

  // JSON dosyasından sözleri yükle
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/motivation.json"); // JSON dosyasının yolu
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Sözler alınamadı:", error);
        setQuotes(["Motivasyon sözleri yüklenemedi."]);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <header className="text-center py-6 bg-primary text-white">
      <h1 className="text-3xl font-bold">SmokeFreeJourney</h1>
      <p className="text-lg mt-2 text-gradient animate-pulse">
        {quotes.length > 0 ? (
          <Typewriter
            options={{
              strings: quotes,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        ) : (
          "Motivasyon sözleri yükleniyor..."
        )}
      </p>
    </header>
  );
};

export default Header;
