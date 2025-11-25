'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '@/components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import profile from '@/data/profile.json';

const TECH_FILTERS = ['All', 'Python', 'ML', 'EDA', 'Data Science', 'Clustering'];

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExperiences = profile.experiences.filter(
    (exp) => selectedFilter === 'All' || exp.tags.includes(selectedFilter)
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            {filteredExperiences.length} roles matching your criteria
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {TECH_FILTERS.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Experience Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                variant="elevated"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    {expandedId === exp.id ? (
                      <FiChevronUp size={24} />
                    ) : (
                      <FiChevronDown size={24} />
                    )}
                  </button>
                </div>

                {/* Expandable Bullets */}
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                          <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
