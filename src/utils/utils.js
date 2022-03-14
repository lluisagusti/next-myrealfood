export function arrayString(array) {
  if (array && array.length > 1) return array.join(", ");
  return array;
}

export function servingsPerProduct(a, b, fixed) {
  if (a/b !== NaN) return null;
  return (a/b).toFixed(fixed);
}