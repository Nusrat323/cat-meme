import { motion } from "framer-motion";

export default function WorkOnLaptop() {
  return (
    <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center
                    rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                    bg-gradient-to-b from-sky-100 via-blue-50 to-white">
      <motion.img src="/cats/work.jpg" alt="Working cat"
                  className="w-3/4 max-w-sm sm:max-w-md relative z-10 drop-shadow-lg"
                  animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }} />
      <motion.p className="absolute top-2 text-lg sm:text-xl font-semibold text-blue-700 text-center"
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}>
        Work work work... 💻
      </motion.p>
      <audio autoPlay><source src="/sounds/typing.mp3" type="audio/mp3"/></audio>
    </div>
  );
}
