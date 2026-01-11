import { getMealsCollection } from './mongodb';

export async function getMeals() {
        const mealsCol = await getMealsCollection();
        const meals = await mealsCol
                .find({}, { projection: { _id: 0 } })
                .sort({ _id: -1 })
                .toArray();
        return meals;
}

export async function getMeal(slug) {
        const mealsCol = await getMealsCollection();
        const meal = await mealsCol.findOne({ slug }, { projection: { _id: 0 } });
        return meal;
}