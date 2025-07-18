import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <motion.section
    className="mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-300 mb-2">{title}</h2>
<div className="text-sm sm:text-base text-gray-800 leading-relaxed">{children}</div>
  </motion.section>
);
