'use client';

import { useState, useEffect, useCallback } from 'react';
import OpenAI from "openai";

// 创建 OpenAI 客户端
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_DASHSCOPE_API_KEY,
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  dangerouslyAllowBrowser: true // 允许在浏览器环境中使用
});

// 流式聊天 API 函数
export async function chatWithQwenStream(
  prompt: string,
  onChunk: (chunk: string) => void,
  conversationHistory?: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>
): Promise<string> {
  if (!prompt.trim()) {
    throw new Error('Prompt cannot be empty');
  }

  const messages = conversationHistory || [
    { role: 'system' as const, content: 'You are a helpful assistant.' }
  ];

  messages.push({ role: 'user', content: prompt });

  try {
    const stream = await openai.chat.completions.create({
      model: "qwen-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true, // 启用流式响应
    });

    let fullContent = '';
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        fullContent += content;
        onChunk(content);
      }
    }

    if (!fullContent) {
      throw new Error('No response from AI');
    }

    return fullContent;
  } catch (error) {
    console.error('Error calling Qwen API:', error);
    throw new Error(`AI request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// 自定义 Hook 用于流式响应
export function useQwenQuery(prompt: string) {
  const [data, setData] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  const fetchResponse = useCallback(async () => {
    if (!prompt.trim() || prompt === currentPrompt) {
      return;
    }

    setCurrentPrompt(prompt);
    setData('');
    setIsLoading(true);
    setIsError(false);
    setError(null);
    setIsSuccess(false);

    try {
      await chatWithQwenStream(
        prompt,
        (chunk) => {
          setData((prev) => prev + chunk);
        }
      );
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [prompt, currentPrompt]);

  useEffect(() => {
    if (prompt.trim() && prompt !== currentPrompt) {
      fetchResponse();
    }
  }, [prompt, currentPrompt, fetchResponse]);

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
