import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center p-4 mx-auto
                    rounded-3xl shadow-xl overflow-hidden bg-gradient-to-b from-purple-200 via-pink-100 to-white">
      <motion.p
        className="text-2xl sm:text-4xl font-bold text-purple-700 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        My Daily Routine in 20 Seconds 
      </motion.p>
    </div>
  );
}
