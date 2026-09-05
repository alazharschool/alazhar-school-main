import { NextRequest, NextResponse } from 'next/server';
import { scheduleAPI } from '@/lib/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month') || new Date().getMonth() + 1;
    
    const schedule = await scheduleAPI.getStudentSchedule(params.id, month.toString());
    
    return NextResponse.json(schedule);
  } catch (error) {
    console.error('Error fetching student schedule:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule' },
      { status: 500 }
    );
  }
} 