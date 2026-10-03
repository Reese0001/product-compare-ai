import { items } from '../models/itemModel.js';
import { createComparisonSummary } from '../utils/comparison.js';

export function getItems() {
  return items;
}

export function generateComparison(itemIds) {
  const selectedItems = items.filter((item) => itemIds.includes(item.id));

  return createComparisonSummary(selectedItems);
}
