import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
  const slug = (await params)?.someName;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  return (
    <section className={classes.header}>
      <h1 className={classes.title}>{meal.title}</h1>

      <p className={classes.creator}>
        <span className={classes.creatorName}>{meal.creator}</span>
        <span className={classes.creatorEmail}>{meal.creator_email}</span>
      </p>

      <p className={classes.summary}>{meal.summary}</p>

      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.image}>
            <img src={meal.image} alt={meal.title} />
          </div>
        </div>

        <div className={classes.right}>
          <div className={classes.instructions}>
            <h2>Instructions</h2>
            <pre>{meal.instructions}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
