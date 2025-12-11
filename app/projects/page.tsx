'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, List, Tag, Badge, Typography, Space, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

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
                <Card
                  title={
                    <Space>
                      <span>Project List</span>
                      <Badge count={projects.length} showZero color="#22c55e" />
                    </Space>
                  }
                  className="shadow-xl"
                >
                  <List
                    dataSource={projects}
                    renderItem={(project, index) => (
                      <List.Item
                        onClick={() => setSelectedIndex(index)}
                        className={`cursor-pointer transition-all duration-300 ${selectedIndex === index
                          ? 'bg-green-50 dark:bg-green-900/20 border-l-4 border-l-green-600 dark:border-l-green-500'
                          : 'hover:bg-green-50/50 dark:hover:bg-green-900/10'
                          }`}
                        style={{
                          padding: '16px',
                          borderBottom: '1px solid #f0f0f0',
                        }}
                      >
                        <List.Item.Meta
                          title={
                            <Text
                              strong
                              style={{
                                color: selectedIndex === index ? '#22c55e' : undefined,
                              }}
                            >
                              {project.title}
                            </Text>
                          }
                          description={
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              {project.period}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                    style={{ maxHeight: '600px', overflowY: 'auto' }}
                  />
                </Card>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-2/3">
              <div className={`transition-all duration-700 delay-200 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <Card className="shadow-xl">
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {/* Header */}
                    <div>
                      <Title level={2}>{selectedProject.title}</Title>
                      {selectedProject.period && (
                        <Text type="secondary">{selectedProject.period}</Text>
                      )}
                    </div>

                    <Divider />

                    {/* Project Images */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div>
                        <Title level={4}>Project Screenshots</Title>
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
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                      {selectedProject.description}
                    </Paragraph>

                    {/* Responsibilities */}
                    {selectedProject.responsibilities && selectedProject.responsibilities.length > 0 && (
                      <div>
                        <Title level={4}>Key Responsibilities</Title>
                        <List
                          dataSource={selectedProject.responsibilities}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', marginTop: 8 }} />}
                                description={item}
                              />
                            </List.Item>
                          )}
                        />
                      </div>
                    )}

                    {/* Achievement */}
                    {selectedProject.achievement && (
                      <Card
                        style={{
                          background: 'linear-gradient(to right, #f0fdf4, #ecfdf5)',
                          borderColor: '#86efac',
                        }}
                      >
                        <Text strong style={{ color: '#166534' }}>
                          {selectedProject.achievement}
                        </Text>
                      </Card>
                    )}

                    {/* Technologies */}
                    <div>
                      <Title level={4}>Technologies Used</Title>
                      <Space wrap>
                        {selectedProject.tech.map((tech) => (
                          <Tag key={tech} color="success" style={{ padding: '4px 12px', fontSize: '14px' }}>
                            {tech}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                  </Space>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

