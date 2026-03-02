'use client';

import { useEffect, useState, useCallback } from 'react';
import { Table, Tag, Tooltip, Spin, Typography, Space } from 'antd';
import { ReloadOutlined, GlobalOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface VisitLog {
  id: number;
  ip: string;
  userAgent: string;
  path: string;
  createdAt: string;
}

export default function Logs() {
  const [logs, setLogs] = useState<VisitLog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = useCallback(() => {
    setLoading(true);
    fetch('/api/visitLog')
      .then(res => res.json())
      .then(({ data }) => setLogs(data ?? []))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const columns = [
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
        <Tag color="gold" className="font-mono text-xs max-w-[160px] truncate block">
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

  const stats = [
    {
      label: 'Total Visits',
      value: logs.length,
      icon: <ClockCircleOutlined />,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      label: 'Unique IPs',
      value: new Set(logs.map(l => l.ip)).size,
      icon: <GlobalOutlined />,
      color: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
    {
      label: 'Unique Paths',
      value: new Set(logs.map(l => l.path)).size,
      icon: <UserOutlined />,
      color: 'text-red-500 dark:text-red-300',
      bg: 'bg-orange-50 dark:bg-orange-950/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent mb-2">
            Visit Logs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Real-time visitor activity across the blog
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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

        {/* Table Card */}
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <Space>
              <ClockCircleOutlined className="text-red-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
                Latest Entries
              </span>
            </Space>
            <button
              onClick={fetchLogs}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors disabled:opacity-40"
            >
              <ReloadOutlined className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>

          {/* Table */}
          <Spin spinning={loading}>
            <Table
              dataSource={logs}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 20, showSizeChanger: false, size: 'small' }}
              size="middle"
              className="logs-table"
              locale={{ emptyText: 'No visit logs yet' }}
            />
          </Spin>
        </div>
      </div>
    </div>
  );
}
