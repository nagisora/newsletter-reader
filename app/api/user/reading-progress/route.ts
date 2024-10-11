import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { userId, newsletterId, position } = await request.json();

  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .upsert({
        user_id: userId,
        newsletter_id: newsletterId,
        position: position,
      })
      .select();

    if (error) throw error;

    return NextResponse.json({ message: 'Reading progress updated successfully', data });
  } catch (error) {
    console.error('Error updating reading progress:', error);
    return NextResponse.json({ error: 'Failed to update reading progress' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching reading progress:', error);
    return NextResponse.json({ error: 'Failed to fetch reading progress' }, { status: 500 });
  }
}