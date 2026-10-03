import type { Product } from '../types/product';

type CompareTableProps = {
  products: Product[];
};

function getSpecRows(products: Product[]) {
  return Array.from(new Set(products.flatMap((product) => Object.keys(product.specs))));
}

export default function CompareTable({ products }: CompareTableProps) {
  const specRows = getSpecRows(products);

  return (
    <div className="table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>对比项</th>
            {products.map((product) => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>价格</td>
            {products.map((product) => (
              <td key={`${product.id}-price`}>{product.price}</td>
            ))}
          </tr>
          {specRows.map((row) => (
            <tr key={row}>
              <td>{row}</td>
              {products.map((product) => (
                <td key={`${product.id}-${row}`}>{product.specs[row] ?? '未提供'}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>主要优点</td>
            {products.map((product) => (
              <td key={`${product.id}-pros`}>{product.pros.join('、')}</td>
            ))}
          </tr>
          <tr>
            <td>主要缺点</td>
            {products.map((product) => (
              <td key={`${product.id}-cons`}>{product.cons.join('、')}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
