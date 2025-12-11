'use client';
import Link from 'next/link';
import { Button, Card, Typography, Space, Flex } from 'antd';
import { UserOutlined, FolderOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Space direction="vertical" size="large" align="center" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1} style={{ fontSize: '64px', marginBottom: '16px' }}>
              Welcome to My Blog
            </Title>
            <Paragraph style={{ fontSize: '24px', maxWidth: '600px' }}>
              A place where I share my thoughts, projects, and experiences
            </Paragraph>
          </div>

          <Space size="middle" wrap>
            <Button type="primary" size="large" href="/introduction">
              Learn More About Me
            </Button>
            <Button size="large" href="/projects">
              View My Projects
            </Button>
          </Space>

          <Flex gap={24} wrap="wrap" justify="center" style={{ marginTop: '80px', width: '100%' }}>
            <Card hoverable className="shadow-md" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <UserOutlined style={{ fontSize: '48px', color: '#22c55e' }} />
                <Title level={3}>Introduction</Title>
                <Paragraph>
                  Get to know me, my background, and my journey
                </Paragraph>
              </Space>
            </Card>
            <Card hoverable className="shadow-md" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <FolderOutlined style={{ fontSize: '48px', color: '#22c55e' }} />
                <Title level={3}>Projects</Title>
                <Paragraph>
                  Explore my portfolio of work and creative projects
                </Paragraph>
              </Space>
            </Card>
            <Card hoverable className="shadow-md" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <MailOutlined style={{ fontSize: '48px', color: '#22c55e' }} />
                <Title level={3}>Contact</Title>
                <Paragraph>
                  Let&apos;s connect and collaborate on exciting opportunities
                </Paragraph>
              </Space>
            </Card>
          </Flex>
        </Space>
      </div>
    </div>
  );
}

