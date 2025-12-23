import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import RouteInfo from '@/components/RouteInfo';

export default function ShareMealPage() {
  return (
    <PageSection>
      <PageTitle>Share a meal</PageTitle>
      <RouteInfo url="/meals/share" />
      <p className="page-text">
        Tutaj możesz udostępnić swój przepis lub posiłek społeczności. Ten
        ekran różni się od dynamicznej podstrony szczegółów, aby łatwiej
        rozpoznać poprawne routingi.
      </p>
    </PageSection>
  );
}
