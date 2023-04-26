export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // upadating value for each item
  map.array.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return map;
}
