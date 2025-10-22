import { motion } from "framer-motion";

export default function Sleep() {
  return (
    <div className="relative w-full max-w-4xl aspect-[1/1] flex items-center justify-center
                    rounded-3xl shadow-xl overflow-hidden p-4 mx-auto
                    bg-gradient-to-b from-black via-blue-900 to-black">
      {/* Moon */}
      <motion.div className="absolute top-5 right-10 w-16 h-16 rounded-full bg-white shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }} />
      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%` }}
                    animate={{ opacity: [0,1,0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i*0.1 }} />
      ))}
      {/* Cat */}
      <motion.img src="/cats/sleep.jpg" alt="Sleeping cat"
                  className="w-3/4 max-w-sm sm:max-w-md relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }} />
      <motion.p className="absolute top-2 text-lg sm:text-xl font-semibold text-gray-100 text-center"
                  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
        Sleep...😴
      </motion.p>
    </div>
  );
}
