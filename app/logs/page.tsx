'use client';

import { useEffect, useState, useCallback } from 'react';
import { Table, Tag, Tooltip, Spin, Typography, Space } from 'antd';
import {
  ReloadOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MessageOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

interface VisitLog {
  id: number;
  ip: string;
  userAgent: string;
  path: string;
  createdAt: string;
}

interface PromptLog {
  id: number;
  prompt: string;
  createdAt: string;
}

export default function Logs() {
  const [visitLogs, setVisitLogs] = useState<VisitLog[]>([]);
  const [promptLogs, setPromptLogs] = useState<PromptLog[]>([]);
  const [visitLoading, setVisitLoading] = useState(true);
  const [promptLoading, setPromptLoading] = useState(true);

  const fetchVisitLogs = useCallback(() => {
    setVisitLoading(true);
    fetch('/api/visitLog')
      .then(res => res.json())
      .then(({ data }) => setVisitLogs(data ?? []))
      .finally(() => setVisitLoading(false));
  }, []);

  const fetchPromptLogs = useCallback(() => {
    setPromptLoading(true);
    fetch('/api/prompt/get')
      .then(res => res.json())
      .then(({ data }) => setPromptLogs(data ?? []))
      .finally(() => setPromptLoading(false));
  }, []);

  useEffect(() => {
    fetchVisitLogs();
    fetchPromptLogs();
  }, [fetchVisitLogs, fetchPromptLogs]);

  const visitColumns = [
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      width: 140,
      render: (ip: string) => (
        <Tag icon={<GlobalOutlined />} color="red" className="font-mono text-xs">
          {ip}
        </Tag>
      ),
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
      width: 180,
      render: (path: string) => (
        <Tag color="gold" className="font-mono text-xs">
          {path}
        </Tag>
      ),
    },
    {
      title: 'User Agent',
      dataIndex: 'userAgent',
      key: 'userAgent',
      render: (ua: string) => (
        <Tooltip title={ua} placement="topLeft">
          <Text className="text-gray-500 dark:text-gray-400 text-xs" ellipsis style={{ maxWidth: 420 }}>
            {ua}
          </Text>
        </Tooltip>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
      render: (text: string) => (
        <span className="text-gray-500 dark:text-gray-400 text-xs font-mono whitespace-nowrap">
          {new Date(text).toLocaleString()}
        </span>
      ),
    },
  ];

  const promptColumns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 60,
      render: (id: number) => (
        <span className="text-gray-400 text-xs font-mono">{id}</span>
      ),
    },
    {
      title: 'Prompt',
      dataIndex: 'prompt',
      key: 'prompt',
      render: (prompt: string) => (
        <Tooltip title={prompt} placement="topLeft">
          <Text className="text-gray-700 dark:text-gray-300 text-sm" ellipsis style={{ maxWidth: 600 }}>
            {prompt}
          </Text>
        </Tooltip>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
      render: (text: string) => (
        <span className="text-gray-500 dark:text-gray-400 text-xs font-mono whitespace-nowrap">
          {new Date(text).toLocaleString()}
        </span>
      ),
    },
  ];

  const stats = [
    {
      label: 'Total Visits',
      value: visitLogs.length,
      icon: <ClockCircleOutlined />,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      label: 'Unique IPs',
      value: new Set(visitLogs.map(l => l.ip)).size,
      icon: <GlobalOutlined />,
      color: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
    {
      label: 'Unique Paths',
      value: new Set(visitLogs.map(l => l.path)).size,
      icon: <UserOutlined />,
      color: 'text-orange-500 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      label: 'Total Prompts',
      value: promptLogs.length,
      icon: <MessageOutlined />,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent mb-2">
            Logs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Real-time visitor activity and chat prompts
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex items-center gap-4 shadow-sm"
            >
              <div className={`p-3 rounded-xl text-xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Logs Table */}
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <Space>
              <GlobalOutlined className="text-red-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
                Visit Logs
              </span>
              <Tag color="red" className="ml-1">{visitLogs.length}</Tag>
            </Space>
            <button
              onClick={fetchVisitLogs}
              disabled={visitLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors disabled:opacity-40"
            >
              <ReloadOutlined className={visitLoading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
          <Spin spinning={visitLoading}>
            <Table
              dataSource={visitLogs}
              columns={visitColumns}
              rowKey="id"
              pagination={{ pageSize: 20, showSizeChanger: false, size: 'small' }}
              size="middle"
              locale={{ emptyText: 'No visit logs yet' }}
            />
          </Spin>
        </div>

        {/* Prompt Logs Table */}
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <Space>
              <FileTextOutlined className="text-purple-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
                Prompt Logs
              </span>
              <Tag color="purple" className="ml-1">{promptLogs.length}</Tag>
            </Space>
            <button
              onClick={fetchPromptLogs}
              disabled={promptLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors disabled:opacity-40"
            >
              <ReloadOutlined className={promptLoading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
          <Spin spinning={promptLoading}>
            <Table
              dataSource={promptLogs}
              columns={promptColumns}
              rowKey="id"
              pagination={{ pageSize: 20, showSizeChanger: false, size: 'small' }}
              size="middle"
              locale={{ emptyText: 'No prompt logs yet' }}
            />
          </Spin>
        </div>

      </div>
    </div>
  );
}
