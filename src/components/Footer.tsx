'use client';

import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import clsx from 'clsx';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  ariaLabel: string;
}

interface FooterProps {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export const Footer: React.FC<FooterProps> = ({ email, phone, github, linkedin }) => {
  const socialLinks: SocialLink[] = [
    { icon: <FiGithub size={20} />, href: github, label: 'GitHub', ariaLabel: 'Visit GitHub' },
    {
      icon: <FiLinkedin size={20} />,
      href: linkedin,
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn',
    },
    {
      icon: <FiMail size={20} />,
      href: `mailto:${email}`,
      label: 'Email',
      ariaLabel: 'Send email',
    },
    {
      icon: <FiPhone size={20} />,
      href: `tel:${phone}`,
      label: 'Phone',
      ariaLabel: 'Call',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Gokul B
            </h3>
            <p className="text-gray-400 mt-2">AI/ML Engineer & Data Scientist</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
                  rel={link.label !== 'Email' && link.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                  aria-label={link.ariaLabel}
                  className="p-3 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gokul B. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-4 sm:mt-0">
            Built with React, Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
