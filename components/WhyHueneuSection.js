import { motion } from 'framer-motion';

const poeticLines = [
  { text: "We don’t just design—", delay: 0.2 },
  { text: "we decode stories.", delay: 0.4, highlight: true },
  { text: "Designs that speak quietly,", delay: 0.8 },
  { text: "but stay with you.", delay: 1.0, highlight: true },
  { text: "In the balance of vibrant hue and calming neu,", delay: 1.4 },
  { text: "we find the mystery that makes your brand unforgettable.", delay: 1.6 },
];

const lineVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom.delay, duration: 0.8, type: 'spring', stiffness: 50 },
  }),
};

export default function WhyHueneuSection() {
  return (
    <section 
      id="why-hueneu" 
      className="min-h-screen py-24 px-4 md:px-8 bg-hueneu-secondary flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Subtle background element for depth */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-hueneu-accent/5 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-hueneu-primary/5 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display text-hueneu-primary-dark mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Why hueneu?
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          {poeticLines.map((line, index) => (
            <motion.p
              key={index}
              className={`text-xl md:text-2xl lg:text-3xl leading-relaxed ${line.highlight ? 'font-semibold text-hueneu-primary-dark' : 'text-hueneu-primary-dark/80'} ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}
              custom={line}
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
