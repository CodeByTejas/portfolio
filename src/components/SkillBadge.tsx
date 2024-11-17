import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBadge({ name, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full rounded-full bg-indigo-600"
        />
      </div>
    </motion.div>
  );
}