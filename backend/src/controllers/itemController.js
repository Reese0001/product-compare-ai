import { getItems, generateComparison } from '../services/itemService.js';

export function listItems(req, res) {
  res.json({ items: getItems() });
}

export function compareItems(req, res) {
  const { itemIds = [] } = req.body;
  const comparison = generateComparison(itemIds);

  res.json({ comparison });
}
