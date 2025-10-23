import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useEnableAudio from "../utils/useEnableAudio";

export default function Eat() {
  useEnableAudio();
  const audioRef = useRef(null);

  useEffect(() => {
    let playCount = 0;
    const maxPlays = 2;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    const handleEnded = () => {
      playCount++;
      if (playCount < maxPlays) playAudio();
    };

    audioRef.current?.addEventListener("ended", handleEnded);
    playAudio();

    return () => audioRef.current?.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center
                    rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                    bg-gradient-to-b from-blue-200 via-yellow-100 to-green-200">
      <motion.img
        src="/cats/eat.jpg"
        alt="Eating cat"
        className="w-3/4 max-w-sm sm:max-w-md relative z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.p
        className="absolute top-2 text-lg sm:text-xl font-semibold text-gray-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Food 🍽
      </motion.p>
      <audio ref={audioRef}><source src="/sounds/eating.mp3" type="audio/mp3" /></audio>
    </div>
  );
}




