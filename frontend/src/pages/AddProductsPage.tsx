import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import type { ComparisonProject, Product } from '../types/product';

type AddProductsPageProps = {
  project: ComparisonProject;
  products: Product[];
  onGenerate: () => void;
};

export default function AddProductsPage({ project, products, onGenerate }: AddProductsPageProps) {
  return (
    <main className="page">
      <section className="panel page-header split-header">
        <div>
          <span className="eyebrow">第 2 步</span>
          <h1>添加产品</h1>
          <p>{project.title} · 建议添加 2-5 个产品，MVP 先支持手动输入和粘贴文本。</p>
        </div>
        <button className="primary-button" onClick={onGenerate}>生成对比</button>
      </section>

      <section className="panel">
        <h2>产品信息输入</h2>
        <ProductForm product={products[0]} />
        <div className="action-row">
          <button className="secondary-button">添加产品</button>
          <button className="secondary-button">AI 提取信息</button>
        </div>
      </section>

      <section>
        <h2>已加入对比</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
