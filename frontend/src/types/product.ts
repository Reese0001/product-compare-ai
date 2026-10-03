export type ProductSource = 'manual' | 'text' | 'link' | 'image';

export type ComparisonProject = {
  title: string;
  productType: string;
  budget: string;
  scenario: string;
  priorities: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  category: string;
  source: ProductSource;
  link?: string;
  imageUrl?: string;
  description: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  suitableFor: string[];
};

export type Recommendation = {
  label: string;
  productName: string;
  reason: string;
};
