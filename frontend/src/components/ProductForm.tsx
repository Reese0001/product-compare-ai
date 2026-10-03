import type { Product } from '../types/product';

type ProductFormProps = {
  product?: Product;
};

export default function ProductForm({ product }: ProductFormProps) {
  return (
    <form className="product-form">
      <label>
        产品名称
        <input defaultValue={product?.name ?? ''} placeholder="例如 ThinkBook 14+" />
      </label>
      <label>
        品牌
        <input defaultValue={product?.brand ?? ''} placeholder="例如 Lenovo" />
      </label>
      <label>
        价格
        <input defaultValue={product?.price ?? ''} placeholder="例如 ¥6299" />
      </label>
      <label>
        商品链接
        <input defaultValue={product?.link ?? ''} placeholder="粘贴电商或官网链接" />
      </label>
      <label className="full-span">
        产品介绍 / 参数文本
        <textarea defaultValue={product?.description ?? ''} placeholder="粘贴商品介绍、参数表或测评摘要" rows={5} />
      </label>
    </form>
  );
}
