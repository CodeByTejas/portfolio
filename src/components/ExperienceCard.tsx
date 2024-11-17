import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="rounded-lg bg-white p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-lg font-semibold text-indigo-600">{company}</p>
      <p className="mt-4 text-gray-600">{location}</p>
      <p className="mt-1 text-sm text-gray-500">{period}</p>
      <p className="mt-4 text-gray-600">{description}</p>
    </motion.div>
  );
}