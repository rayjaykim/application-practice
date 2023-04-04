export function minBy(array, cb) {
  if (!array.length) return;
  let value = array[0];
  for (var i = 1; i < array.length; i++) {
    if (cb(array[i]) < cb(value)) {
      value = array[i];
    }
  }
  return value;
}

export function maxBy(array, cb) {
  if (!array.length) return;
  var value = array[0];
  for (var i = 1; i < array.length; i++) {
    if (cb(array[i]) > cb(value)) {
      value = array[i];
    }
  }
  return value;
}
