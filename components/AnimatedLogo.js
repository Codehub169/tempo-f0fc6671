import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef } from 'react';

// AnimatedLogo component: Renders the Lottie animation for the hueneu logo.
const AnimatedLogo = ({ className }) => {
  const playerRef = useRef(null);

  // Effect to play the Lottie animation once it's loaded.
  useEffect(() => {
    if (playerRef.current) {
      // Ensure playerRef.current is not null before trying to call play()
      // Small delay to ensure Lottie is ready, though Player component handles much of this.
      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.play();
        }
      }, 100);
    }
  }, []);

  return (
    <div className={`relative ${className || ''}`}>
      <Player
        ref={playerRef}
        autoplay={false} // Controls autoplay; set to false to trigger programmatically or via user interaction if needed.
        loop={false} // Controls looping of the animation.
        src="/animated-logo.json" // Path to the Lottie JSON animation file.
        style={{ height: '150px', width: '300px' }} // Example styling, adjust as needed.
        keepLastFrame // Keeps the last frame visible after the animation finishes.
      />
    </div>
  );
};

export default AnimatedLogo;
