import { NextResponse } from 'next/server';
import { createMeal } from '@/lib/save-meal';

function requiredString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const title = formData.get('title')?.toString() ?? '';
    const summary = formData.get('summary')?.toString() ?? '';
    const instructions = formData.get('instructions')?.toString() ?? '';
    const creator = formData.get('name')?.toString() ?? '';
    const creator_email = formData.get('email')?.toString() ?? '';
    const imageFile = formData.get('image');

    if (![title, summary, instructions, creator, creator_email].every(requiredString)) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    if (!imageFile || typeof imageFile !== 'object' || !('arrayBuffer' in imageFile)) {
      return NextResponse.json({ message: 'Please attach an image.' }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    if (!buffer.length) {
      return NextResponse.json({ message: 'The uploaded image is empty.' }, { status: 400 });
    }

    const mime = imageFile.type || 'image/png';
    const base64Image = `data:${mime};base64,${buffer.toString('base64')}`;

    const slug = await createMeal({
      title,
      summary,
      instructions,
      creator,
      creator_email,
      image: base64Image,
    });

    return NextResponse.json({ message: 'Meal saved', slug }, { status: 201 });
  } catch (error) {
    console.error('POST /api/meals failed', error);
    return NextResponse.json({ message: 'Saving meal failed.' }, { status: 500 });
  }
}
