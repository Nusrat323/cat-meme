// src/App.jsx
import { useState, useEffect } from "react";
import Intro from "./scenes/Intro";
import Sleep from "./scenes/Sleep";
import Wake from "./scenes/Wake";
import Eat from "./scenes/Eat";
import Call from "./scenes/Call";
import WorkOnLaptop from "./scenes/WorkOnLaptop";
import WaterPlants from "./scenes/WaterPlants";
import WorkOnLaptop2 from "./scenes/WorkOnLaptop2"; 
import Call2 from "./scenes/Call2";
import Salat from "./scenes/Salat";

const scenes = [
  Intro,
  Wake,
  Eat,
  Call,
  WorkOnLaptop,
  WaterPlants,
  WorkOnLaptop2, 
  Salat,
  Call2,
  Sleep,
];

const sceneDurations = [3000, 2500, 2500, 4000, 3000, 2000, 3000, 2000, 3000, 4000]; 

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Automatically switch to the next scene based on duration
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % scenes.length);
    }, sceneDurations[index]);

    return () => clearTimeout(timer);
  }, [index]);

  const SceneComponent = scenes[index];

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 relative">
      <SceneComponent />
    </div>
  );
}
