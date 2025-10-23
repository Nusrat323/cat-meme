import { motion } from "framer-motion";
import useEnableAudio from "../utils/useEnableAudio";

export default function WorkOnLaptop2() {
  useEnableAudio();
  return (
    <div
      className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center
                 rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                 bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-800"
    >
      <motion.img
        src="/cats/work2.jpg"
        alt="Working cat at night"
        className="w-3/4 max-w-sm sm:max-w-md relative z-10 drop-shadow-lg"
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <motion.div
        className="absolute top-8 left-10 w-8 h-8 bg-yellow-300 rounded-full blur-md"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.p
        className="absolute top-2 text-lg sm:text-xl font-semibold text-yellow-100 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Work work work again 🌙
      </motion.p>
      <audio autoPlay muted={false}><source src="/sounds/typing.mp3" type="audio/mp3" /></audio>
    </div>
  );
}
