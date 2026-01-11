import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
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

    const ext = path.extname(imageFile.name || '').toLowerCase() || '.png';
    const fileName = `${randomUUID()}${ext}`;
    const targetPath = path.join(process.cwd(), 'public', 'images', fileName);

    await fs.writeFile(targetPath, buffer);

    const slug = createMeal({
      title,
      summary,
      instructions,
      creator,
      creator_email,
      image: `/images/${fileName}`,
    });

    return NextResponse.json({ message: 'Meal saved', slug }, { status: 201 });
  } catch (error) {
    console.error('POST /api/meals failed', error);
    return NextResponse.json({ message: 'Saving meal failed.' }, { status: 500 });
  }
}
