'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm, Card } from '@/components';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import profile from '@/data/profile.json';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: <FiGithub size={24} />,
      title: 'GitHub',
      value: 'gokulb24',
      href: profile.social.github,
    },
    {
      icon: <FiLinkedin size={24} />,
      title: 'LinkedIn',
      value: 'gokulb24',
      href: profile.social.linkedin,
    },
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            Let's connect and explore opportunities
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send me a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a question or want to collaborate? Fill out the form and I'll get back to you as soon as possible.
            </p>
            <ContactForm endpoint="nextjs" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.title === 'Email' || info.title === 'Phone' ? undefined : '_blank'}
                  rel={info.title === 'Email' || info.title === 'Phone' ? undefined : 'noopener noreferrer'}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <Card variant="outlined" className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
