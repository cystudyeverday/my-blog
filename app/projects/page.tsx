'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Project Image Component with error handling
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 group bg-gray-100 dark:bg-gray-700">
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      title: 'Housing Authority - AI Lift',
      description: 'Designed a Google Maps-based component to visualize estates with markers, clustering, and filtering. Migrated the project from React to Next.js, optimizing performance and deployment.',
      tech: ['Google Maps', 'React', 'Next.js', 'TypeScript', 'Zustand'],
      status: 'Completed',
      period: 'Aug 2023 - Present',
      images: ['/projects/housing-authority-1.jpg', '/projects/housing-authority-2.jpg'],
      responsibilities: [
        'Designed Google Maps-based visualization component',
        'Implemented markers, clustering, and filtering features',
        'Migrated React SPA to Next.js 14 (App Router)',
        'Optimized building performance and deployment'
      ],
    },
    {
      title: 'BOC & OCBC - Compliance Check Platform',
      description: 'Developed dashboards with multi-type charts, tables, and user interaction features. Implemented role-based access control (RBAC) and real-time data updates via WebSocket.',
      tech: ['React', 'TypeScript', 'Charts', 'Tables', 'RBAC', 'WebSocket'],
      status: 'Completed',
      period: 'Aug 2023 - Present',
      images: ['/projects/compliance-platform-1.jpg'],
      responsibilities: [
        'Developed interactive dashboards with multiple chart types',
        'Implemented role-based access control (RBAC)',
        'Built real-time data updates using WebSocket',
        'Created user interaction features and data tables'
      ],
    },
    {
      title: 'ICAC - Case Analysis Platform',
      description: 'Built the system part and integrated with teams\' AI generated component. Built the knowledge graph component for user to interact with entity relations.',
      tech: ['React', 'TypeScript', 'AI', 'Knowledge Graph', 'Next.js'],
      status: 'Completed',
      period: 'Aug 2023 - Present',
      images: ['/projects/icac-platform-1.jpg', '/projects/icac-platform-2.jpg'],
      responsibilities: [
        'Built core system components',
        'Integrated with AI-generated components',
        'Developed knowledge graph visualization',
        'Implemented entity relationship interactions'
      ],
    },
    {
      title: 'ESG Data Analytics Platform',
      description: 'Architected and built the core analytics dashboard from Figma to production, using BizCharts for interactive data visualization. Transformed complex ESG datasets into intuitive charts for trend analysis and decision-making.',
      tech: ['React', 'TypeScript', 'BizCharts', 'Figma', 'ESG Data', 'Data Visualization'],
      status: 'Completed',
      period: 'Oct 2020 - July 2023',
      images: ['/projects/esg-platform-1.jpg'],
      responsibilities: [
        'Architected and built core analytics dashboard',
        'Transformed Figma designs to production',
        'Implemented interactive data visualization with BizCharts',
        'Converted complex ESG datasets into intuitive charts'
      ],
    },
    {
      title: 'CCAS Platform',
      description: 'Front-end module development. Managing notification lifecycle including creation, delivery, display, and dismissal. Created comprehensive project test plan covering the Notification Module and the entire system.',
      tech: ['React', 'TypeScript', 'Front-end', 'Testing', 'Documentation'],
      status: 'Completed',
      period: 'Oct 2020 - July 2023',
      images: ['/projects/ccas-platform-1.jpg'],
      responsibilities: [
        'Developed front-end modules',
        'Managed notification lifecycle (creation, delivery, display, dismissal)',
        'Created comprehensive test plan for Notification Module',
        'Documented test cases, expected results, and testing methodologies'
      ],
    },
    {
      title: 'Green Hotel Training Game',
      description: 'A training game designed for hotel staff. Responsible for game design and user survey, game programming using Unity, and web development using Ali Cloud to save user information and construct the backend of the game.',
      tech: ['Unity', 'C#', 'Node.js', 'Ali Cloud', 'Web Development'],
      status: 'Completed',
      period: '2019.03 - 2019.07',
      images: ['/projects/green-hotel-1.jpg'],
      responsibilities: [
        'Part of game design and user survey',
        'Game programming by Unity',
        'Web development using Ali Cloud',
        'Backend construction'
      ],
    },
    {
      title: 'Multidimensional Data Visualization Technology Based on Pen Interaction',
      description: 'An innovative Android application that realizes multi-dimensional data visualization through pen interaction. Based on the Android platform, using one-dollar algorithm, human-computer interaction model and jBox2D physics engine. Main functions include gesture recognition, data import, data filtering and coordinate conversion.',
      tech: ['Android', 'Java', 'jBox2D', 'Algorithm Design', 'HCI'],
      status: 'Completed',
      period: '2018.01 - 2018.06',
      images: ['/projects/data-visualization-1.jpg'],
      responsibilities: [
        'Algorithm research and implementation',
        'Gesture recognition development',
        'Data visualization system design',
        'Physics engine integration'
      ],
      achievement: 'Obtained the qualification of excellent papers at the college level',
    },
  ];

  const selectedProject = projects[selectedIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="space-y-8 md:space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <div className={`transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Projects
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                Select a project to view details
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Project Menu List */}
            <div className="lg:w-1/3">
              <div className={`transition-all duration-700 delay-100 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        Project List
                      </h2>
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">
                        {projects.length}
                      </span>
                    </div>
                  </div>
                  <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                    {projects.map((project, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`group w-full text-left p-4 border-b border-gray-100 dark:border-gray-700/50 transition-all duration-300 relative ${selectedIndex === index
                          ? 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-700/30 border-l-4 border-l-gray-900 dark:border-l-white shadow-sm'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:border-l-2 hover:border-l-gray-300 dark:hover:border-l-gray-600'
                          }`}
                      >
                        {selectedIndex === index && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-r-full" />
                        )}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-semibold text-sm md:text-base leading-tight mb-1.5 ${selectedIndex === index
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                              }`}>
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                {project.period}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-2/3">
              <div className={`transition-all duration-700 delay-200 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex flex-col gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        {selectedProject.period && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-medium">{selectedProject.period}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Images */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Project Screenshots
                        </h3>
                        <div className={`grid gap-4 ${selectedProject.images.length === 1
                          ? 'grid-cols-1'
                          : selectedProject.images.length === 2
                            ? 'grid-cols-1 md:grid-cols-2'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                          }`}>
                          {selectedProject.images.map((image, idx) => (
                            <ProjectImage
                              key={idx}
                              src={image}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    {selectedProject.responsibilities && selectedProject.responsibilities.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-3 pl-2">
                          {selectedProject.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group/item"
                            >
                              <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 dark:bg-white group-hover/item:bg-blue-500 transition-colors" />
                              <span className="flex-1 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Achievement */}
                    {selectedProject.achievement && (
                      <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
                        <p className="text-sm md:text-base text-blue-800 dark:text-blue-200 font-medium">
                          {selectedProject.achievement}
                        </p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech, idx) => (
                          <span
                            key={tech}
                            className="px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-600 hover:shadow-md hover:scale-105 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

