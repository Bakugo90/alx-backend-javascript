const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryLimit = weakMap.get(endpoint);
  if (queryLimit >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, queryLimit + 1);
}
