import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Salat() {
  const prayRef = useRef(null);

  useEffect(() => {
    prayRef.current?.play();
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl aspect-[1/1] flex items-end justify-center
                 rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                 bg-gradient-to-b from-purple-900 via-orange-700 to-yellow-200"
    >
      {/* Mosque silhouette */}
      <motion.div
        className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent"
        style={{ clipPath: "polygon(0% 100%, 0% 50%, 10% 50%, 10% 100%, 20% 100%, 20% 40%, 30% 40%, 30% 100%, 40% 100%, 40% 30%, 50% 30%, 50% 100%, 60% 100%, 60% 20%, 70% 20%, 70% 100%, 80% 100%, 80% 25%, 90% 25%, 90% 100%, 100% 100%, 100% 50%, 90% 50%, 90% 100%, 0% 100%)" }}
      />

      {/* Soft sun/moon glow */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-300 blur-xl"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Cat praying */}
      <motion.img
        src="/cats/pray.jpg"
        alt="Praying cat"
        className="relative z-10 w-3/4 max-w-xs sm:max-w-sm md:max-w-md mb-2 drop-shadow-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Scene text */}
      <motion.p
        className="absolute top-2 text-lg sm:text-xl font-semibold text-yellow-100 text-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Salah
      </motion.p>

      {/* Prayer sound */}
      <audio ref={prayRef} autoPlay>
        <source src="/sounds/prayer.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
