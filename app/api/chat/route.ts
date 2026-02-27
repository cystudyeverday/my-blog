import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '@/lib/system-prompt';

const openai = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt?.trim()) {
    return Response.json({ error: 'Prompt cannot be empty' }, { status: 400 });
  }

  const stream = await openai.chat.completions.create({
    model: 'qwen-turbo',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 500,
    stream: true,
  });

  const readable = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content ?? '';
        if (content) {
          controller.enqueue(encoder.encode(content));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
