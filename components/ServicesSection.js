import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { name: "Branding", icon: "/icons/branding.svg", copy: "Crafting identities that resonate deeply." },
  { name: "Packaging", icon: "/icons/packaging.svg", copy: "Packaging, but make it poetic." },
  { name: "Social Media", icon: "/icons/social-media.svg", copy: "Digital narratives that captivate and connect." },
  { name: "Stationery", icon: "/icons/stationery.svg", copy: "Tangible expressions of your brand's essence." },
  { name: "Coffee Table Books", icon: "/icons/coffee-table-books.svg", copy: "Curating visual stories that last." },
  { name: "Creative Projects", icon: "/icons/creative-projects.svg", copy: "Exploring unique visions, beautifully realized." },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-screen py-20 px-4 md:px-8 bg-hueneu-light-bg flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-secondary text-hueneu-dark-text mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.name} 
              className="group bg-white p-8 rounded-lg shadow-subtle hover:shadow-interactive transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="relative w-16 h-16 mb-6 text-hueneu-primary group-hover:text-hueneu-accent transition-colors duration-300">
                <Image src={service.icon} alt={`${service.name} icon`} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-hueneu-dark-text mb-3">{service.name}</h3>
              <p className="text-hueneu-primary leading-relaxed text-sm">{service.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
