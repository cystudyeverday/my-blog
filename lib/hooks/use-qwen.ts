'use client';

import { useState, useEffect, useCallback } from 'react';
import { chatWithQwenStream } from '@/lib/qwen';

interface QueryState {
  data: string;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isSuccess: boolean;
}

export function useQwenQuery(prompt: string): QueryState {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');

  const fetchResponse = useCallback(async () => {
    setLastPrompt(prompt);
    setData('');
    setIsLoading(true);
    setIsError(false);
    setError(null);
    setIsSuccess(false);

    try {
      await chatWithQwenStream(prompt, (chunk) => {
        setData((prev) => prev + chunk);
      });
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  useEffect(() => {
    if (prompt.trim() && prompt !== lastPrompt) {
      fetchResponse();
    }
  }, [prompt, lastPrompt, fetchResponse]);

  return { data, isLoading, isError, error, isSuccess };
}
