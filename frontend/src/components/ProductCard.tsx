import type { Product } from '../types/product';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      {product.imageUrl && <img className="product-image" src={product.imageUrl} alt={product.name} />}
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>
        <h3>{product.name}</h3>
        <strong className="product-price">{product.price}</strong>
        <p>{product.description}</p>
        <div className="tag-list">
          {product.suitableFor.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
