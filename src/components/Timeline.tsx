'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center flex-1 hidden md:flex">
              <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900" />
            </div>

            {/* Content */}
            <div className="flex-1 md:flex-1">
              <Card variant="elevated">
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                  {item.date}
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
