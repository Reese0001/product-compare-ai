export function createComparisonSummary(items) {
  if (items.length === 0) {
    return {
      summary: 'No items selected.',
      items: []
    };
  }

  const itemNames = items.map((item) => item.name).join(', ');

  return {
    summary: `Compared ${items.length} item(s): ${itemNames}. Add custom criteria to generate a more specific recommendation.`,
    items
  };
}
