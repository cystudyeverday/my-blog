import { NextResponse } from 'next/server';
import { createPrompt } from '@/lib/db/prompt-log';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;
    await createPrompt(prompt);
    return NextResponse.json({
      success: true,
      data: { prompt },
      message: 'action successful'
    },
      { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create prompt'
      },
      { status: 500 }
    );
  }
}