'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RobotOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

export default function ChatButton() {
  const pathname = usePathname();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    fetch('/api/visitLog', {
      method: 'POST',
      body: JSON.stringify({ ip: '127.0.0.1', userAgent, path: pathname }),
    });
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes chat-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(220,20,60,0.45), 0 0 0 0 rgba(220,20,60,0.3); }
          50% { box-shadow: 0 6px 28px rgba(220,20,60,0.6), 0 0 0 10px rgba(220,20,60,0); }
        }
        .chat-fab {
          animation: chat-pulse 2.8s ease-in-out infinite;
          text-decoration: none !important;
        }
        .chat-fab:hover {
          transform: scale(1.07) translateY(-2px) !important;
          box-shadow: 0 8px 32px rgba(220,20,60,0.65), 0 0 0 0 rgba(220,20,60,0) !important;
          animation: none !important;
        }
        .chat-fab-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #fff;
          margin-left: 6px;
          line-height: 1;
        }
      `}</style>
      <Link
        href="/chat"
        className="chat-fab"
        title="Chat with My AI Assistant"
        style={{
          position: 'fixed',
          right: '28px',
          bottom: '40px',
          zIndex: 1000,
          height: '52px',
          padding: '0 20px 0 16px',
          borderRadius: '26px',
          background: 'linear-gradient(135deg, #DC143C 0%, #e8452a 50%, #FFC72C 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease',
          cursor: 'pointer',
        }}
      >
        <RobotOutlined style={{ fontSize: '22px', color: '#fff' }} />
        <span className="chat-fab-label">Chat</span>
      </Link>
    </>
  );
}
