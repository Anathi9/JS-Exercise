// let numeral= [12,18,11,5,8,2]
// let middle= (number.length/2)
// if (middle % 2 ==0);
// numbers[middle]
// elsenumbers[middle-1]
// numbers[middle+1]


// let a = 3
// console.log(a++);
// console.log(a);(


// continue
// for(let i = 0; i<=10; i++){
//     if(i ==5)

// }
// //while loop
// let cnt = 0
// while(cnt <= 10){
//     console.log(cnt);


//     cnt++;
// }

// let cnt = 0
// do{
//     console.log(cnt);
//     cnt++ 
// }while(cnt <=10)
// foreach 
// let numbers = [12,18,11, 5,2,8];
// for(let i =0; i<numbers.length; i++){
//     console.log
//     (`${i} => ${numbers[i]}`);
// }

// let numbers = [12,18,11,5,2,8];
// numbers.forEach((number)=>{
//     console.log(number)
// })

// let numbers = [12,18,11,5,2,8];
// numbers.forEach((numbers,i)=>{
// function display(numbers){
//     console.log(numbers);
// })


// let numbers =[12,18,11,5,2,8]

// numbers.forEach(number => {
// if (number%2 == 0)
// console.log(number);
// });

// // for in
// let number = [12,18,11,5,2,8]
// for(let i in numbers) {
//     console.log(i);
// }

// //for in
// for(let i in numbers) {
//     console.log, numbers[1];
// }

// // for of
// let numbers  = [12,18,11,5,2,8];
// for(let number of numbers) {
//     console.log(numbers);
// }

// let numbers = [12,18,12,11,5,18,2,8,2];
// let unique = []
//     numbers.forEach((number)=>{
//         if(!unique.includes(number)) {
//             unique.push(number)
//         }
//     })
// console.log(unique);

// let numbers = [12,18,12,11,5,18,2,8,2];
// console.log(Array.from(new Set(numbers) ));
//function named
// function constName(firstName="Anathi") {
//     console.log(`first name is ${firstName}`);
// }
// constName()
// constName("pinda")

//anonymous function
// let test =function(numb1,numb2){
//     return numb1 + numb2
// }
// console.log(test(2,8))

// other way of anonymous function
// (function(numb1,numb2) {
//     console.log(numb1 + numb2)
// })(3,4)

// let greeting =" Hello World ";
// let newA = Array.from(greeting)
// console.log(newA);
// console.log(greeting.trim().split(""));

// display()
// function display() {
//     console.log("Hosting a function");
// }
// debugger
// console.log("accessing a value");
// x = 3
// console.log(x);
// console.log("create a variable");
// var x;
// console.log(x);

// let addition = function (numb1, numb2) {
//     return numb1 + numb2
// }
// console.log(addition(3,2)); 

//Recursive function
// let cnt = 1
// function repeat(limit) {
//     if(cnt <= limit) {
//         console.log(cnt);
//         cnt++
//         repeat (limit)
//     }
// }
// repeat(10)

// function display() {
//     let numb1 = 9
//     console.log(`Inside of a function: ${numb1}`);
// }
// display()
// console.log(`Outside a functuon ${numb1}`);

//Display an array of characters
// let greeting = "Hello world"
// console.log(greeting.split (""))

// // Remove space before and after a string. and convet it to an array of characters
// console.log(greeting.trim().split(''));

// Literal object
// console.log("Object literal");
// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// console.log("Object.create()");
// let smartPhone = Object.create(
//     {
//         make: "Samsung",
//         model: "A 51"
//     }
// )
// console.log(smartPhone);
// console.log("new keyword | Object constructor");
// let computer = new Object({
//     brand: "Dell",
//     amount: 18000
// })
// console.log(computer);


//factory function
//camelCase
// function person() {
//     let data = {
//         firstName: 'Peter',
//         Age: 20
//     }
//     return data
// }
//  function person(firstName, lastName, age, hrs, rate) {
//     return{
//         name: firstName,
//         surname: lastName,
//         userAge: age,
//         hrsworked: hrs,
//         userRate: rate,

//     }
//  }
//  let person1 = person('Peter', 'Mukanya', 1, 60, 500)
//  let person2 = person('Anathi','Josefu',1,20,320)
//  console.log(person1);
//  console.log(person2);
//or 
// function person(firstName, lastName, age, hrs, rate) {
//     return{
//         firstName, lastName, age, hrs, rate
//     }
// }
// let person1 = person('Peter', 'Mukanya', 1, 60, 500)
//  let person2 = person('Anathi','Josefu',1,20,320)
//  console.log(person1);
//  console.log(person2);

//constructor allows to create an object and return this
// function Laptop(make, amount) {
//     this.make = make
//     this .amount = amount
//     return this
// }
// let Laptop1 = new Laptop('HP', 18000)
// let Laptop2 = new Laptop('Dell', 2000)
// console.log(Laptop1);
// console.log(Laptop2);
//  console.log(Laptop2 instanceof Object);

// function Laptop(make, amount,) {
//         this.make = make
//         this .amount = amount
     
//     }
    
//     function Smartphone(amount){
//         this.amount
//         return this
//     }

//     let Laptop1 = new Laptop('HP', 18000)
//     let Laptop2 = new Laptop('Dell', 2000)
//     let samsungA51 = new Smartphone(20000)
//     console.log(Laptop1);
//     console.log(Laptop2);
//      console.log(Laptop);
//      console.log(Laptop2 instanceof Smartphone);
//Dynamic nature of an object
// let person = {
//     firstName: 'John',
//     lastName: 'Bruce'
// }
// console.log(person);
// person.firstName = 'Peter'
// console.log(person);

// Add a new  property to the current object
// person.age = 20
// console.log(person);
//constructor property
// function NewRecord(name) {
//     this.name = name
// }
// let person1 = new NewRecord('John');
// let person2 = {name : 'Henk'};
// console.log(person2);

// //constructor property
// console.log(person.constructor === NewRecord);//True
// //It is the same as using instance of
// console.log(person1 instanceof NewRecord); //True
// //console.log(person2 .constructor == NewRecord);
// Function are object
// let person = {
// firstName: 'John',
// lastName: 'Bruce',
// fullName: function(){
//     return `${this.firstName} ${this.lastName}`
// }
// }
// console.log(person)
// console.log(person.fullName());

// let person = {
//     fistName: 'John',
//     lastName: 'John',
//     hrs: 120,
//     rates: 500,
//     salary: function() {
//         return this.hrs * this.rate
//     }
// }
// console.log(person);
// console.log(person.salary());

//Looping through an object
// let laptop = {
//     make: 'Dell',
//     cpu: '32Ghz',
//     ram: '16GB'
//}
// console.log(laptop);
// // for(const keyName in laptop) {
// // console.log(laptop[keyName])
// // }

// // console.log(Object.keys(laptop));
// // console.log(Object.values(laptop));
// Object.keys(laptop).forEach((key)=>{
//     console.log(`${key} -> ${laptop[key]}`);
// })


// Object.values(laptop).forEach((value)=>{
//     console.log(`${value}`);
// })
// for(let key in laptop) {
//     console.log(key, '', laptop[key]);
// }
//cloning an Object using (spread op, Object.assign(),JSON.parse(),)
// let car1 = {
//     make: 'Toyota',
//     year: 2023
// }
// let car2 = car1
// console.log(""==car1=="");
// console.log(car1); 
// console.log("==car2==");
// console.log(car2);
// console.log("change the value of car2");
// car2.year = 2024
// console.log(car1, car2);
//spread operator,Object.assign(), JSON.parse()
//let car2 = {...car1}
// console.log(car1, car2);
// console.logg("Change the value of car2");
// car2.year = 2024
// console.log(car1, car2); 
// //Object.assign()
// let car3 = Object.assign({}, car1)
// console.log("===car3===");
// console.log(car3);
// car3.year = 2025
// console.log(car3);

// console.assert("JSON.parse()");
// let car4 = JSON.parse(JSON.stringify(car1))
// console.log(car4);
// car4.year = 2025
// console.log(car4);

//string method
// let firstName = "Anathi"
// console.log(firstName.split("").reverse().join(""));


// //console.log(rIdx);
// let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max}(...numbers)}`);
// console.log(`Lowest number: ${Math.min}(...numbers)}`);


// let rIdx = math.floor(math.random() * (numbers.length -1))
// console.log(numbers);
// console.log(rIdx);
// console.log(numbers[rIdx]);
// map and reduce
// let  modify = numbers.map( (x)=>{
// return x*2
// })
// console.log(modify);
// let sum = numbers.reduce((a, b)=> a + b)
// console.log(sum);

// constructor (Number, Array, Object)
// let x = Number(2)
// console.log(x);
// let myArr = new Array(3, 5, 11)
// console.log(myArr);

// let firstName = String("Anathi")
// // CHARAT() 
// console.log(firstName.charAt(4));
// console.log(firstName.replace())
// console.log(firstName)








// create an array that contains 6 elements but the first two elements must be a number.
 //NB make sure that the element at position 4 is in lowercase.

// let data = [2, 5, 'Nikita', 'Shawn', 'candince', 'Matthew']

// Create two objects and add the objects into an array, log the objects as well.
// let person1 = {
//     firstName: 'Thimna'
// }
// let person2 = {
//     firstName: 'Veronique'    
// }
// create an empty array
// let personDetails = []
// personDetails.push(person1)
// personDetails.push(person2)
// console.log(personDetails);
// console.log(person1);
// console.log(person2);

// let firstName = 'Zubair'
// if(firstName) { 
//     console.log("present");
// }else {
//     console.log("Absent");
// } 

// let firstName = 'Zubair'
// let state = 'late'
// if(state == 'present'){
// console.log("present");
// }else if(state == 'late'){ 
//     console.log("late");
// }else {
//     console.log("absent");
// }

// switch (true) { 
//     case state == 'present':
//         console.log("present");
//     break;
//     case state !="":
//         console.log("late");
//         case state !="":
//             console.log("late -> Final warning");
//             break;
//             default:
//                 console.log("absent");
//                 break;
         //}

         // maths methods
        //  let numbers = [9, 4, 2,5, 10]
        //  function highestNumber(args){
        //     for(let number of args){
        //         console.log(number);

        //     }
        //  }
        //  highestNumber(numbers)
let numbers = [9, 4,20, 2,5,10]
console.log(math.max(...numbers));
console.log(math.min(...numbers));
let size = math.floor(numbers.length / 2)
console.log(number[size]);
