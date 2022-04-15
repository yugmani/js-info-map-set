// Import stylesheets
import './style.css';

//Map
// **********************************

// Map is a collection of keyed data items,
// -----------------------------------------

let map = new Map();
console.log(map);

map.set('1', 'str1'); //"1"->key, "str1"->value - a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); //a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); //"num1"
console.log(map.get('1')); // "str1"
console.log(map.get(true)); // "bool1"

console.log(map.size); //3

// map[key] isn’t the right way to use a Map
// --------------------------------------------

map[1] = 2;
console.log(map.get(1)); //num1
//This is working but it is treating map as a plain javascript object, so it implies all corresponding limitations(only string/symbol keys and so on);

//Map can also use objects as keys.
// --------------------------------------

let john = { name: 'john' };
let visitsMap = new Map();

visitsMap.set(john, 123);
console.log(visitsMap.get(john)); //123

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

let ben = { name: 'Ben' };
let visitsCount = {};
visitsCount[john] = 123;
visitsCount[ben] = 234;
console.log(visitsCount); //{[object Object]: 234}
// As visitsCount is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

//Chaining
// --------------------------------

//Every map.set call returns the map itself, so we can “chain” the calls:

let nap = new Map();
nap.set('one', 'string1').set(101, 'number1').set(true, 'boolean1');

console.log(nap.size); //3
console.log(nap.get(101)); //number1
console.log(nap.has('one')); //true

nap.delete(true);
console.log(nap.get(true)); //undefined ? deleted

nap.clear();
console.log(nap.size); //0 ? cleared

//Iteration over Map
// -------------------------------------

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

//iterate over keys(vegetables)
for(let vegies of recipeMap.keys()){
  console.log(vegies);
}

// cucumber, tomatoes, onion

//iterate over values(amounts)
let total = 0;
for (let amount of recipeMap.values()){
  console.log(amount);  
  total += amount;
}

//500, 350, 50
console.log("Total: ", total);  //900

//iterate over [key, value] entries
for(let entry of recipeMap){
  console.log(entry);
}
// ["cucumber", 500] ["tomatoes", 350] ["onion", 50]

// The insertion order is used
// The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

//Besides that, Map has a built-in forEach method, similar to Array:
recipeMap.forEach((value, key, map) =>{
  console.log(`${key}: ${value}`);
})

// cucumber: 500 tomatoes: 350 onion: 50

//Object.entries: Map from Object
// **********************************************

//When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

//array of [key, value] pairs
let gap = new Map([
['1', 'str1'],
[1, 'num1'],
[true, 'bool1']
]);

console.log(gap.get('1'));  //str1
console.log(gap.get(1));  //num1

//If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
// So we can create a map from an object like this:
let obj = {
  name : "John",
  age : 30
};

let tap = new Map(Object.entries(obj));

console.log(tap.get('name'));   //John
console.log(tap.get('age')); //30

