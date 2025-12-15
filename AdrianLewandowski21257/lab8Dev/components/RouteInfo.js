export default function RouteInfo({ url }) {
  return (
    <p className="route-info">
      Aktualny URL:&nbsp;
      <span>{url}</span>
    </p>
  );
}
