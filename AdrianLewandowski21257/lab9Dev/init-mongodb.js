const { MongoClient } = require('mongodb');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config({ path: '.env' });

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'foodies';

async function loadImageAsBase64(imagePath) {
  const fullPath = path.join(__dirname, 'assets', imagePath);
  const buffer = await fs.readFile(fullPath);
  const mime = imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    imagePath: 'burger.jpg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    imagePath: 'curry.jpg',
    summary:
      'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Homemade Dumplings',
    slug: 'homemade-dumplings',
    imagePath: 'dumplings.jpg',
    summary:
      'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Classic Mac n Cheese',
    slug: 'classic-mac-n-cheese',
    imagePath: 'macncheese.jpg',
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    imagePath: 'pizza.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    imagePath: 'schnitzel.jpg',
    summary:
      'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.',
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
         Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
         Serve hot with a slice of lemon and a side of potato salad or greens.
    `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Fresh Tomato Salad',
    slug: 'fresh-tomato-salad',
    imagePath: 'tomato-salad.jpg',
    summary:
      'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.',
    instructions: `
      1. Prepare the tomatoes:
         Slice fresh tomatoes and arrange them on a plate.

      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.

      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.

      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

async function initMongoDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const mealsCol = db.collection('meals');

    const count = await mealsCol.countDocuments();
    if (count > 0) {
      console.log(`Database already contains ${count} meals, skipping initialization.`);
      return;
    }

    // Load images and convert to base64
    console.log('Loading images...');
    const mealsWithImages = await Promise.all(
      dummyMeals.map(async (meal) => ({
        ...meal,
        image: await loadImageAsBase64(meal.imagePath),
      }))
    );

    // Remove imagePath field before inserting
    const mealsToInsert = mealsWithImages.map(({ imagePath, ...meal }) => meal);

    await mealsCol.insertMany(mealsToInsert);
    console.log(`Inserted ${mealsToInsert.length} meals with base64 images into the database.`);
  } catch (error) {
    console.error('Error initializing MongoDB:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

initMongoDB();
