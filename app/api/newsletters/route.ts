import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const fileContent = new TextDecoder().decode(buffer);

  try {
    const { data, error } = await supabase
      .from('newsletters')
      .insert({
        title: file.name,
        content: fileContent,
      })
      .select();

    if (error) throw error;

    return NextResponse.json({ message: 'Newsletter uploaded successfully', data });
  } catch (error) {
    console.error('Error uploading newsletter:', error);
    return NextResponse.json({ error: 'Failed to upload newsletter' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('newsletters')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return NextResponse.json({ error: 'Failed to fetch newsletters' }, { status: 500 });
  }
}