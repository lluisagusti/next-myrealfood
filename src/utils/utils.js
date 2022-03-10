export function arrayString(array) {
    if (array && array.length > 1) return array.join(", ");
    return array;
  }