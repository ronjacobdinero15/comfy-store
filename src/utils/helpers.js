export function applyDiscount(price) {
  return Number((price * 0.7).toFixed(2));
}

export function binarySearch(array, targetId, idKey = "id") {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentId = array[mid][idKey];

    if (currentId === targetId) {
      return array[mid]; // Found the item with the matching ID
    } else if (currentId < targetId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return undefined; // Return undefined if the item is not found
}
