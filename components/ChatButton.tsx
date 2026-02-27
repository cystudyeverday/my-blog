'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from 'antd';
import { RobotOutlined } from '@ant-design/icons';

export default function ChatButton() {
  const pathname = usePathname();

  if (pathname === '/chat') return null;

  return (
    <Tooltip title="Chat with My AI Assistant" placement="left">
      <Link
        href="/chat"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '40px',
          zIndex: 1000,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #DC143C, #FFC72C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(220,20,60,0.35)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.12)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(220,20,60,0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(220,20,60,0.35)';
        }}
      >
        <RobotOutlined style={{ fontSize: '24px', color: '#fff' }} />
      </Link>
    </Tooltip>
  );
}
