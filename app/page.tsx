'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Card, Typography, Space, Flex } from 'antd';
import { UserOutlined, FolderOutlined, MailOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pageCards = [
    {
      title: 'Introduction',
      description: 'Get to know me, my background, and my journey',
      icon: UserOutlined,
      href: '/introduction',
      gradient: 'from-red-600 to-red-500',
      iconColor: '#DC143C',
    },
    {
      title: 'Projects',
      description: 'Explore my portfolio of work and creative projects',
      icon: FolderOutlined,
      href: '/projects',
      gradient: 'from-yellow-400 to-yellow-500',
      iconColor: '#FFC72C',
    },
    {
      title: 'Contact',
      description: 'Let\'s connect and collaborate on exciting opportunities',
      icon: MailOutlined,
      href: '/contact',
      gradient: 'from-red-600 to-yellow-400',
      iconColor: '#DC143C',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <Space direction="vertical" size="large" align="center" style={{ width: '100%' }}>
          {/* Hero Section with Animation */}
          <div
            className={`text-center transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
          >
            <Link href="/">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent animate-gradient cursor-pointer hover:opacity-80 transition-opacity">
                Welcome to Cyporteveryday&apos;s Blog
              </h1>
            </Link>
            <Paragraph
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              style={{ fontSize: '24px', maxWidth: '600px' }}
            >
              A place where I share my thoughts, projects, and experiences
            </Paragraph>
          </div>

          {/* Action Buttons with Animation */}
          <div
            className={`transition-all duration-1000 delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <Space size="middle" wrap>
              <Link href="/introduction">
                <Button
                  type="primary"
                  size="large"
                  className="h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  icon={<UserOutlined />}
                >
                  Learn More About Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="large"
                  className="h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
                  icon={<FolderOutlined />}
                >
                  View My Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="large"
                  className="h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
                  icon={<MailOutlined />}
                >
                  Get In Touch
                </Button>
              </Link>
            </Space>
          </div>

          {/* Page Cards with Links and Animations */}
          <Flex
            gap={24}
            wrap="wrap"
            justify="center"
            className="mt-20 md:mt-32 w-full"
          >
            {pageCards.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <div
                  key={page.href}
                  className={`transition-all duration-700 ${isMounted
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                    flex: '1 1 300px',
                    maxWidth: '400px'
                  }}
                >
                  <Link href={page.href} className="block h-full group">
                    <Card
                      hoverable
                      className="shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-opacity-50 dark:hover:border-opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                        backdropFilter: 'blur(10px)',
                        height: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                      bodyStyle={{ padding: '32px' }}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      <Space
                        direction="vertical"
                        align="center"
                        className="w-full text-center relative z-10"
                        size="large"
                      >
                        {/* Icon with animated background */}
                        <div
                          className={`p-6 rounded-2xl bg-gradient-to-br ${page.gradient} bg-opacity-10 dark:bg-opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                          style={{
                            width: '96px',
                            height: '96px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconComponent
                            style={{
                              fontSize: '48px',
                              color: page.iconColor,
                              transition: 'transform 0.3s ease'
                            }}
                          />
                        </div>

                        <Title
                          level={3}
                          className="!mb-2 !mt-0"
                          style={{ fontSize: '24px', fontWeight: 600 }}
                        >
                          {page.title}
                        </Title>

                        <Paragraph
                          className="!mb-0 text-gray-600 dark:text-gray-300"
                          style={{ fontSize: '16px', lineHeight: '1.6' }}
                        >
                          {page.description}
                        </Paragraph>

                        {/* Arrow indicator */}
                        <div className="mt-4 flex items-center text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium mr-2">Explore</span>
                          <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </Space>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </Flex>

          {/* Decorative bottom section */}
          <div
            className={`mt-20 text-center transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Paragraph className="text-gray-500 dark:text-gray-400 italic">
              &quot;Building digital experiences, one project at a time&quot;
            </Paragraph>
          </div>
        </Space>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

