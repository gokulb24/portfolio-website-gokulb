'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillMeterProps {
  name: string;
  proficiency?: number;
}

export const SkillMeter: React.FC<SkillMeterProps> = ({ name, proficiency = 85 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
        />
      </div>
    </motion.div>
  );
};
