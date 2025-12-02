import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import RouteInfo from '@/components/RouteInfo';

export default function MealsPage() {
  return (
    <PageSection>
      <PageTitle>Meals</PageTitle>
      <RouteInfo url="/meals" />
      <p className="page-text">
        To jest lista wszystkich dostępnych posiłków. Wybierz konkretny adres
        pod ścieżką <code>/meals/&lt;nazwa-posiłku&gt;</code>, aby zobaczyć
        szczegóły.
      </p>
    </PageSection>
  );
}
