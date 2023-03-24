export function minBy(array, cb) {
  var index = 0;
  if (array.length) {
    var value = cb(array[index]);
  } else {
    return undefined;
  }
  for (var i = 1; i < array.length; i++) {
    if (cb(array[i]) < value) {
      value = cb(array[i]);
      index = i;
    }
  }
  return array[index];
}

export function maxBy(array, cb) {
  var index = 0;
  if (array.length) {
    var value = cb(array[index]);
  } else {
    return undefined;
  }
  for (var i = 1; i < array.length; i++) {
    if (cb(array[i]) > value) {
      value = cb(array[i]);
      index = i;
    }
  }
  return array[index];
}
