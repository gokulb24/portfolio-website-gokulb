'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components';
import { FiExternalLink } from 'react-icons/fi';
import profile from '@/data/profile.json';

export default function Certifications() {
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
            Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            Professional credentials and verified learning
          </motion.p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    View Certificate
                    <FiExternalLink size={16} />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
