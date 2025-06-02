import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator';

// HeroSection component: The first impression of the website
export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center p-8 bg-gradient-to-br from-hueneu-secondary-light via-hueneu-secondary to-hueneu-secondary-dark overflow-hidden"
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        className="mb-8 md:mb-12 w-48 h-auto md:w-64"
      >
        <AnimatedLogo />
      </motion.div>

      {/* Tagline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-hueneu-primary tracking-tight mb-4"
      >
        Where stories find their aesthetic.
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
        className="text-lg sm:text-xl md:text-2xl text-hueneu-primary-dark/80 font-light mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Designs that whisper loud stories.
      </motion.p>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>

      {/* Subtle background elements for visual interest (optional) */}
      {/* Example: A very subtle, slowly moving gradient or abstract shape */}
      <div className="absolute inset-0 -z-10 opacity-20">
         {/* Placeholder for potential future subtle background visual */}
      </div>

    </section>
  );
}
