// update visit log
import { NextRequest, NextResponse } from 'next/server'
import { createVisitLog, getVisitLogs } from '@/lib/db/visit-log'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ip, userAgent, path } = body;
    await createVisitLog(ip, userAgent, path);
    return NextResponse.json(
      {
        success: true,
        data: { ip, userAgent, path },
        message: 'action successful'
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create visit log'
      },
      { status: 500 }
    );
  }
}

// get visit logs
export async function GET() {
  try {
    const visitLogs = await getVisitLogs();
    return NextResponse.json(
      {
        success: true,
        data: visitLogs,
        message: 'action successful'
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to get visit logs'
      },
      { status: 500 });
  }
}