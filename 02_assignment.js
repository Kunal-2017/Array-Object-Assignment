// Que 2. The following is an array of 10 students ages:
//  const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24#
// 1 Sort the array and find the min and max age
// 2 Find the median age(one middle item or two middle items divided by two)
// 3 Find the average age(all items divided by number of items)
// 4 Find the range of the ages(maa minus min)
// 5 Compare the value of (min - average) and (maa - average), use abs() method

// Sol:

const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// 1. Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

// 2. Find the median age (one middle item or two middle items divided by two)
let medianAge;
const midIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
  medianAge = ages[midIndex];
}

console.log("Median Age:", medianAge);

// 3. Find the average age (all items divided by the number of items)
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

console.log("Average Age:", averageAge);

// 4. Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;

console.log("Age Range:", ageRange);

// 5. Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Min - Average:", minDiff);
console.log("Max - Average:", maxDiff);
