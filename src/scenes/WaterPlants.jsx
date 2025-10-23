import { motion } from "framer-motion";
import useEnableAudio from "../utils/useEnableAudio";

export default function WaterPlants() {
  useEnableAudio();
  return (
    <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center
                    rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                    bg-gradient-to-b from-green-200 via-yellow-100 to-blue-200">
      <motion.img src="/cats/plants.jpg" alt="Watering cat"
                  className="w-3/4 max-w-sm sm:max-w-md relative z-10"
                  animate={{ y:[0,-5,0] }} transition={{ repeat:Infinity, duration:1 }} />
      <motion.p className="absolute top-2 text-lg sm:text-xl font-semibold text-gray-800 text-center"
                  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
        Watering my plants 🌿
      </motion.p>
      <audio autoPlay muted={false}><source src="/sounds/water.mp3" type="audio/mp3"/></audio>
    </div>
  );
}


