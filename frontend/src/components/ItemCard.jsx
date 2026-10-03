export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <span className="item-type">{item.type}</span>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      {item.value && <strong>{item.value}</strong>}
    </article>
  );
}
