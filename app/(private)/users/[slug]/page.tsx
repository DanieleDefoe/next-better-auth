export default function User({ params }: { params: { slug: string } }) {
  return <div>User {params.slug}</div>;
}
