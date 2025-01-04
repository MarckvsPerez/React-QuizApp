import { useEffect, useRef } from 'react';

function BackgroundMusic({ audioSource }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.muted = false;
      audioRef.current.play().catch(error => {
        console.log("Reproducción automática bloqueada:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop muted>
      <source src={audioSource} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default BackgroundMusic;