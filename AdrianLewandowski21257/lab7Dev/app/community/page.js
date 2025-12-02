import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import RouteInfo from '@/components/RouteInfo';

export default function CommunityPage() {
  return (
    <PageSection>
      <PageTitle>Community</PageTitle>
      <RouteInfo url="/community" />
      <p className="page-text">
        Dołącz do społeczności Foodies i dziel się ulubionymi posiłkami z
        innymi uczestnikami laboratoriów.
      </p>
    </PageSection>
  );
}
