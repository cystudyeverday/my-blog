'use client';
import { Card, Typography, Tag, Space, Divider } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

export default function Introduction() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'Zustand', 'Tanstack query', 'Figma', 'UI/UX Design'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  src="/avatar.jpg"
                  alt="Avatar"
                  width={150}
                  height={150}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <Title level={1}>Introduction</Title>
            <Paragraph style={{ fontSize: '20px' }}>
              Professional Overview
            </Paragraph>
          </div>

          <Card className="shadow-lg">
            <Space orientation="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={2}>About Me</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                  I am a dedicated software developer and technical professional specializing in
                  creating impactful digital solutions. With <strong>5 years of experience in frontend
                    development</strong> and extensive expertise in modern web technologies, I bring a
                  strong foundation in user experience design and technical excellence to every project.
                  I transform conceptual ideas into robust, user-centric applications that deliver
                  measurable business value.
                </Paragraph>
              </div>

              <Divider />

              <div>
                <Title level={2}>Skills & Expertise</Title>
                <Space wrap>
                  {skills.map((skill) => (
                    <Tag key={skill} style={{ padding: '4px 12px', fontSize: '14px', backgroundColor: '#FFC72C', color: '#DC143C', borderColor: '#DC143C', fontWeight: '600' }}>
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </div>

              <Divider />

              <div>
                {/* <Title level={2}>Interests</Title> */}
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                  Beyond my core development work, I actively pursue professional growth through
                  continuous learning, exploring emerging technologies, and staying current with
                  industry best practices. I am committed to contributing to the open-source
                  community and believe in the importance of knowledge sharing to drive innovation
                  in the technology landscape.
                </Paragraph>
              </div>
            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
}

