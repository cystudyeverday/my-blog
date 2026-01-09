'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, Typography } from 'antd';
import { UserOutlined, FolderOutlined, MailOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sections = [
    {
      title: 'Introduction',
      description: 'Learn about my background, skills, and professional journey',
      icon: UserOutlined,
      href: '/introduction',
      color: 'blue',
    },
    {
      title: 'Projects',
      description: 'Explore my portfolio of work and technical achievements',
      icon: FolderOutlined,
      href: '/projects',
      color: 'green',
    },
    {
      title: 'Contact',
      description: 'Connect with me for collaboration opportunities',
      icon: MailOutlined,
      href: '/contact',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-100 dark:border-blue-900/50',
        hoverBg: 'hover:bg-blue-50/80 dark:hover:bg-blue-950/50',
      },
      green: {
        icon: 'text-green-600 dark:text-green-400',
        bg: 'bg-green-50 dark:bg-green-950/30',
        border: 'border-green-100 dark:border-green-900/50',
        hoverBg: 'hover:bg-green-50/80 dark:hover:bg-green-950/50',
      },
      purple: {
        icon: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-950/30',
        border: 'border-purple-100 dark:border-purple-900/50',
        hoverBg: 'hover:bg-purple-50/80 dark:hover:bg-purple-950/50',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div
            className={`text-center transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Link href="/">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                My Blog
              </h1>
            </Link>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A collection of my thoughts, projects, and professional experiences
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const colorClasses = getColorClasses(section.color);

              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`block transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <div
                    className={`group h-full p-8 rounded-2xl border-2 ${colorClasses.border} ${colorClasses.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-900`}
                  >
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl ${colorClasses.bg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className={`text-3xl ${colorClasses.icon}`} />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {section.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      <span className="mr-2">Explore</span>
                      <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div
            className={`mt-20 text-center transition-all duration-700 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="inline-block p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                Interested in working together?
              </p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Quote */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              Building digital experiences, one project at a time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

