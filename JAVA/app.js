// document.querySelectorAll('.btn').forEach((item) =>{
//     item.addEventListener('click',()=>{
//         alert('Helloooo World')
//     })
// })

// Let age=100
// Declarator: Let
// = assign operator
// Variables : are  Storage/placeholder (age)
// Values:  are element in the variables (100)

// we have  types of delcarator :1: let 2. var 3. const
// LET
let age = 100;
let name = "Simi";

console.log(age);
console.log(name);

// VAR
var country = "Nigeria";
var tribe = "Yoruba";
console.log(country);
console.log(tribe);
console.log("America");

// CONST
const PIE = 3.142;
console.log(PIE);

// var--- declare, re-declare and re-assign
var gender = "male";
var gender = "female";
gender = "transgender";
console.log(gender);
console.log(gender);

// let---declare and re-assign
let state = "Lagos";
state = "Enugu";
console.log(state);

// CONST---- declare only
const Fullname = "Yomi";
console.log(Fullname);

// Contraint in variable naming
// 1: A variables can not start with a number but it can contain a numbers, letters,underscore, dollar sign
// 2: Dont give spaces use carmel case(this is the casing for JS) or you put under_score
// 3: Reserved names cant be used as a variable name,since its reserved.
// When naming variables use a meaningful name (eg let score =2000 is better used than let ss=200)

// DATA TYPES:We have about 8 data types. I t can be grouped into 2: Primitive and Non Primitive . From 1 to 5 are known as primitive data type. they can hold onlt one data type. Object is non primitive

// 1: string: use for storing leters. represented by a single(' ') or double quotes ("")
// 2: numbers: use for numbers not represented by anything both whole nos and decimals
// 3: bollen: true or false statement
// 4: Null: empty
//5:  un-define: something not define
//6:  object(arrays, dates)
// 7: symbols
// 8: bigInt; use for big digit tha numbers above cant handle

// strings
let continent = "Africa";
console.log(continent);

// from 1 to 5 are known as primitive data type. they can hold 1 datat type. Object is non primitive

let firstname = "Simi";
let lastname = "Bola";

console.log(firstname);
console.log(lastname);
let fullname = firstname + " " + lastname;
console.log(fullname);

let fullname2 = firstname + " " + lastname;
console.log(fullname2);

// string properties and metheod
let email = "askdarasimi@gmail.com";
console.log(email);
console.log(email.length);
let emailLength = email.length + " " + "letters";
console.log(emailLength);

// Getting Position ---counting starts from zero not one
let city = "SurUlere";
console.log(city);
console.log(city[3]);
console.log(city[4]);

// Methods: are function that are related to a particular data type e.g strings . It will rauire the dot, name of the method and parenthesis.

// Functions are line of quote that perform a giving task

let trainee = "Boluwatife";
console.log(trainee);
let traineeUpperCase = trainee.toUpperCase();
console.log(traineeUpperCase);
let tup = trainee.toUpperCase();
console.log(tup);

let newTrainee = "JOSEPH";
console.log(newTrainee);

let newTraineeLowerCase = newTrainee.toLowerCase();
console.log(newTraineeLowerCase);

// indexOf() it will pick the first letter in the sentence . techstudio has 2 ts it pikced the first one
let newEmail = "techstudio@gmail.com";
console.log(newEmail);

let newEmailIndex = newEmail.indexOf("t");
console.log(newEmailIndex);

let nei = newEmail.indexOf("d");
console.log(nei);

//  nv let lia = newEmail.lastIndexOfApplicant('t')
// console.log(lia);

// lastIndex():
let applicant = "techstudio";
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf("t");
console.log(lastIndexOfApplicant);

// Slice(): Letter counting strts from 0,1,2,3,4,.....
let religion = "christianity";
console.log(religion);
let sliceReligion = religion.slice(0, 6);
console.log(sliceReligion);

// replace()
let profession = "developer";
console.log(profession);
let replaceProfession = profession.replace("d", "z");
console.log(replaceProfession);

// October 12th 2022

// number
let year = 2022;
console.log(year);
let score = 100;
console.log(score);
let score2 = 200;
console.log(score2);

// Math Operators
// +, -, /, *, ** ( exponential /indices) ,% ( modulus/ reminder),

let finalScore = score + score2;
console.log(finalScore);

let minus = score2 - score;
console.log(minus);

let multiply = score * score2;
console.log(multiply);

let div = score2 / score;
console.log(div);

// =====================
let num = 10;
console.log(num);
let num2 = 3;
console.log(num2);
let indices = num ** num2;
console.log(indices);
let modulus = num % num2;
console.log(modulus);

// decremental and incremental values
let newYear = year + 1;
console.log(newYear);
// OR
year++;
year--;
console.log(year);
// if you want to add or remove more than one:
let anotherYear = 2025;
console.log(anotherYear);
anotherYear *= 2;
console.log(anotherYear);
anotherYear -= 2;
console.log(anotherYear);
anotherYear += 10;
console.log(anotherYear);

// ===========class work===========
// Declare variables for continent, language, ghanaPopulation, finlandPopulation, country and nigeriaPopulation
// Task

// 1)  If nigeriaPopulation is split in half.... How many people would love in each half?

// 2)  Increase nigeriaPopulation by 1 and log result to the console

// 3)   Log to the console using < or > to indicate whether   nigeriaPopulation is more than finlandPopulation

// 4)   Do same for ghanaPopulation

// 5)   Based on the variables created, create a new variable 'description' which would contain a string with this format --nigeria is in Africa and it's nigeriaPopulation people speak pidgin English

// With theses respective values

// Africa, pidgin English, 500,800 Nigeria, 1000.

let newContinent = "Africa";
console.log(newContinent);

let language = "Pidgin English";
console.log(language);
let ghanaPopulation = 500;
let finlandPopulation = 800;
let nigeriaPopulation = 1000;
console.log(nigeriaPopulation);
let Country = "Nigeria";
// Q1
let half = nigeriaPopulation / 2;
console.log(half);

// Q2
nigeriaPopulation++;
console.log(nigeriaPopulation);
// Q3
console.log(nigeriaPopulation > finlandPopulation);
// Q4
console.log(ghanaPopulation > finlandPopulation);
// Q5
let description =
  Country +
  " " +
  "is in" +
  " " +
  newContinent +
  " " +
  "and it's" +
  " " +
  nigeriaPopulation +
  " " +
  "people speak" +
  " " +
  language;

console.log(description);

//  Concatinanting variables with strings
let blog = 50;

let statement = "the blog has" + "  " + blog + "  " + "likes";
console.log(statement);

let traineeScore = 90;
let traineeName = "Simi";
let school = "Aguda Grammer School";
let response =
  "Praise did you know " +
  traineeName +
  " attends " +
  school +
  " and had " +
  traineeScore +
  " in her test";
console.log(response);

// template literals or stringd (uses backtics and interpolation)
let newResponse = `I am Jasper`;
console.log(newResponse);

let newResponse1 = `Praise did you know ${traineeName} attaends ${school} and had ${traineeScore} in her test`;
console.log(newResponse1);

// Null is something we set ourselves while un-defined is set by the system

// let class = 'python fullstack'
//  class gave error code becuase it is a reserved element

let classAvailalbe = "python fullstack";
let bootcamp = " Techstudio Academy";
let stateLocatiob = "Lagos";
let regFeeInNaira = 300;
let prospectiveTrainee = "Joseph";

let adminSay =
  "Hello " +
  prospectiveTrainee +
  bootcamp +
  " offers " +
  classAvailalbe +
  " in " +
  stateLocatiob +
  " and the " +
  " registration fee is " +
  regFeeInNaira;

console.log(adminSay);

let adminSay2 = `Hello ${prospectiveTrainee} ${bootcamp} offers ${classAvailalbe} in ${stateLocatiob} and the registration fee is ${regFeeInNaira}`;

console.log(adminSay2);

// 6. Object (arrays, dates)
// Array: its use in storing clection of different or the same data type. They are represented by square bracket. Use for storing collections of strings, numbers, booleans and other data types and are represented by square bracket[]

// let favFood1 = `Beans`;
// let favFood2 = `Eba`;
// let favFood = `Rice`;

let segFavFoods = ["Beans", "Eba", "Rice", "Yam", "Agbado"];
console.log(segFavFoods);

// Array properties
let lengthOfsegFavFoods = segFavFoods.length;
console.log(lengthOfsegFavFoods);

segFavFoods[0] = "starch";
let singleFood = segFavFoods[0];
console.log(segFavFoods);
// console.log(singleFood);

// If segfavfood is replaced wiht starch

console.log(segFavFoods[0]);

// Array Methods
let includes = segFavFoods.includes("corn");
console.log(includes);
// join() to put space in between and seperate 2 or more elements
let join = segFavFoods.join("-");
console.log(join);
// concat()
let concat = segFavFoods.concat(["Egusi", "Ogbono"]);
console.log(concat);
// push()
let push = segFavFoods.push("efo-riro");
console.log(push);
console.log(segFavFoods);

// pop
let pop = segFavFoods.pop();
console.log(pop);
console.log(segFavFoods);

let colors = [];
colors.push("pink", "green");
console.log(colors);

// =======Assignment========
// Create an array of trainees of everyone in this class,starting with Temilolu

// Update the first name on the array to pappi and log to the console

// Using an array method..
// Add Amos and Mike to the end of array

// Using an array method remove Mike from the array

// Using an array method..
// Add Zack and Bobby at the beginning of d array

// Using an array method remove Zack from the array

// Using an array method concat a new array of trainees... Queen, segun, Pius, emeka
// [3:42 pm, 12/10/2022] +234 706 044 0986: Names of trainees

// Tokunbo
// Segun
// Saro
// Ahmed
// Praise
// Joseph
// Adam
// Joseph B
// Jasper
// Tomi
// Simi
// Yomi

// =========Thursday- 13th October - 2022===============
// ====Spread operator=====
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [7, 8, 9];
let con = numbers.concat(newNumbers);
console.log(con);
// With Spread operator
let newCon = [...numbers, ...newNumbers];
console.log(newCon);

// ====Destructuring======
console.log(...numbers);
let numbers2 = numbers[0];
console.log(numbers2);
let numbers3 = numbers[1];
console.log(numbers3);
// desteucturing
//  const [1,2,3,4,5,6] = numbers
let names = ["pius", "sam", "sandra", "peter", "nath", "buhari", "jide"];
let [zero, first, second, ...others] = names;
console.log(zero);
console.log(first);
console.log(second);
console.log(...others);
let Names = ["pius", "sam", "sandra", "peter", "nath", "buhari", "jide"];

let [Zero, , Second, ...Others] = Names;
console.log(Zero);
// console.log(First);
console.log(Second);
console.log(...Others);

// type of
let scoresss = 50;
console.log(scoresss);
console.log(typeof scoresss);
let pikinName = "Aki";
console.log(pikinName);
const PC = ["dell", "macbook", "hp"];
console.log(PC);
console.log(typeof PC);

let cart = null;
console.log(cart);
console.log(typeof cart);
let destination;
console.log(destination);
console.log(typeof destination);

// Type Conversion and Coersion: onversion is when we manually convert  from one data type to another but coersion is when javascript does the conversion for us

// Conversion
const inputYear = 1985;
console.log(inputYear);
const inputYear1 = Number("1985");
console.log(inputYear1);

let newNumber = "1986";
let addedNumber = newNumber + 18;
console.log(addedNumber);

let newNumber1 = Number("1986");
let addedNumber1 = newNumber1 + 18;
console.log(addedNumber1);

// lets try and convert something thats not a number to a number
let personName = Number("Eggy");
console.log(personName);
console.log(typeof NaN);
console.log(String(23), 23);

// Coercion : the system cnvertes the 22 to sting on its own
console.log(" I am " + " 22 " + "years old");
console.log(" I am  " + String(22) + " years old");
console.log(22);

console.log("22" - 3);
console.log("22" * 3);
console.log("22" > "2");
// ===========Light Class Work======
let z = Number("1") + 1;
let w = z - 1;
console.log(w);

let Z = "1" + 1;
let W = Z - 1;
console.log(W);
//  Comparison Operators
// <, >, ==, ===, >=, <=
let YEAR = 2023;
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR <= 2001);
console.log(YEAR != 2001);

// Loose Comparison operator: it only checks the value and not the data type

let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
console.log(SCORE2);
console.log(SCORE3);

// Strict Comparison operator: it checks both the value and not the data type

let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;
console.log(SCORE4);
console.log(SCORE5);

// CONTROL Flow Loops and Conditional Statement : Looping is cycling over / re-iterating information.
console.log("lifting weight repititon 1 🏋️‍♂️");
console.log("lifting weight repititon 2 🏋️‍♂️");
console.log("lifting weight repititon 4 🏋️‍♂️");
console.log("lifting weight repititon 5 🏋️‍♂️");
console.log("lifting weight repititon 6 🏋️‍♂️");
console.log("lifting weight repititon 7 🏋️‍♂️");
console.log("lifting weight repititon 8 🏋️‍♂️");
console.log("lifting weight repititon 9 🏋️‍♂️");
console.log("lifting weight repititon 10 🏋️‍♂️");

//  for loop used the for-keyword-initializer-condition-final expression ans -block code
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log("Eggy lifts weight " + i + "🏋️‍♂️");
}

let guys = ["mama", "papa", "pikin", "cousin"];
for (let i = 0; i < guys.length; i++) {
  console.log(i);
  console.log(guys[i]);
  console.log(guys[i].toUpperCase());
}

// ====while loop=====
// let babes = ['fatima', 'ada', 'joke', 'cassandra']
// let i = 0
// while (i<babes.length){
//     console.log(babes[i])
//     i ++;
// }

// Write it in While loop
let babes = ["fatima", "ada", "joke", "cassandra"];
let i = 0;
while (i < babes.length) {
  console.log(babes[i].toUpperCase());
  i++;
}

// ============== for in
for (p in babes) {
  console.log(babes[p].toUpperCase());
}

// ============== for of
for (b of babes) {
  console.log(b.toUpperCase());
}

// Assignment

// let colors = ['blue', 'pink', 'black', 'red']
//  use a for loop on the array
// [8:24 am, 14/10/2022] +234 706 044 0986: While loop
// [8:24 am, 14/10/2022] +234 706 044 0986: For of and for in loops
// [8:25 am, 14/10/2022] +234 706 044 0986: Snap and send both ur workings and the output on your console

// MOnday 17th Octoebr 2022===

// Conditional Statements : if, else, else if

// if statement: is used where we have single condiion
let AGE = 50;
if (AGE === 50) {
  console.log("Oga u qualify");
}

let AGE2 = 50;
if (AGE2 === 5) {
  console.log("Oga u qualify");
} else {
  console.log("Error");
}

// else if is used where we have multiple conditions

let password = "pass";
console.log(password.length);
if (password.length >= 12) {
  console.log("that's a very strong password");
} else if (password.length >= 8) {
  console.log("Password is good");
} else if (password.length >= 4) {
  console.log("Password is weak");
} else {
  console.log("Please password should be at least 4 characters long");
}

// Logical Operators
//  || (doubl pipe) means logical or
// || && (ampersand) means logical and

// FOR LOGICAL AND
// True && True = True
// True && False = False
// False && True = True
// False && False = False
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// FOR LOGICAL OR
// True ||True = True
// False || True = True
// True || False = True
// False || False = False

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true);
console.log(!false);

let PASSWORD = "pass";
if (PASSWORD.length >= 5 && PASSWORD.includes("@")) {
  console.log("Very strong password");
} else if (PASSWORD.length >= 7 || PASSWORD.includes("@")) {
  console.log("Password is goood");
} else {
  console.log("Password isn't good enough");
}
//  part of class examke remove becuae of prompt
// let PASSWORD1 = 'pass@'
// if (PASSWORD1.length >= 7 && PASSWORD1.includes('@')) {
//     console.log('Super strong password');
// }
//  else if (PASSWORD1.length >= 5 || PASSWORD1.includes('-') && PASSWORD1.length >= 8 && PASSWORD1.includes('*')) { console.log('password is good');
// }

// let newPassword = prompt('type a password')
// if (newPassword.length >= 12 && newPassword.includes('@')) {
//     alert('very very strong')
// }
// else {
//     if (newPassword.length >= 8 || newPassword.includes('@')) { alert('password is good') }
//     else {
//         alert('password should be at least 8 characters')
//     }
// }

// if (newPassword.length >= 12 && newPassword.includes('*')) {
//     alert('super strong')
// } else if (newPassword.length >= 12 && newPassword.includes('@')) {
//     alert('password is good')
// } else if (newPassword.length >= 12 && newPassword.includes('@')) {
//     alert('password is fair')
// } else {
//     alert('Please password should have at least 6 characters and contain @ or *')
// }

// Break and Continue
let Result = [20, 40, 0, 50, 100, 15];

for (let i = 0; i < Result.length; i++) {
  // ?what if we dont want to log zer to our console?
  if (Result[i] === 0) {
    continue;
  } else if (Result[i] === 20 || Result[i] === 20) {
    continue;
  }
  if (Result[i] === 100) {
    break;
  }

  console.log(Result[i]);
}

// Switch Statement : you need break to make switch works . yo dont need ot put brea after default
let Grade = "z";

if (Grade === "A") {
  console.log("You got A");
} else if ("Grade === B") {
  console.log("You Got B");
} else if ("Grade === C") {
  console.log("You got C");
} else if ("Grade === D") {
  console.log("You got D");
} else {
  console.log("You Failed");
}

//

let points = "A";

switch (points) {
  case "A":
    console.log("You got A");
  case "B":
    console.log("You got B");
  case "C":
    console.log("You got C");
  case "D":
    console.log("You got D");
  default:
    console.log("You failed");
}

let Points = "B";

switch (Points) {
  case "A":
    console.log("You got A");
    break;
  case "B":
    console.log("You got B");
    break;
  case "C":
    console.log("You got C");
    break;
  case "D":
    console.log("You got D");
    break;
  default:
    console.log("You failed");
}
// Task
// Given an integer, n, perform the following conditional actions:

// If n is odd, print Weird

// If n is even  print Not Weird

// using data below...calculate the BMI for both Segun and Mariam...and also with a conditional statement....if Segun's BMI is more dan Mariam...print to d console Segun's Bmi is greater than Mariam,else

// // bmi = mass / height ** 2
// Given dt Segun/Mariam height   10/9

// Segun/Mariam weight 60/70
// Hint
// Use if statement😉

// 17th oct 2022

// // Conditional statements if,else,else if

// let AGE = 50;

// // if(AGE){
// //   console.log('Oga u qualify');
// // }else{
// //   console.log('Error');
// // }
// if(AGE === 50){
//   console.log('Oga u qualify');
// }else{
//   console.log('Error');
// }

// let password = 'pas'
// console.log(password.length);
// if(password.length >=12){
//   console.log('that\'s a very strong password');
// }else if(password.length >= 8){
//   console.log('password is good');
// }else if(password.length >= 4){
//   console.log('password is weak');
// }else{
//   console.log('Please password should be atleast 4 chars long');
// }

// Logical operators
// ||(double pipe) means logical or
// &&(ampersand) means logical and

//          FOR LOGICAL AND
// True && True = True
// True && False = False
// False && True = False
// False && False = False

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
//          FOR LOGICAL OR
// True || True = True
// True || False = True
// False || True = True
// False || False = False

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

// let PASSWORD = 'pass@';
// if(PASSWORD.length >= 7 && PASSWORD.includes('@')){
//   console.log('super strong password');

// }else if(PASSWORD.length >= 5 || PASSWORD.includes('@') && PASSWORD.length >= 6 && PASSWORD.length >= 7 || PASSWORD.includes('_') && PASSWORD.length >= 8 && PASSWORD.includes('*') ){
//   console.log('password is good');
// }else{
//   console.log('password isn\'t good enuff');
// }

// let newPassword = prompt(' type a password')
// if(newPassword.length >= 12 && newPassword.includes('@')){
//   alert('very very strong')
// }else{
//   if(newPassword.length >= 8 || newPassword.includes('@') ){
//     alert('password is good')
//   }else{
//     alert('password shud b atleast 8 chrs')
//   }
// }
// if(newPassword.length >= 12 && newPassword.includes('*')){
//   alert('super strong')
// }else if(newPassword.length >= 12 && newPassword.includes('@')){
//   alert('password is good')
// }else if(newPassword.length >= 12 && newPassword.includes('@')){
//   alert('password is fair')
// }else{
//   alert('Please password should have atleast 6 characters and contain @ or *')
// }

// // Break And Continue
// let Result = [20,40,0,50,100,15]

// for(let i = 0; i < Result.length; i++){
//   // ?what if we dnt wnt 2 log 2 awa console 0?
//   if(Result[i] === 20 || Result[i] === 0){
//     continue
//   }
//   if(Result[i] === 100){
//     break
//   }
//   console.log(Result[i]);
// }

// Switch statement
// let Grade = 'A'

// if(Grade === 'A'){
//   console.log('You got A');
// }else if(Grade === 'B'){
//   console.log('You got B');
// }else if(Grade === 'C'){
//   console.log('You got C');
// }else if(Grade === 'D'){
//   console.log('You got D');
// }else{
//   console.log('You failed');
// }

// //
// let points = 'F'

// switch(points){
//   case 'A':
//     console.log('You got A');
//     break
//   case 'B':
//     console.log('You got B');
//     break
//   case 'C':
//     console.log('You got C');
//     break
//   case 'D':
//     console.log('You got D');
//     break
//   default:
//     console.log('You failed');

// Assignment Solution
// let numberInputter = prompt ('Enter a number')
// if (numberInputted % 2 ===0 ){
//     alert ('Not Weird')
// }else{
//     alert('weird')
// }
// Task 1
let n = 2;
if (n % 2 === 0) {
  console.log("Not Weird");
} else {
  console.log("Weird");
}
// Task 2
// for (let i = 1; 1<=5; i++){
//     if(i===3){
//         continue
//     }
//     console.log(i);
// }

// Task 3
let segunHeight = 10;
let segunMass = 70;
let segunBMI = segunMass / segunHeight ** 2;
console.log(segunBMI);

let mariamHeight = 9;
let mariamMass = 70;
let mariamBMI = mariamMass / mariamHeight ** 2;
console.log(mariamBMI);

if (segunBMI > mariamBMI) {
  console.log(
    "Segun's BMI" + segunBMI + "is greater than" + "Mariam's BMI" + mariamBMI
  );
} else {
  console.log(
    `Mariam's BMI $(mariamBMI) is greater than Segun's BMI $(segunBMI)`
  );
}

// Ternary Operator
let decision =
  segunBMI > mariamBMI
    ? "Segun's BMI is greater than Mariam's BMI"
    : " Mariam's BMI is greater than Segun's BMI";
console.log(decision);

//  Global / Local ( block and function) Scope
let AGES = 1000;
if (true) {
  console.log("inside 1st code block: " + AGES);
  if (true) {
    let AGES = 3000;
    console.log("inside 2nd code block:" + AGES);
  }
}

console.log("outside block of code:" + AGES);

// //  Function scope: its a fird class citizrn in javascript
// ES 6 in 2005 there used to be funtion declaraotr an expression but after ES we have function arrows .
//  3 types of functions: 1 Declaraion. 2 .Expressiion ams . Arrow function. Its only when you call, invoce or run the funtion that the funtion would work.

// Function Declartion
function team() {
  console.log("Tomiwa has left the class");
}
team();

function team1() {
  let name = "Tomiwa";
  console.log(name + " " + "has left the class");
}
team1();

//  Function Expression: passng the function into a varaibles. It doesnt acceot hoisting
let speak = function () {
  let name1 = "Simi";
  console.log(name1);
};
speak();

// Arrow Function :
let color = () => {
  let myColor = "Yellow";
  console.log(myColor);
};
color();
//  Parameters and argument in functions

const speaks = function (name) {
  let person = `Hi my name is ${name}`;
  console.log(person);
};
speaks("Simi");

//  declaration

function spoken(names) {
  let person = "Hello my name is " + names;
  console.log(person);
}

spoken("Temi");

//  Arrow
let speaker = (day) => {
  let statement = `good ${day}`;
  console.log(statement);
};

speaker("afternoon");

const greet = function (name, time) {
  let say = `Good ${time} ${name}`;
  console.log(say);
};
greet("Joseph", "evening");

// ===============
let calcAge = (year) => {
  let personYear = 2022 - year;
  console.log(personYear);
};
calcAge(1990);

function calcAges(year) {
  let personYear = 2022 - year;
  console.log(personYear);
}
calcAges(1999);

const speek = function (year) {
  let personYear = 2022 - year;
  console.log(personYear);
};
speek(1990);

//  returning variabls froma function

let programme = () => {
  let stack = "python";
  console.log(stack);
  return stack;
};

programme();

let newStack = programme();
let newTrainne = "I am currently enrolled  in " + newStack + " class";
console.log(newTrainne);

function word(food) {
  let expantiaite = `Hello David did you know Simi ate ${food} wraps of fufu`;
  console.log(expantiaite);
  return expantiaite;
}
let newExpantiate = word(20);

let reterate = newExpantiate + " after class";
console.log(reterate);

// // Assignment
// We have 2 tech teams(Spartans and alpha)

// They compete against each other 3 times, the winner with highest average score wins the trophy.

// Calculate the average score for each team using data below.

// Spartans score - 60, 70, 80

// Alpha score - 88, 91, 120

// Compare the teams average score to determine the winner of the competition and print to the console...

// Hint, use an if, else statements

//  Wednesday 19th October 22
let spartanScore = [60 + 70 + 80];
console.log(spartanScore);
let alphaScore = [88 + 91 + 120];
console.log(alphaScore);

let spartanAveScore = spartanScore / 3;
console.log(spartanAveScore);

let alphaAveScore = alphaScore / 3;
console.log(alphaAveScore);

//  Conditional statement
let condition1 = spartanAveScore > alphaAveScore;
if (condition1) {
  console.log("spartan wins with" + spartanAveScore);
} else {
  console.log("alpha wins with " + alphaAveScore);
}

//  Ternary

let ternCondition =
  spartanAveScore > alphaAveScore
    ? "spartan wins with" + spartanAveScore
    : "alpha wins with " + alphaAveScore;

console.log(ternCondition);

// =========================

let setOfScores = [1, 0, 200];
let fees = [60, 80, 0, 120];
let peeps = ["segun", "Adams", "Praise", "Tomiwa"];

function Details(numbers, sth) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      continue;
    }
    console.log(numbers[i]);
  }
  for (let i = 0; i < sth.length; i++) {
    if (sth[i] === 0) {
      continue;
    }
    console.log(sth[i]);
  }
}
Details(setOfScores, fees);

// ========================
// Higher order function and Call back function
//  Highe order function acceps another function as an argument or returns another function as a result .
//  Call back fucntions are functions passed to another fucnion as n argument and executed inside that function

function sayHello() {
  return "Hi";
}
let report = (talk) => {
  console.log(talk());
  let state = `${talk()} Boston did we see last week`;
  console.log(state);
};
report(sayHello);

// ================

let callBack = function () {
  let time = "afternoon";
  let exp = "Hey I can't come this " + time;
  //  return `Hey I can't come this {time}
  console.log(exp);
};
callBack();
let newWord = " Hey I cant come this afternoon anymore";
console.log(newWord);

function callBk() {
  let period = "afternoon";
  let explain = `Hey, I can't come this ${period}`;
  return explain;
}
let higherOrder = (accessCallBk) => {
  let completeWord = "anymore";
  console.log(accessCallBk());
  let discuss = `${accessCallBk()} ${completeWord}`;
  console.log(discuss);
};

higherOrder(callBk);

// Object---- object literal , Mathobject , Dates
// Higher order functions (forEach, map,filter, reduce)
// DOM (Document Object Model)

let client1 = {
  firstName: "Simi",
  lastName: "Akintola",
  hasDriversLicence: false,
  favFoods: ["Eba, Fufu", "Semo"],
  phone: "0708888888",
};
console.log(client1);

// Assignment -

// There are 2 teams, Alpha and Spartans.

// Each team competes 3 times and the average of the 3 scores is calculated( one average score per team)

// A team only wins if it has atleast double the average score of the other team otherwise no team wins.

// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores.

// 2) use the function to calculate the average for both teams.

// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)

// 4) use the checkWinner function to determine the winner for both Data

// 5) ignore draws this time

// Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47

// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 27
// Expo

// To calculate average of 3 values and them all and divide by 3

// Expo 2

// To check if a is atleast double number b, check for a >= 2 * B ....
// apply this to the teams average score

// 20th October 2022
// A1
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// A2
let teamAlpha = calcAverage(43, 21, 73);
let teamSpartan = calcAverage(63, 55, 47);
console.log(teamAlpha);
console.log(teamSpartan);

// A3
function checkWinner(aveAlpha, aveSpartan) {
  if (aveAlpha >= 2 * aveSpartan) {
    console.log(`Alpha wins ${aveAlpha} vs ${aveSpartan}`);
  } else {
    console.log(`Spartan wins ${aveSpartan} vs ${aveAlpha} `);
  }
}
checkWinner(teamAlpha, teamSpartan);

// Object---- object literal , Math-object , Dates. Array can contain another array.
// Object, key and value pairs, denoted by curly braces{}.

let userArray = [
  "David",
  "Akpan",
  2022 - 1985,
  "Devoloper",
  ["Onome", "Faith", "Ade"],
];
console.log(userArray);

let customer = {
  firstName: "David",
  lastName: "Akpan",
  DOB: 2022 - 1985,
  Profession: "Developer",
  Friends: ["Onome", "Faith", "Ade"],
  date:Date()
}
console.log(customer);

let newCustomer = {
country: 'Nigeria',
state: 'Lagos'
}
console.log(newCustomer);

let allCustomers = customer + newCustomer
console.log(allCustomers);

let allCustomer = {...customer,...newCustomer}
console.log(allCustomer);

// Dot vs Bracket notation

let newApplicant = {
firstName: 'Alaska',
lastName: 'Bobby',
skinColor: 'fair',
tribe: 'Yoruba',
age: 40,
address: {
  stateOfOrigin: 'Oyo',
  stateOfResidence: 'Lagos',
  lga: 'surulere'
},
favFoods: ['amala', 'ewa', 'egusi', 'banga'],
canDrive:true,
profession: 'senior Dev',
phone: 9998989773

}
// notation
// accessing firstname
let newApplicantFirstname = newApplicant.firstName
console.log(newApplicantFirstname.toUpperCase());
// accessing phone
let newApplicantPhone = newApplicant.phone
console.log(newApplicantPhone);
// accessing lga
let newApplicantLga= newApplicant.address.lga
console.log(newApplicantLga);
// accessing Favfood
let newApplicantFavFoods= newApplicant.favFoods
console.log(newApplicantFavFoods);
// console.log(newApplicantFavFoods.pop());
console.log(newApplicantFavFoods);
// dispklace banga for okro========
let givenFavFoods = newApplicant.favFoods
console.log(givenFavFoods[3] = 'okro');
console.log(givenFavFoods);

// Bracket notation
// accessing phone
let bracketApplicant = newApplicant ['phone']
console.log(bracketApplicant);
// accessinf FavFoods
let bracketApplicantFavFoods = newApplicant ['favFoods']
console.log(bracketApplicantFavFoods[2] = 'ogbolor');
console.log(bracketApplicantFavFoods);

console.log(newApplicant['address']['lga']);

// destructing objects
let account = {
namess: 'objec',
agess : 50,
colorss: 'black'

}

let nameAccount = account.namess
console.log(nameAccount)

let ageAccount = account.agess
console.log(ageAccount);

let colorAccount = account.colorss
console.log(ageAccount);

let{ namess, agess, colorss} = account

console.log(namess);
console.log(agess);
console.log(colorss);

// Object method
let passenger = {
firstName: 'Bayo',
lastName: 'Emeka',
year:2022,
busfareInNaira: 200,
pocketMoneyInNaira:1000,
currentDate: Date(),
calcBal: function (){
  // Example 1
  // return passenger.pocketMoneyInNaira - passenger.busfareInNaira
  // console.log('I am in class');

// Example 2
let statement = `${passenger.firstName} has ${passenger.pocketMoneyInNaira - passenger.busfareInNaira} naira`
return statement

}

}
console.log(passenger.calcBal());
let pasBals = passenger.calc

// Example 2 :  subtituting this for passenger
let passengerss = {
  firstName: 'Bayo',
  lastName: 'Emeka',
  year:2022,
  busfareInNaira: 200,
  pocketMoneyInNaira:1000,
  currentDate: Date(),
  calcBal: function (){
  
  
  // Example 2
  let statement = `${this.firstName} has ${this.pocketMoneyInNaira - this.busfareInNaira} naira`
  return statement
  
  }
  
  }
  console.log(passenger.calcBal());

  // Higher order functions (forEach, map, filter)
  let PEOPLE = [
    { name: 'Alasker', age:40, position: 'Game developer'},
    { name: 'Simi', age:50, position: 'Front-end Dev'},
    { name: 'Daniel', age:60, position: 'Bank-end Dev'},
    { name: 'Jasper', age:70, position: 'Mobile AppDeveloper'},
  ]

  for(let i = 0; i< PEOPLE.length; i++){
    // console.log(PEOPLE[i].position);
    console.log(PEOPLE[i].name);
  }

  // forEach () method
  // it doesnt return a new array
  PEOPLE.forEach(function (person){
console.log(person);
  })

  let newPeople = function(singlePerson){
    console.log(singlePerson);
return singlePerson

  }
  PEOPLE.forEach(newPeople)

  // map
  // it returns a new array
  // it doesn't change the size of the original array
  // uses values from the original array

  let anodaPerson = PEOPLE.map((person)=>{
    return person
  })
   console.log(anodaPerson)

  //  filter()
  // it loops
  // it returns based on condiion 

  for (i=0; i < PEOPLE.length; i++){
if (PEOPLE[i] === 'Simi'){
  console.log(PEOPLE[i]);
}

  }

  let filteredPerson = PEOPLE.filter(function(p){
    return p.name === 'Simi'
  }
  )
  console.log(filteredPerson);

//   // // Assignment
// 1)Create an object for Segun and Mariam... With properties(full name, mass and height)

// 2) create a 'calcBMI' method on both object to calculate the BMI(same method on both objects). Store the BMI value to a property, and also return from the method.

// 3) then log to the console who has the higher BMI, together with the fullname and the respective BMI .... Example Segun BMI(30.1) is higher than Mariams BMI(29.9)
// Test Data

// Seguns weight 76 and height is 1.99

// Mariams weight 80 and height is 2.1

// Exercise 2
// const companies = [
//   { name: 'company One', category: 'Finance', start: 1981, end: 2003 },
//   { name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'company Eight', category: 'technology', start: 1981, end: 1989 },
// ]

// 2)log to the console companies that lasted 10 years or more

// const age = [30,15,10,5,40,80,2,20,21,25]

// 3)log to your console again people with age greater or equal to 21

//  Please use higher order functions only
//  Assignment 3
//  Read up findIndex(), find() and reduce methods......All assignments are to be presented on monday



// ========MOnday====== 24th October 2-22
let Segun = {
  fullName:' Segz Segz',
  mass: 76,
  height: 1.99,
  calcBMI: function (){
    return this.mass / this.heigh ** 2
  }
}
console.log(Segun);
console.log(Segun.calcBMI ());

// Mariam's Data 
let Mariam = {
  fullName:' Mariams May',
  mass: 80,
  height: 2.1,
  calcBMI: function (){
    return this.mass / this.heigh ** 2
  }
}
console.log(Mariam);
console.log(Mariam.calcBMI());

let BMI = Segun.calcBMI() >Mariam.calcBMI() ? `Segun's BMI ${Segun.calcBMI()}  is higher than Mariams ${Mariam.calcBMI()}` : "Mariams's BMI is geeater"
console.log(BMI);

// ===============================
const DATA = [
{id:1, tittle:'first'},
{id:2, tittle:'second'},
{id:3, tittle:'third'},
{id:4, tittle:'fourth'},

]
//  for loop
for (let i = 0; i<DATA.length; i++){
  console.log(DATA[i]);
}

// Map Method
let newDATA = DATA.map(function(datum){
  return datum
})
console.log(newDATA);

// for loop and filter
for (leti =0;i<DATA.length; i++){
if(DAA[i].id % 2 ===0){
  console.log(data[1]);
}
}

// filter
let filteredDATA = DATA.filter((evenFiltered)=> evenFiltered.id % 2 ===0)
console.log(filteredDATA);

// findIndex: look for position
let itemIdx = DATA.findIndex((idx)=> idx.id ===2)
console.log(itemIdx);

// find
let item = DATA.find(function(item){
  return item.id ===2
})
console.log(item);
// reduce is jsut like map(), reduce(), also runs a callback for each element of an array. The diff here is that reduce passes the result of this callback (d accumulator) from one array element to another

const numbered = [1,2,3,4,5,6]
const sum = numbered.reduce((result,item)=>result +item, 0)
console.log(sum);

const SUM = numbered.reduce((result,item)=>result +item, 4)
console.log(SUM);

// Math Object
// floor: apprcmatr to the leat whole number 
let floor = 4.96666
let floorResult = Math.floor(floor)
console.log(floorResult);

// Ceil : a[pproximate to the nearest next number]
let ceil = 4.5000
let ceilResult = Math.ceil(ceil)
console.log(ceilResult);

// round: this is same as normal maths. roundong up tp the nearest whole number
let nums = 2.50000
let numsResult = Math.round(nums)
console.log(numsResult);

// pow
let raiseTo = 2**2
console.log(raiseTo);
// or
let pow= Math.pow(2,2)
console.log(pow);

// random
let random = Math.floor (Math.random() * 6)+1
console.log(random);

// Dates......


const Months=[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sept',
'Oct',
'Nov',
'Dec',
];

const DAYS = [
'SUn',
'Mon',
'Tue',
'Wed',
'Thur',
'Fri',
'Sat'
]
const date = new Date()
const month =date.getMonth()
console.log((Months[month]));
const day = date.getDay()
console.log(DAYS[day]);
const yearr =date.getFullYear()
console.log(yearr);
console.log(date,month,yearr,day);
const STATEMENT = `${DAYS[day]} ${Months[month]
} ${date.getDate()} ${date.getFullYear()}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
console.log((date));
console.log(STATEMENT);

// =================================
function colored (){
  console.log('this is a funtcion');
}

setTimeout(colored,3000)
console.log('outside the colored function');


// Tuesday 25 October 
const BILL = 430
const TIP =BILL <= 300 && BILL >= 50? BILL =0.15 : BILL *0.2
console.log(TIP);

const statements = `Bill was ${BILL}, tip was${TIP}, and total was $ {BILL +TIP}`;
console.log(statements);

// let dob = [20,30,50,80]
// dob forEach((item,elementn,index))

let interval = setInterval(()=>{
  let date = new Date()
  console.log(date);
},2000)

setTimeout(function(){
  let delay= 'Hi I would take some seconds to display';
  console.log(delay);

  clearInterval(interval)
},8000)

// ===========================================
// When we write our html and view on the browser , the browser views it as DOM(document object model)
// JS is similar to CSS
// -Select the element of group of elements you want to affect
// -Decide the effect you want to apply to the selection
// -There are many different ways to apply the effect 
