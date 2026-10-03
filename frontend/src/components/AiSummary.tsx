import type { ComparisonProject, Product, Recommendation } from '../types/product';

type AiSummaryProps = {
  project: ComparisonProject;
  products: Product[];
  recommendations: Recommendation[];
};

export default function AiSummary({ project, products, recommendations }: AiSummaryProps) {
  const bestProduct = recommendations[0];

  return (
    <section className="ai-summary panel">
      <div>
        <span className="eyebrow">AI 推荐总结</span>
        <h2>{bestProduct.productName} 更适合作为首选</h2>
        <p>
          基于「{project.scenario}」和「{project.priorities}」这两个需求，
          当前 {products.length} 款产品里，{bestProduct.productName} 的综合平衡性最好。
        </p>
      </div>

      <div className="recommendation-grid">
        {recommendations.map((recommendation) => (
          <article key={recommendation.label} className="recommendation-card">
            <span>{recommendation.label}</span>
            <h3>{recommendation.productName}</h3>
            <p>{recommendation.reason}</p>
          </article>
        ))}
      </div>

      <div className="risk-note">
        <strong>购买风险提醒：</strong>
        以上结论基于当前录入信息生成，实际购买前仍建议确认实时价格、售后政策和具体配置版本。
      </div>
    </section>
  );
}
