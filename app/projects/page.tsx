'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, List, Tag, Badge, Typography, Space, Divider, Alert } from 'antd';

const { Title, Paragraph, Text } = Typography;

// Project Image Component with error handling
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset error state when src changes
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative w-full aspect-video min-h-[200px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 group bg-gray-100 dark:bg-gray-700">
      {!hasError ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => {
              console.error(`Failed to load image: ${src}`);
              setHasError(true);
              setIsLoading(false);
            }}
            onLoadingComplete={() => {
              setIsLoading(false);
            }}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
              <div className="animate-pulse text-gray-400 text-sm">Loading...</div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
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
      title: 'Authority Institution - AI Lift',
      description: 'Designed and developed a Google Maps-based visualization component to display estates with interactive markers, intelligent clustering, and advanced filtering capabilities. Successfully migrated the project from a React single-page application to Next.js 14, significantly optimizing performance and streamlining deployment processes.',
      tech: ['Google Maps', 'React', 'Next.js', 'TypeScript', 'Zustand'],
      status: 'Completed',
      period: 'Jan 2025 - Present',
      images: ['/projects/housing-authority-1.png'],
      showMockDataNotice: true,
      responsibilities: [
        'Designed and developed Google Maps-based visualization component with interactive features',
        'Implemented advanced markers, intelligent clustering, and comprehensive filtering capabilities',
        'Migrated React SPA to Next.js 14 (App Router) architecture',
        'Optimized application performance and streamlined deployment processes'
      ],
    },
    {
      title: 'Bank & Finance - Compliance Check Platform',
      description: 'Developed comprehensive dashboards featuring diverse chart types, interactive data tables, and rich user interaction capabilities. Implemented robust role-based access control (RBAC) and real-time data synchronization via WebSocket connections to ensure up-to-date information delivery.',
      tech: ['React', 'TypeScript', 'Charts', 'Tables', 'RBAC', 'WebSocket'],
      status: 'Completed',
      period: 'Aug 2024 - Aug 2025',
      // images: ['/projects/compliance-platform-1.jpg'],
      responsibilities: [
        'Developed interactive dashboards with multiple chart types and data visualization',
        'Implemented comprehensive role-based authorization control (RBAC) system',
        'Built real-time data synchronization using WebSocket technology',
        'Created intuitive user interaction features and responsive data tables'
      ],
    },
    {
      title: 'Authority Institution - Case Analysis Platform',
      description: 'Architected and developed core system components, seamlessly integrating with AI-generated modules from cross-functional teams. Designed and built an interactive knowledge graph component enabling users to explore and analyze complex entity relationships through intuitive visualizations.',
      tech: ['React', 'TypeScript', 'AI', 'Knowledge Graph', 'Next.js'],
      status: 'Completed',
      period: 'Aug 2024 - Aug 2025',
      images: ['/projects/case-analysis-1.png', '/projects/case-analysis-2.png'],
      showMockDataNotice: true,
      responsibilities: [
        'Designed comprehensive user flows and interaction patterns',
        'Architected and built core system components and infrastructure',
        'Integrated seamlessly with AI-generated components from cross-functional teams',
        'Developed interactive knowledge graph visualization system',
        'Implemented advanced entity relationship interaction capabilities'
      ],
    },
    {
      title: 'Bank & Finance - ESG Data Analytics Platform',
      description: 'Architected and developed the core analytics dashboard from initial Figma designs to production-ready application, leveraging BizCharts for sophisticated interactive data visualization. Successfully transformed complex ESG datasets into intuitive, actionable charts that enable comprehensive trend analysis and informed decision-making.',
      tech: ['React', 'TypeScript', 'BizCharts', 'Figma', 'ESG Data', 'Data Visualization'],
      status: 'Completed',
      period: 'Oct 2022 - July 2023',
      images: ['/projects/esg-1.png', '/projects/esg-2.png'],
      showMockDataNotice: true,
      responsibilities: [
        'Designed system architecture aligned with user requirements and business objectives',
        'Architected and built core analytics dashboard from ground up',
        'Transformed Figma design mockups into fully functional production application',
        'Implemented sophisticated interactive data visualization using BizCharts',
        'Converted complex ESG datasets into intuitive, actionable visualizations'
      ],
    },
    {
      title: 'Green Hotel Training Game',
      description: 'Developed an educational training game designed specifically for hotel staff to enhance their environmental awareness and operational skills. Contributed to game design, conducted user research and surveys, implemented game mechanics using Unity, and developed the web infrastructure using Alibaba Cloud to manage user data and construct the backend services.',
      tech: ['Unity', 'C#', 'Node.js', 'Ali Cloud', 'Web Development'],
      status: 'Completed',
      period: '2019.03 - 2019.07',
      images: ['/projects/game-1.png', '/projects/game-2.png'],
      responsibilities: [
        'Contributed to game design and conducted comprehensive user research and surveys',
        'Developed game mechanics and interactive features using Unity and C#',
        'Built web infrastructure and services using Alibaba Cloud platform',
        'Architected and constructed backend systems for user data management'
      ],
    },
    {
      title: 'Multidimensional Data Visualization Technology Based on Pen Interaction',
      description: 'Developed an innovative Android application enabling multi-dimensional data visualization through intuitive pen-based interactions. Built on the Android platform, incorporating advanced algorithms including the one-dollar gesture recognition algorithm, sophisticated human-computer interaction models, and the jBox2D physics engine. Core functionalities include intelligent gesture recognition, seamless data import, advanced filtering capabilities, and precise coordinate transformation.',
      tech: ['Android', 'Java', 'jBox2D', 'Algorithm Design', 'HCI'],
      status: 'Completed',
      period: '2018.01 - 2018.06',
      images: ['/projects/dv-1.png'],
      responsibilities: [
        'Conducted algorithm research and implemented advanced gesture recognition algorithms',
        'Developed sophisticated gesture recognition and interpretation systems',
        'Designed comprehensive data visualization system architecture',
        'Integrated jBox2D physics engine for realistic interaction simulation'
      ],
      achievement: 'Received recognition for excellent academic paper at the college level',
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
                Explore my portfolio of professional projects and technical achievements
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
                        {selectedProject.showMockDataNotice && (
                          <Alert
                            message="Privacy Notice"
                            description="The screenshots displayed use mock data and design elements to protect the confidentiality of the actual products and client information."
                            type="info"
                            showIcon
                            closable
                            style={{ marginBottom: '16px' }}
                            className="dark:bg-blue-900/20 dark:border-blue-800"
                          />
                        )}
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

