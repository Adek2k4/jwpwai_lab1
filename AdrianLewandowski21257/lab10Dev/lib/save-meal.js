import { getMealsCollection } from './mongodb';

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function buildUniqueSlug(title) {
  const mealsCol = await getMealsCollection();
  const base = slugify(title || 'meal') || 'meal';
  let slug = base;
  let counter = 1;

  // Loop until slug is unique in collection
  while (await mealsCol.findOne({ slug }, { projection: { _id: 1 } })) {
    slug = `${base}-${counter}`;
    counter += 1;
  }

  return slug;
}

export async function createMeal({ title, summary, instructions, creator, creator_email, image }) {
  const mealsCol = await getMealsCollection();
  const slug = await buildUniqueSlug(title);

  await mealsCol.insertOne({
    slug,
    title,
    summary,
    instructions,
    creator,
    creator_email,
    image,
    createdAt: new Date(),
  });

  return slug;
}
