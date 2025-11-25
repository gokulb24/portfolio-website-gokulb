'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, Modal } from '@/components';
import profile from '@/data/profile.json';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof profile.projects)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof profile.projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100"
          >
            {profile.projects.length} projects showcasing my skills and experience
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              year={project.year}
              tags={project.tags}
              metrics={project.metrics as unknown as Record<string, string | number>}
              links={project.links}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Year</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {selectedProject.year}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Description</p>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {selectedProject.metrics && Object.keys(selectedProject.metrics).length > 0 && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Metrics</p>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedProject.metrics as unknown as Record<string, string | number>).map(([key, value]) => (
                    <div key={key} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 capitalize">
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

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(selectedProject.links.demo || selectedProject.links.github) && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Links</p>
                <div className="flex gap-3">
                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-center"
                    >
                      View Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors text-center"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
