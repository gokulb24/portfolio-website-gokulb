'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button, Card } from '@/components';
import profile from '@/data/profile.json';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Profile Avatar (responsive larger size) */}
          <motion.div variants={item} className="mb-8">
            <div className="inline-flex justify-center items-center">
              <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  width={288}
                  height={288}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {profile.headline}
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="flex items-center gap-2">
                <FiDownload />
                Download Resume
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                Get in Touch
                <FiArrowRight />
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex justify-center gap-4 mb-20">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Featured Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[...profile.skills.languages, ...profile.skills.ml_ai].map(
              (skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium text-sm hover:shadow-lg transition-shadow cursor-default"
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>

          <div className="text-center">
            <Link href="/skills">
              <Button variant="outline">View All Skills →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {profile.projects.slice(0, 2).map((project) => (
            <Link key={project.id} href="/projects">
              <Card variant="elevated" className="h-full cursor-pointer hover:scale-105 transition-transform">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
