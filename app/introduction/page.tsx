'use client';
import { Card, Typography, Tag, Space, Divider } from 'antd';

const { Title, Paragraph } = Typography;

export default function Introduction() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'UI/UX Design'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1}>Introduction</Title>
            <Paragraph style={{ fontSize: '20px' }}>
              A little about myself
            </Paragraph>
          </div>

          <Card className="shadow-lg">
            <Space orientation="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={2}>About Me</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                  Hello! I&apos;m a passionate developer and creative thinker who loves building
                  meaningful digital experiences. With a background in web development and
                  a keen eye for design, I enjoy bringing ideas to life through code.
                </Paragraph>
              </div>

              <Divider />

              <div>
                <Title level={2}>Skills & Expertise</Title>
                <Space wrap>
                  {skills.map((skill) => (
                    <Tag key={skill} color="success" style={{ padding: '4px 12px', fontSize: '14px' }}>
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </div>

              <Divider />

              <div>
                {/* <Title level={2}>Interests</Title> */}
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.75' }}>
                  When I&apos;m not coding, I enjoy exploring new technologies, reading about
                  design trends, and contributing to open-source projects. I believe in
                  continuous learning and staying curious about the ever-evolving world of
                  technology.
                </Paragraph>
              </div>
            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
}

