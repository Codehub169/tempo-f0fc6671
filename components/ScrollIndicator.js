import { motion } from 'framer-motion';
import Image from 'next/image';

// ScrollIndicator component: Displays an animated scroll-down cue.
const ScrollIndicator = ({ className }) => {
  return (
    <motion.div
      className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${className || ''}`}
      // Animation variants for a subtle bouncing effect.
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [-10, 0, 0, 10],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        times: [0, 0.2, 0.8, 1] // Controls timing of opacity and y changes for a gentle pulse/fade effect
      }}
    >
      <Image 
        src="/scroll-indicator.svg" 
        alt="Scroll down" 
        width={24} // Intrinsic width of the SVG
        height={24} // Intrinsic height of the SVG
        className="w-6 h-6 md:w-8 md:h-8 text-hueneu-primary"
      />
    </motion.div>
  );
};

export default ScrollIndicator;
