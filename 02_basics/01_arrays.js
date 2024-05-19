//array

const myArr = [0,1,2,3,4,5,true,"Janvi"]
console.log(myArr[5]);

const myArr2 = new Array(1,2,3,4)

//Array Methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

//slice, splice

console.log("A" , myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3)
console.log("C" , myArr)
console.log(myn2)

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

//marvel_heroes.push(dc_heros)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

const all_heros = marvel_heroes.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heroes, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Janvi"))
console.log(Array.from("Janvi"))
console.log(Array.from({name: "Janvi"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



