orange + 40
const isPalindrome = str => str === str.split("").reverse().join("");
banana

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const isEven = num => num % 2 === 0;
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const findLargestNumber = numbers => Math.max(...numbers);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
false * 5,24,2,56,33,83,69,99,57,11,7,70,54,58,49,20,93,19,44,92,51,26,52,83,75,73,80,24,73,90,13,65,42,10,74,97,90,76,46,57,69,22,19,64,91,58,19,8,35

console.log(getRandomString());
kiwi

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
let array = getRandomArray(); array.forEach(item => console.log(item));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const filterEvenNumbers = numbers => numbers.filter(isEven);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
