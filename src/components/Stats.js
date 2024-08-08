export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start addding</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Ready to Go ✈️"
          : `You have addded ${numItems} items in your list and you already packed
        ${numPacked}(${percentage} %)`}
      </em>
    </footer>
  );
}
