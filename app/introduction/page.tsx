'use client';
import { Card, Typography, Tag, Space, Divider, Timeline } from 'antd';
import Image from 'next/image';

const { Title, Paragraph, Text } = Typography;

const skillCategories = [
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS'] },
  { label: 'Frameworks', items: ['React 18+', 'Next.js 14', 'Node.js'] },
  { label: 'State Management', items: ['Zustand', 'Redux Toolkit', 'Context API'] },
  { label: 'Visualization', items: ['BizCharts', 'Google Maps API', 'D3.js', 'WebSocket'] },
  { label: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Figma', 'Docker', 'CI/CD'] },
  { label: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress'] },
];

const languages = [
  { lang: 'English', level: 'Professional Working Proficiency' },
  { lang: 'Mandarin', level: 'Native' },
  { lang: 'Cantonese', level: 'Fluent' },
];

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>

          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image
                  src="/avatar.jpg"
                  alt="Cai Yang"
                  width={150}
                  height={150}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <Title level={1}>Cai Yang</Title>
            <Paragraph style={{ fontSize: '18px', color: '#3498db', fontWeight: 600, margin: 0 }}>
              Senior Engineer, Frontend Development
            </Paragraph>
            <Paragraph style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
              📍 Hong Kong &nbsp;·&nbsp; 📧 cysporteveryday@gmail.com
            </Paragraph>
          </div>

          <Card className="shadow-lg">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>

              {/* Professional Summary */}
              <div>
                <Title level={2}>Professional Summary</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                  Results-driven <strong>Senior Frontend Developer</strong> with <strong>5+ years of experience</strong> specializing in{' '}
                  <strong>Next.js, React, and TypeScript</strong>. Proven expertise in migrating legacy SPAs to modern
                  Next.js architectures, optimizing build performance, and architecting scalable state management
                  solutions (Zustand/Redux). Adept at leading cross-functional teams to deliver data-intensive dashboards
                  and real-time visualization tools for government and financial sectors. Passionate about code quality,
                  UI/UX excellence.
                </Paragraph>
              </div>

              <Divider />

              {/* Skills */}
              <div>
                <Title level={2}>Technical Skills</Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  {skillCategories.map(({ label, items }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                      <Text strong style={{ minWidth: '140px', color: '#2c3e50' }}>{label}:</Text>
                      <Space wrap>
                        {items.map((skill) => (
                          <Tag
                            key={skill}
                            style={{
                              padding: '4px 12px',
                              fontSize: '13px',
                              backgroundColor: '#FFC72C',
                              color: '#DC143C',
                              borderColor: '#DC143C',
                              fontWeight: '600',
                            }}
                          >
                            {skill}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                  ))}
                </Space>
              </div>

              <Divider />

              {/* Experience */}
              <div>
                <Title level={2}>Professional Experience</Title>
                <div style={{ marginBottom: '8px' }}>
                  <Text strong style={{ fontSize: '16px', color: '#2c3e50' }}>
                    ASTRI — Hong Kong Applied Science and Technology Research Institute
                  </Text>
                  <Text type="secondary" style={{ display: 'block', fontSize: '13px' }}>Aug 2019 – Present</Text>
                </div>
                <Timeline
                  style={{ marginTop: '16px', marginLeft: '8px' }}
                  items={[
                    {
                      color: '#DC143C',
                      children: (
                        <div>
                          <Text strong>Senior Frontend Engineer</Text>
                          <Text type="secondary" style={{ marginLeft: '10px', fontSize: '12px' }}>Aug 2023 – Present</Text>
                        </div>
                      ),
                    },
                    {
                      color: '#FFC72C',
                      children: (
                        <div>
                          <Text strong>Frontend Engineer</Text>
                          <Text type="secondary" style={{ marginLeft: '10px', fontSize: '12px' }}>Oct 2020 – July 2023</Text>
                        </div>
                      ),
                    },
                    {
                      color: '#aaa',
                      children: (
                        <div>
                          <Text strong>Engineer (PI)</Text>
                          <Text type="secondary" style={{ marginLeft: '10px', fontSize: '12px' }}>Nov 2019 – Oct 2020</Text>
                        </div>
                      ),
                    },
                  ]}
                />
                <Space direction="vertical" size="small" style={{ width: '100%', marginTop: '8px' }}>
                  {[
                    { label: 'Architecture & Migration', desc: 'Spearheaded migration of large-scale legacy React apps to Next.js 14 (App Router), improving SEO scores and reducing initial load time significantly.' },
                    { label: 'State Management', desc: 'Architected a global state management system using Zustand, replacing complex Redux logic and reducing boilerplate code by ~40%.' },
                    { label: 'Real-time Data', desc: 'Engineered high-performance dashboards integrating WebSocket for real-time data streaming, handling concurrent updates with zero latency issues.' },
                    { label: 'Leadership', desc: 'Led a team of developers; conducted code reviews and established coding standards.' },
                  ].map(({ label, desc }) => (
                    <Paragraph key={label} style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: 0 }}>
                      <Text strong style={{ color: '#DC143C' }}>{label}: </Text>{desc}
                    </Paragraph>
                  ))}
                </Space>
              </div>

              <Divider />

              {/* Education */}
              <div>
                <Title level={2}>Education</Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                    <div>
                      <Text strong style={{ display: 'block' }}>M.Sc. in Multimedia Entertainment Technology</Text>
                      <Text type="secondary">The Hong Kong Polytechnic University, School of Design</Text>
                    </div>
                    <Text type="secondary" style={{ fontStyle: 'italic' }}>2019 – 2020</Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                    <div>
                      <Text strong style={{ display: 'block' }}>B.Eng. in Internet of Things (IoT)</Text>
                      <Text type="secondary">Nanjing University of Aeronautics and Astronautics, School of Computer Science</Text>
                    </div>
                    <Text type="secondary" style={{ fontStyle: 'italic' }}>2014 – 2018</Text>
                  </div>
                </Space>
              </div>

              <Divider />

              {/* Languages */}
              <div>
                <Title level={2}>Languages</Title>
                <Space wrap>
                  {languages.map(({ lang, level }) => (
                    <div key={lang} style={{ textAlign: 'center', minWidth: '120px' }}>
                      <Text strong style={{ display: 'block', color: '#2c3e50' }}>{lang}</Text>
                      <Text type="secondary" style={{ fontSize: '13px' }}>{level}</Text>
                    </div>
                  ))}
                </Space>
              </div>

            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
}
