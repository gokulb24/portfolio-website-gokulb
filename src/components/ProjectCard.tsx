'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from './Card';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  year: number;
  tags: string[];
  metrics?: Record<string, string | number>;
  links: {
    demo?: string;
    github?: string;
  };
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  year,
  tags,
  metrics,
  links,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer h-full"
    >
      <Card variant="elevated" className="h-full flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">{title}</h3>
          <span className="ml-2 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {description}
        </p>

        {metrics && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {key.replace(/_/g, ' ')}
                  </p>
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={16} />
              Code
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
