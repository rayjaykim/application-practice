import { data } from "../data/data";
import { maxBy, minBy } from "../exercises/e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  var rock = data.asteroids.map(function(val) {
    return val.discoveryYear;
  }).reduce(function(obj, val) {
    obj[val] = obj[val] ? ++obj[val] : 1;
    return obj;
  }, {});
  var newKey = Object.keys(rock);
  var newVal = Object.values(rock);
  var newArr = [];
  for (var i = 0; i < newKey.length; i++) {
    var discovery = {};
    discovery.year = newKey[i];
    discovery.count = newVal[i];
    newArr.push(discovery);
  }
  var maxVal = maxBy(newArr, (rock) => rock.count);
  return Number(maxVal.year);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
