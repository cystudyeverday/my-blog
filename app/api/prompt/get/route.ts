import { NextResponse } from 'next/server';
import { getPromptLogs } from '@/lib/db/prompt-log';

export async function GET() {
  try {
    const promptLogs = await getPromptLogs();
    return NextResponse.json({
      success: true,
      data: promptLogs,
      message: 'action successful'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get prompt logs'
      },
      { status: 500 }
    );
  }
}