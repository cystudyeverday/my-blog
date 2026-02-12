// src/app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Input, Button, List, Card, Typography, Alert } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useQwenQuery } from '@/lib/qwen';

const { TextArea } = Input;
const { Text } = Typography;

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean; // 标记是否正在流式输出
};

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // 使用流式响应 Hook
  const {
    data: aiResponse,
    isLoading,
    isError,
    error,
  } = useQwenQuery(currentPrompt);

  // 自动滚动到底部 - 流式时使用 instant，完成后使用 smooth
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    // 备用方案
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  // 监听消息变化，自动滚动
  useEffect(() => {
    scrollToBottom(isLoading ? 'auto' : 'smooth');
  }, [messages, aiResponse, isLoading]);

  // 处理流式响应
  useEffect(() => {
    if (isLoading && isWaitingResponse) {
      // 开始加载时，添加一个空的 assistant 消息
      setMessages((prev) => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg?.role === 'assistant' && lastMsg.isStreaming) {
          return prev; // 已经有流式消息了
        }
        return [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'assistant',
            content: '',
            isStreaming: true,
          },
        ];
      });
      setIsWaitingResponse(false);
    }

    if (aiResponse && isLoading) {
      // 流式更新最后一条 assistant 消息
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        if (lastIndex >= 0 && newMessages[lastIndex].role === 'assistant') {
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            content: aiResponse,
            isStreaming: true,
          };
        }
        return newMessages;
      });
    }

    if (!isLoading && aiResponse) {
      // 完成流式输出，标记为非流式
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        if (lastIndex >= 0 && newMessages[lastIndex].role === 'assistant') {
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            content: aiResponse,
            isStreaming: false,
          };
        }
        return newMessages;
      });
    }
  }, [aiResponse, isLoading, isWaitingResponse]);

  // 当用户发送消息
  const handleSend = () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);
    setCurrentPrompt(inputValue); // 触发查询
    setIsWaitingResponse(true);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Card title="🤖 AI Streaming Chat" bordered={false}>
        <div 
          ref={messagesContainerRef}
          style={{ 
            height: '50vh', 
            overflowY: 'auto', 
            marginBottom: '16px',
            padding: '8px',
            scrollBehavior: 'smooth'
          }}
        >
          <List
            dataSource={messages}
            renderItem={(msg) => (
              <List.Item
                style={{
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                  padding: '8px 0',
                  border: 'none',
                }}
              >
                <div
                  style={{
                    background: msg.role === 'user' ? '#e6f7ff' : '#f9f9f9',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <Text strong style={{ display: 'block', marginBottom: '4px' }}>
                    {msg.role === 'user' ? '👤 You' : '🤖 Qwen'}
                  </Text>
                  <div style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.content || (msg.isStreaming ? '▊' : '')}
                  </div>
                  {msg.isStreaming && msg.content && (
                    <span 
                      style={{ 
                        animation: 'blink 1s infinite',
                        marginLeft: '2px'
                      }}
                    >
                      ▊
                    </span>
                  )}
                </div>
              </List.Item>
            )}
          />
          <div ref={messagesEndRef} />

          {isError && (
            <Alert
              message="❌ AI 请求失败"
              description={(error as Error)?.message || '未知错误'}
              type="error"
              showIcon
              closable
              style={{ marginTop: '8px' }}
            />
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入问题...（Enter 发送，Shift+Enter 换行）"
            autoSize={{ minRows: 1, maxRows: 4 }}
            disabled={isLoading}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            loading={isLoading}
          >
            发送
          </Button>
        </div>
      </Card>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}