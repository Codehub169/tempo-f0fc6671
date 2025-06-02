import { motion } from 'framer-motion';
import Image from 'next/image';

// WhoKnewElement component: A scroll-triggered visual surprise.
const WhoKnewElement = () => {
  return (
    <motion.div
      className="relative my-12 md:my-16 flex flex-col items-center group w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      // Initial animation state for the element before it enters viewport
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      // Animation state when element is in view
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.2 } // Spring-like easing
      }}
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of element is in view, only once
    >
      {/* The visual element for the surprise */}
      <motion.div 
        className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
      >
        <Image 
          src="/who-knew-visual.svg"
          alt="Who Knew? A surprising design element from hueneu studio"
          layout="fill"
          objectFit="contain"
          priority // Preload this important visual element
        />
      </motion.div>
      
      {/* Playful text that appears with the visual */}
      <motion.p 
        className="mt-4 md:mt-6 text-xl sm:text-2xl font-display text-hueneu-accent tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: 'easeOut', delay: 0.5 } 
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        ...Who Knew?
      </motion.p>

      {/* Subtle decorative glow, enhances the 'pop' effect on hover */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-hueneu-accent rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10"
      />

    </motion.div>
  );
};

export default WhoKnewElement;
