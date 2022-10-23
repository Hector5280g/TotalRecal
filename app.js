// // STRINGS 
// let firstVariable = "Hello World";
// let secondVariable = undefined;
// let yourName = "Hector";
// firstVariable = 1337;
// secondVariable = firstVariable; 
// secondVariable = "Hello Hello World";
// let output = `Hello my name is  ${yourName}!`;
// console.log(output);
// //BOOLEANS
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';
 

//   console.log(a < b); //true
//   console.log(c > d);// true
//   console.log('Name' === 'Name'); //true
// //------------------------------------------

// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false || false)
// console.log(e  && 'Kevin');
// console.log(a || b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 && '48');


//the Farm
// let animal = prompt('name an animal');
// if (animal != 'cow') {
// console.log('we dont have this animal' )
// console.log('Try a cow.... try it.... do it')
// }
// else if (animal === cow ){
//     console.log('Moooooooo')
//  }

//Driver's Ed
// let currentAge; 
// currentAge = prompt("What is your age?");
// if (currentAge >= 16){
//     console.log("Here are your keys!");
// } else if (currentAge < 16 ) {
//     console.log("Sorry youre too young.")
// }

//LOOPS

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }
// for(let i1 =10; i1 <= 400; i1++){
//     console.log(i1);
// }
// for(let i2 = 12; i2 <= 4000; i2 += 3){
//     console.log(i2)
// }


//Get Even
// for(let i3 = 1; i3 <= 100; i3++){
//     if(i3 % 2 ==0) {
//         console.log(`${i3}<---- this is a even number `);
//     } else {
//         console.log(i3)
//     }
// }
//Give Me 5
// for(let i4 = 0;i4 <= 100; i4++){
//     if(i4 > 0 && !(i4%5))
//     {console.log(`I found a ${i4} high five! `);
//     }
//     if(i4 > 0 && !(i4%3))
//     {console.log(`I found a ${i4}. Three is a crowd `);
//     }
//     }

//Savings Account
// let total = [1,2,3,4,5,6,7,8,9,10];
// let bankAccount = 0;
// total.forEach(element => {
// bankAccount += element 
// });
// console.log(bankAccount)
//--------
// let bankAccount2 = 0;
// for(i = 0; i <= 10; i++) {
// bankAccount2 += i ;
// } 

// let bankAccount3 = 0;
// for(i = 0; i <= 10; i++) {
// bankAccount3 += i * 2}
// console.log(bankAccount3);

// //ARRAYS & CONTROL FLOW
//  let quotes = [`dont get high on your own supply`, 'No one owes you anything', ' you vs you'];
 
// const myArray = [5, 10, 500, 20]
// myArray.push('aegon', 'testing');
// myArray.shift(myArray);
// myArray.unshift('Bob marley');
// myArray.pop()
// myArray.reverse();

// Biggie Problem.

// let bigSmall = prompt('Enter a number between 1-500.');
// if (bigSmall <= 100){
//     console.log('little number')
// }
// else if (bigSmall >= 100 ) {
//     console.log("big number")
// }

//g

// let monkey = prompt('Enter a number between 1-500.' );
// if( monkey < 5 ){
//     console.log ( 'little number')
// }
// else if  (monkey > 10){
//     console.log('Big number')
// }
// else {
//     console.log("monkey")
// }  

// closet 

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
// kristynsCloset.splice(6,0,'raybans');
// kristynsCloset.splice(5,1, 'stained knit hat');

// console.log(kristynsCloset)

//toms 

// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]

//   ];
//   thomsCloset[1].pop();
//   thomsCloset[1].push('Footie pjs');
//   console.log(thomsCloset);
//  console.log(`Tom is looking S E X Y in his ${thomsCloset[0][1]}, his ${thomsCloset[1][2]}, while rocking ${thomsCloset[2][2]}! `);

//Functions !!!!!

// Printcool 

// printCool = function(name) {
// this.name = name 
// } 
// name = prompt('What is your name');
// console.log(`${this.name} is cool! `);

//volume 
// let calculateCube = (length, width, height) => {

//     let volume = length * width * height;
//     console.log(`this cube has the volume of ${volume}`);

// }
// calculateCube(20,20,20);

//vowel

// function isVowel(letter){
// let vowel = ['a','e','i','o','u']
// for( let i = 0; i<vowel.length; i++){
//     if (letter === vowel[i]){
//         return true;
    
//     }
// }
// return false;

// }
// console.log(`e is a vowel? || ${isVowel('e')}`);

//Get Two lengths 

//getTwoLengths simple
// function getTwoLengths(string1, string2){
//     return [string1.length, string2.length];
// }

// multi lenghts
// function twoLengths(str1, str2,) {
//     let arr = [];
//     for (var i = 0; i < arguments.length; i++) {
//       arr.push(arguments[i].length);
//     }
  
//     return arr;
//   }
  
//   console.log(twoLengths("hellooooooooooooooooooo", "okayyyyyyyyy"," bakbfskjahbkfsa", "fhakhfdksahfiuehsaiufhkahbzskjbfakjsf"));

//another solution 
// function getMultiple (strings){
//     const output = [];
//     for(let string of strings){
//         output.push (string.length);
//     }return output;
// }

// maxofthree

// function maxOfThree(a, b, c) {
//     if ((a >= b) && (a >= c)) { 
//         return a;
//     } else if ((b >= a) && (b >= c)) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(maxOfThree(343,35124,42));

//longest word

// function printLongestWord(arr) {
//     let aWord = ''
//     for (let i = 0; i < arr.length; i++) {

//         if (aWord.length < arr[i].length) {
//             aWord = arr[i]
//         }
//     }
//     return aWord
//  }
//  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//Objects 

//make a user object 

let userOne = {
    name: "hector",
    email: "hsdkfhdkh@gmail.com",
    age: 6,
    purchased: [],



}
userOne.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'Denver colorado',
    purchased: [],

}
userOne.age= ++ userOne.age;
userOne.email = "yololo@gmail.com";
userOne.location = ('denver colorado');
userOne.purchased.push('carbs', 'peace of mind', ' Merino jodhpurs');
userOne.friend.age = 55;
userOne.friend.purchased.push('one ring', 'A latte');

for(let i = 0; i < userOne.purchased.length; i++) {
console.log(userOne.purchased[i])
}
for(let i = 0; i < userOne.friend.purchased.length; i++) {
    console.log(userOne.friend.purchased[i])
    }



console.log(userOne.friend.name);
console.log(userOne.friend.location);
console.log(userOne.friend.purchased[1]);
console.log(userOne);


//Functionnnnnnn

function updateUser() {
    userOne.age = ++userOne.age;
   userOne.name.toUpperCase();
   console.log(userOne.name.toUpperCase());
}
updateUser()

//

function oldAndLoud(person) {
    person.age = ++ person.age ;
    console.log(person.name.toUpperCase())
}
oldAndLoud(userOne.friend)