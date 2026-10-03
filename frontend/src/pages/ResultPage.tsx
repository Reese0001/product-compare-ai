import AiSummary from '../components/AiSummary';
import CompareTable from '../components/CompareTable';
import ProductCard from '../components/ProductCard';
import type { ComparisonProject, Product, Recommendation } from '../types/product';

type ResultPageProps = {
  project: ComparisonProject;
  products: Product[];
  recommendations: Recommendation[];
  onRestart: () => void;
};

export default function ResultPage({ project, products, recommendations, onRestart }: ResultPageProps) {
  return (
    <main className="page result-page">
      <section className="panel page-header split-header">
        <div>
          <span className="eyebrow">第 3 步</span>
          <h1>{project.title}</h1>
          <p>{project.productType} · {project.budget} · 关注：{project.priorities}</p>
        </div>
        <button className="secondary-button" onClick={onRestart}>重新开始</button>
      </section>

      <section>
        <h2>产品基础信息</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>核心参数对比</h2>
        <CompareTable products={products} />
      </section>

      <AiSummary project={project} products={products} recommendations={recommendations} />

      <section className="panel qa-panel">
        <h2>继续追问 AI</h2>
        <div className="question-box">
          <input placeholder="例如：如果预算只有 5500，应该选哪个？" />
          <button className="primary-button">提问</button>
        </div>
      </section>
    </main>
  );
}
