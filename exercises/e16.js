// see e16.md

export function find(array, callback) {
  for (var elem of array) {
    if (callback(elem)) {
      return elem;
    }
  }
}
