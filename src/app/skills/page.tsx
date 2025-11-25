'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, SkillMeter } from '@/components';
import profile from '@/data/profile.json';

export default function Skills() {
  const skillCategories = [
    { title: 'Languages', skills: profile.skills.languages },
    { title: 'Machine Learning & AI', skills: profile.skills.ml_ai },
    { title: 'Libraries & Frameworks', skills: profile.skills.libraries },
    { title: 'Tools & Platforms', skills: profile.skills.tools },
    { title: 'Other Skills', skills: profile.skills.other },
  ];

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
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            Technologies and expertise
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill}>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {skill}
                      </p>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-xl border border-primary-200 dark:border-primary-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Total Skills
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I have expertise across {Object.values(profile.skills).reduce((acc, arr) => acc + arr.length, 0)} different technologies and tools, with a focus on:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skillCategories.map((category) => (
              <li key={category.title} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  {category.title} ({category.skills.length})
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
