import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import RouteInfo from '@/components/RouteInfo';

export default function MealDetailsPage({ params }) {
  const mealName = params?.someName ?? 'unknown';
  const normalizedMealName = decodeURIComponent(mealName);

  return (
    <PageSection>
      <PageTitle>Meal details</PageTitle>
      <RouteInfo url={`/meals/${normalizedMealName}`} />
      <p className="page-text">
        To jest przykładowa dynamiczna strona opisująca posiłek o nazwie
        <strong> {normalizedMealName}</strong>.
      </p>
      <p className="page-text">
        Wejdź w dowolny adres <code>/meals/TwojaNazwa</code>, aby zobaczyć jak
        Next.js rozróżnia ten route od statycznego <code>/meals/share</code>.
      </p>
    </PageSection>
  );
}
