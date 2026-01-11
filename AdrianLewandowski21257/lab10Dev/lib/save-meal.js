import sql from 'better-sqlite3';

const db = sql('meals.db');

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildSlug(title) {
  const base = slugify(title || 'meal');
  let slug = base || 'meal';
  let counter = 1;

  while (db.prepare('SELECT 1 FROM meals WHERE slug = ?').get(slug)) {
    slug = `${base}-${counter}`;
    counter += 1;
  }

  return slug;
}

export function createMeal({ title, summary, instructions, creator, creator_email, image }) {
  const slug = buildSlug(title);

  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
     VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run({ slug, title, summary, instructions, creator, creator_email, image });

  return slug;
}
