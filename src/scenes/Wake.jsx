import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Wake() {
  const birdRef = useRef(null);

  useEffect(() => {
    birdRef.current?.play();
  }, []);

  return (
    <div className="relative w-96 h-96 flex items-center justify-center
                    bg-gradient-to-b from-orange-200 via-yellow-100 to-blue-300
                    overflow-hidden rounded-lg shadow-lg">
      {/* Sun */}
      <motion.div
        className="absolute top-5 left-5 w-20 h-20 rounded-full bg-yellow-400 shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Cat image */}
      <motion.img
        src="/cats/wake.jpg"
        alt="Wake up cat"
        className="w-48 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Scene text */}
      <motion.p
        className="absolute top-2 text-lg font-semibold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Wake Up! 🌞
      </motion.p>

      {/* Bird sound */}
      <audio ref={birdRef}>
        <source src="/sounds/bird.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}


