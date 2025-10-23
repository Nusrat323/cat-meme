import { useEffect } from "react";

export default function useEnableAudio() {
  useEffect(() => {
    const enableAudio = () => {
      document.querySelectorAll("audio").forEach(a => {
        a.muted = false;
      });
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);
  }, []);
}
