import ItemCard from '../components/ItemCard.jsx';
import { sampleItems } from '../services/itemService.js';

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Compare Anything AI</h1>
        <p>Compare products, services, tools, plans, places, ideas, or any options side by side.</p>
      </section>

      <section className="item-grid">
        {sampleItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
