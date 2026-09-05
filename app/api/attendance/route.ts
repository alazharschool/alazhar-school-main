import { NextRequest, NextResponse } from 'next/server';
import { scheduleAPI } from '@/lib/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { classId, status, timestamp } = body;
    
    if (!classId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const success = await scheduleAPI.updateAttendance(classId, status);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to update attendance' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error updating attendance:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 