import OpenAI from 'openai';
import { SYSTEM_PROMPT } from './system-prompt';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  dangerouslyAllowBrowser: true,
});

export async function chatWithQwenStream(
  prompt: string,
  onChunk: (chunk: string) => void,
  conversationHistory?: Message[]
): Promise<string> {
  if (!prompt.trim()) {
    throw new Error('Prompt cannot be empty');
  }

  const messages: Message[] = conversationHistory ?? [
    { role: 'system', content: SYSTEM_PROMPT },
  ];

  messages.push({ role: 'user', content: prompt });

  const stream = await openai.chat.completions.create({
    model: 'qwen-turbo',
    messages,
    temperature: 0.7,
    max_tokens: 2000,
    stream: true,
  });

  let fullContent = '';
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content ?? '';
    if (content) {
      fullContent += content;
      onChunk(content);
    }
  }

  if (!fullContent) {
    throw new Error('No response from AI');
  }

  return fullContent;
}
