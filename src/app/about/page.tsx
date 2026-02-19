'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, Card } from '@/components';
import profile from '@/data/profile.json';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl"
          >
            AI/ML Engineer with a passion for building intelligent systems and solving real-world problems with data
          </motion.p>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Summary</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {profile.summary}
          </p>
          <a
            href="/Users/gokulb/portfolio/gokulb__cv.pdf"
            download
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Download Full Resume
          </a>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-6">
            {profile.education.map((edu) => (
              <Card key={edu.id} variant="elevated">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.specialization}
                    </p>
                  </div>
                  <span className="text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong>{edu.institution}</strong>
                </p>

                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    CGPA: {edu.cgpa}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
