import { motion } from 'framer-motion';
import WhoKnewElement from './WhoKnewElement';

// StorySection component: Introduces the meaning and philosophy of hueneu.
const StorySection = () => {
  // Animation variants for text elements to fade in and up as they enter the viewport.
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="story"
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center bg-hueneu-secondary-light relative overflow-hidden"
    >
      {/* Decorative subtle background gradient element */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(var(--color-hueneu-accent-rgb), 0.1) 0%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(var(--color-hueneu-primary-rgb), 0.1) 0%, transparent 30%)',
        }}
      />

      <motion.div 
        className="max-w-3xl z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display text-hueneu-primary mb-8 leading-tight"
          variants={textVariants}
        >
          Hue <span className="text-hueneu-accent">+</span> Neu
        </motion.h2>
        
        {/* Introductory Paragraph */}
        <motion.p 
          className="text-lg md:text-xl text-hueneu-primary-dark mb-6 leading-relaxed font-body"
          variants={textVariants}
        >
          At hueneu, we believe in the quiet power of balance. &ldquo;Hue&rdquo; signifies the vibrant burst of creativity, the unexpected splash of color that brings a story to life. &ldquo;Neu&rdquo; represents the grounding calm of neutrality, the intentional space that allows ideas to breathe and resonate.
        </motion.p>

        {/* Second Paragraph emphasizing balance */}
        <motion.p 
          className="text-lg md:text-xl text-hueneu-primary-dark mb-12 leading-relaxed font-body"
          variants={textVariants}
        >
          It's in this harmonious dance between the vivid and the serene that true magic unfolds—designs that are not just seen, but deeply felt. We craft experiences that whisper, yet leave a lasting echo.
        </motion.p>

        {/* Placeholder for the "Who Knew?" visual pop-out */}
        <WhoKnewElement />

      </motion.div>
    </section>
  );
};

export default StorySection;
