'use client';

import { useState } from 'react';
import { Form, Input, Button, Card, Typography, Space, message } from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { name: string; email: string; message: string }) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Thank you for your message! I will get back to you soon.');
        form.resetFields();
      } else {
        const error = await response.json();
        message.error(error.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1}>Contact</Title>
            <Paragraph style={{ fontSize: '20px' }}>
              Let&apos;s connect and work together
            </Paragraph>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <Card title="Get in Touch" className="shadow-lg">
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Space>
                    <MailOutlined style={{ fontSize: '20px' }} />
                    <div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>Email</Text>
                      <div>
                        <Text strong>cyporteveryday@gmail.com</Text>
                      </div>
                    </div>
                  </Space>
                </div>
                <div>
                  {/* <Space>
                    <LinkedinOutlined style={{ fontSize: '20px' }} />
                    <div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>LinkedIn</Text>
                      <div>
                        <Text strong>https://www.linkedin.com/in/cyporteveryday/</Text>
                      </div>
                    </div>
                  </Space> */}
                </div>
                {/* <div>
                  <Space>
                    <GithubOutlined style={{ fontSize: '20px' }} />
                    <div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>GitHub</Text>
                      <div>
                        <Text strong>github.com/yourusername</Text>
                      </div>
                    </div>
                  </Space>
                </div> */}
              </Space>
            </Card>

            <Card title="Send a Message" className="shadow-lg">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input placeholder="your.email@example.com" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <TextArea rows={5} placeholder="Your message..." />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Space>
      </div>
    </div>
  );
}

