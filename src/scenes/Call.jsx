
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Call({
  keyText = "Talking with my man ❤️",
  skipRingtone = false,
  isNight = false,
}) {
  const ringRef = useRef(null);
  const callRef = useRef(null);

  // Audio handling
  useEffect(() => {
    if (!callRef.current) return;

    if (skipRingtone) {
      const timeout = setTimeout(() => {
        callRef.current?.play().catch(() => {});
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (!ringRef.current) return;

    ringRef.current.play().catch(() => {});
    const timeout2 = setTimeout(() => {
      ringRef.current.pause();
      ringRef.current.currentTime = 0;
      callRef.current?.play().catch(() => {});
    }, 1500);

    return () => clearTimeout(timeout2);
  }, [skipRingtone]);

  const bgClass = isNight
    ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-800 border border-purple-800"
    : "bg-gradient-to-b from-purple-100 via-pink-100 to-white border border-purple-200";

  const textColor = isNight ? "text-yellow-100" : "text-purple-700";

  // Stars for night
  const stars = Array.from({ length: 25 }).map((_, i) => ({
    top: Math.random() * 80 + "%",
    left: Math.random() * 80 + "%",
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div
      className={`relative w-full max-w-full sm:max-w-lg md:max-w-2xl flex flex-col justify-end items-center rounded-3xl shadow-xl overflow-hidden p-4 mx-auto ${bgClass}`}
      style={{ aspectRatio: "1 / 1" }}
    >
      {/* Night stars */}
      {isNight &&
        stars.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: star.delay }}
          />
        ))}

      {/* Cloud bubble */}
      <motion.div
        className="absolute top-11 right-6 flex flex-col items-center justify-center"
        animate={{ y: [0, -8, 0], x: [0, 5, 0], scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div
          className="relative bg-gray-100 p-3 rounded-2xl shadow-lg flex items-center justify-center border border-purple-200"
          style={{
            width: "130px",
            height: "85px",
            borderRadius: "60% 60% 70% 70% / 60% 60% 80% 80%",
            boxShadow: "0 8px 25px rgba(150, 100, 255, 0.15)",
          }}
        >
          <img
            src="/floating/cat-man.png"
            alt="Talking to man"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        <div className="flex flex-col items-center mt-1 space-y-1">
          <span className="w-4 h-4 bg-white rounded-full shadow-sm border border-purple-100"></span>
          <span className="w-3 h-3 bg-white rounded-full shadow-sm border border-purple-100"></span>
          <span className="w-2 h-2 bg-white rounded-full shadow-sm border border-purple-100"></span>
        </div>
      </motion.div>

      {/* Cat image at bottom */}
      <motion.img
        src="/cats/call.jpg"
        alt="Calling cat"
        className="w-1/2 max-w-xs sm:max-w-xs md:max-w-md drop-shadow-lg mt-auto"
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Caption */}
      <motion.p
        className={`absolute top-2 text-lg sm:text-xl font-medium ${textColor} text-center w-full`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {keyText}
      </motion.p>

      {/* Audio */}
      {!skipRingtone && (
        <audio ref={ringRef}>
          <source src="/sounds/rington.mp3" type="audio/mp3" />
        </audio>
      )}
      <audio ref={callRef}>
        <source src="/sounds/call.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
