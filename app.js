const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["Will", "Nolan", "Nate", "Nathan", "Brady"];
const nameObj = [
  { name: "Will" },
  { name: "Nolan" },
  { name: "Nate" },
  { name: "Nathan" },
  { name: "Brady" },
];

const fullNames = [
  { first: "Will", last: "Richeson", isDogOwner: false },
  { first: "Nolan", last: "Schmidt" },
  { first: "Nate", last: "Edgar", isDogOwner: true },
  { first: "Nathan", last: "Garner", isDogOwner: true },
  { first: "Brady", last: "Wright" },
];

function doubleValues(arr) {
  let doubleNums = [];
  arr.forEach(function (val) {
    doubleNums.push(val * 2);
  });
  return doubleNums;
}

let doubleNums = doubleValues(nums);
console.log(doubleNums);

function onlyEvenValues(arr) {
  let evenArray = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evenArray.push(val);
    }
  });
  return evenArray;
}

let evenArray = onlyEvenValues(nums);
console.log(evenArray);

function showFirstAndLast(arr) {
  let firstAndLast = [];
  arr.forEach(function (str) {
    firstAndLast.push(str.charAt(0) + str.charAt(str.length - 1));
  });
  return firstAndLast;
}

let firstAndLast = showFirstAndLast(names);
console.log(firstAndLast);

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (obj) {
    obj[key] = value;
  });
  return arr;
}

let newKeyValue = addKeyAndValue(nameObj, "Title: ", "friend!");
console.log(newKeyValue);

function vowelCount(arr) {
  let vCountArr = [];
  arr.forEach(function (str) {
    let vowels = "aeiou";
    let count = {};
    Array.from(str.toLowerCase()).forEach(function (letter) {
      if (vowels.includes(letter)) {
        count[letter] = (count[letter] || 0) + 1;
      }
    });
    vCountArr.push(count);
  });
  return vCountArr;
}

let count = vowelCount(names);
console.log(count);

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

let doubleMap = doubleValuesWithMap(nums);
console.log(doubleMap);

function valTimesIndex(arr) {
  return arr.map(function (val, index) {
    return val * index;
  });
}

let timesIndex = valTimesIndex(nums);
console.log(timesIndex);

function extractKey(arr, key) {
  return arr.map(function (obj) {
    return obj[key];
  });
}

let extractNames = extractKey(fullNames, "first");
console.log(extractNames);

function extractFullName(arr) {
  return arr.map(function (obj) {
    return obj.first + " " + obj.last;
  });
}

let fullName = extractFullName(fullNames);
console.log(fullName);

function filterByValue(arr, key) {
  return arr.filter(function (obj) {
    return obj[key] === true;
  });
}

let dogOwners = filterByValue(fullNames, "isDogOwner");
console.log(dogOwners); //should return Nate and Nathan

function find(arr, val) {
  let result = arr.filter(function (element) {
    return element === val;
  });
  return result[0];
}

console.log(find(nums, 9)); //should spit out new array of [9]
console.log(find(nums, 15)); //should return undefined

function findInObj(arr, key, value) {
  let result = arr.filter(function (obj) {
    return obj[key] === value;
  });
  return result;
}

let trueDogOwners = findInObj(fullNames, "isDogOwner", true);
console.log(trueDogOwners);

function removeVowels(str) {
  let vowels = "aeiouAIEOU";
  let result = Array.from(str)
    .filter(function (char) {
      return !vowels.includes(char);
    })
    .join("")
    .toLowerCase();

  return result;
}

console.log(removeVowels("Nolan Schmidt"));
console.log(removeVowels("Nate Edgar"));

function doubleOddNumbers(arr) {
  return arr
    .filter(function (num) {
      return num % 2 !== 0;
    })
    .map(function (oddNum) {
      return oddNum * 2;
    });
}

let doubleOdds = doubleOddNumbers(nums);
console.log(doubleOdds);
