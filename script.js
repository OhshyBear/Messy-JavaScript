// function sayHello() {
// 	console.log("Hello");
// }
// sayHello();

// var sayBye = function(){
// 	colsole.log("Bye");
// }

// function sing(song) {
// 	console.log(song);
// 	console.log("TEEEEEE");
// }

// sing("Do Re MI");

// function sing2(){
// 	console.log("laaaa deeee daaaa");
// 	console.log("laaaaaaaaaa");
// }

// sing2();
// alert("Hello")

// function multiply(a,b){
// 	if (a > 10 || b> 10) {
// 		return "that's too hard";
// 	} else {
// 		return a * b;
// 	}

// }
// multiply(5, 10);  

// function multiply(a,b){             //parameters are a,b 
// 		return a * b;
// 	}

// alert(multiply(3,4));     //Functions have arguments similar yet different to parameters

// function checkDriverAge(age){
// 	if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }
// checkDriverAge()

//Data structures: Arrays

// var list = ["tiger", "cat", "bear", "bird"];
// list[1];
// console.log(list[0]);

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells: ["abbrkadabra", "shazam", "boo"],
// 	shout: function(){                        //shout is a method of user
// 		console.log("AHHHH");                 //console.log is a method
// 	}
// };

// var list = [                             //lists and arrays can be empty list = [] same for objects
// {
// 	username: "andy",
// 	password: "secret"
// },
// {
// 	username: "jess",
// 	password: "123"
// }
// ];

// var nullObj = null; 

// //Function delclaration////
// function newFunction(){

// }
// //Function expression////
// var newFunction = function nameofFunctorAnonymous() {

// };       //This one ends in a semicolon the other does not 
// //Expression :something that denotes a value////
// 1+2;
// var a=2;
// return true;
// // Calling a Function////
// alert();
// newFunction(param1, param2);
// //Assign a Variable////
// var a = true;
// //Function vs Method ////
// function thisIsAFunction(){
// 		etc
// }
// var obj = {
// 	thisIsAMethod: function(){
// 		etc
// 	}
// }
// // How you can access Function vs Method////
// thisIsAFunction()
// obj.thisIsAMethod()


// //LOOPS ////
// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study JavaScript",
// 	"eat healthy",
// 	];
// var todosLength = todos.length
// for (var i=0; i < todos.length; i++){
// 	todos[i] = todos[i] + "!";
// 	console.log(i);
// }
// // todos.pop();
// todos.forEach(function(todo, i) {           //parameter arg1, index arg2
// 	console.log(todo, i);                   //foreach runs a,, function which logs the todo list 
// })

// var counterOne = 10;
// while (counterOne > 10){             //checks the condition first
// 	console.log("while",counterOne);
// 	counterOne--;
// }

// var counterTwo = 10
// do{
// 	console.log("do while",counterTwo);             // performs the action first
// 	counterTwo--
// } while (counterTwo > 10)


// Facebook Exercise
// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// var user = {
// 	username: "Trevor",
// 	password: "10Huddles!"
// };

// var database= [ 
// {
// 	username: "Trevor",
// 	password: "10Huddles!"
// },
// {
// 	username: "Lilly",
// 	password: "UnicornRainbow"
// },
// {
// 	username: "Dain",
// 	password: "FackYou"
// }
// ]

// var newsfeed = [
// {
// 	username: "Dain",
// 	timeline: "My head hurts from all this learning!"
// },
// {
// 	username: "Lilly",
// 	timeline: "JavaScript is so cool!"
// },
// {
// 	username: "Alexandra aka: The Devil",
// 	timeline: "JavaScript is so difficult..."
// }
// ];

// var userNamePrompt = prompt("What's your username?");
// var userPasswordPrompt= prompt("What's your password?");

// function isUserValid(username,password) {
// 	for (var i=0; i < database.length; i++) {
// 		if(database[i].username === username && database[i].password === password) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }

// function signIn(username,password) {
// 	if (isUserValid(username, password)){
// 		console.log(newsfeed);
// 	} else {
// 		alert("Wrong Username or Password")
// 	}
// }
// signIn(userNamePrompt, userPasswordPrompt);

// let + const  NEW WAYS TO DECLARE VARIABLES VAR ALMOST GONE
// let creates a new scope is mutable
// const is an immutable variable

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90){
// 	let wizardLevel = true                       // let creates a new scope 
// 	console.log('inside', wizardLevel)
// }
// console.log('outside', wizardLevel)

// const obj = {                //the object in this case is immutable
// 	player:'bobby',		     //however the properties are mutable
// 	experience = 100,		 // obj.wizardLevel = true would reassign
// 	wizardLevel = false,
// }

// // Destructuring
// onst obj = {                
// 	player:'bobby',		     
// 	experience = 100,		
// 	wizardLevel = false,
// }

// const { player, experience } = obj;
// let { wizardLevel } = obj


// //Object properties
// const name = 'john snow';

// const obj = {
// 	[name]: 'hello',
// 	['ray' + 'smith']: 'hihi'
// }

// const a = 'simon';
// const b = true;
// const c = {};

// const obj = {
// 	a,
// 	b,
// 	c,
// }

//template strings
// const name = "sally";    //${} enables you to use the consts inbetween the back ticks ``
// const age = 34;
// const pet = "horse";

// const greeting = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`

// function greet(name='', age=30, pet='cat'){     //'' is a default arguement
// 	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`

// }

// greet("trevor", 50, "elephant") // here we are passing parameters but it has default arguments incase I dont give it perameters

// //Symbols
// let sym1= Symbol();
// let sym2= Symbol('foo');
// let sym3= Symbol('foo');      //sym2===sym3 will = false

// //arrow functions              new way to write functions very nice
// const add = (a,b) => a + b

// const add = (a,b) => {
// 	a + b
// }

// change everything below to the newer Javascript!

// // let + const
// const a = 'test';
// let b = true;
// let c = 789;
// a = 'test2';


// // Destructuring
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// const{firstName, lastName, age, eyeColor} = person;


// // Object properties
// const a = 'test';
// const b = true;
// const c = 789;

// const okObj = {a, b, c};


// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// const firstName = "Trevor"
// const city = "Lubbock"
// const message = `hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// // default arguments
// // default age to 10;
// const isValidAge = (age = 10) => age
// function isValidAge(age) {
//     return age
// }

// // Symbol
// // Create a symbol: "This is my first Symbol"
// const sym = Symbol("This is my first Symbol!")

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// const whereAmI = (username, location) =>{
// 	 if (username && location) {
// 		return "I am not lost";
// 	} else{
// 		return "I am totally lost"
// 	}
// }

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
// 	apples: 5,
// 	oranges: 10,
// 	grapes: 1000
// }
// // for (let i = 0; i < basket.length; i++){
// // 	console.log(basket[i]);
// // }


// // basket.forEach(item => {
// // 	console.log(item)
// // })


// for of ////*****//// iterating = goes 1 by 1 through items
// for (item of basket){
// 	console.log(item)
// }

// // for in ////*****//// loops over object properties 
// // this is an object and we are enumerating so we are enumerating the OBJECT
// for (item in detailedBasket) {
// 	console.log(item)
// }
