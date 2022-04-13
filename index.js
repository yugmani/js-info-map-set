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

let john = {name: "john"};
let visitsMap = new Map();

visitsMap.set(john, 123);
console.log(visitsMap.get(john));  //123

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

let ben = {name: "Ben"};
let visitsCount = {};
visitsCount[john] = 123;
visitsCount[ben] = 234;
console.log(visitsCount); //{[object Object]: 234}
// As visitsCount is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

//Chaining
// --------------------------------

//Every map.set call returns the map itself, so we can “chain” the calls:

let nap = new Map();
nap.set("one", "string1")
.set(101, "number1")
.set(true, "boolean1");

console.log(nap.size);  //3
console.log(nap.get(101));  //number1
console.log(nap.has("one"));  //true

nap.delete(true); 
console.log(nap.get(true));   //undefined ? deleted

nap.clear();
console.log(nap.size);  //0 ? cleared
