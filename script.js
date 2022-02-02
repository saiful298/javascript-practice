//Variable type Numeric///all type of number
var price = 21;
var age = 13;
var temperature = 37;

//Variable type String//// all type of text 
var name = 'I am saiful islam';
var address = "west Boxnagur sarulia Demra  Dhaka";
var collage = "Shanarper Rowshon ara college";

//Variable type Boolean/// just true and false
var pass = true;
var subscribed = false;





//===================================== Mathematical operations in JavaScript=============================================
// 1--Example
var moneyAvailable = 100;
var orangePrice = 5;
var ornageQuantity = moneyAvailable / orangePrice;
console.log(ornageQuantity);


// 2--Example

var eggPrice = 8;
var egeQuantity = 10;
var sum = eggPrice + egeQuantity;
var division = eggPrice / egeQuantity;
var difference = eggPrice - egeQuantity;
var multiplication = eggPrice * egeQuantity;
console.log(sum);
console.log(division);
console.log(difference);
console.log(multiplication);


// 3--Example ////// When increase age or price or number========  and when you check the terminal after commenting on any three variable============= 

var age = 15;
age = age + 1;
age += 1;
age++;
console.log(age);


// 4--Example
var first = 'saiful';
var last = 'islam';
var fullName = first + ' ' + last;
console.log(fullName);

// 5--Example


// =================== lets check variable========== when you check the terminal after commenting on any two variable=============
var first = 1;
var first = '1st';
var first = true;
console.log(typeof first);


// ==================indexOf use (String)===================
var playersName = ['mosfiq', 'tamim', 'sakib', 'taskin', 'Rubal', 'mashrafi'];
var findPlayer = playersName.indexOf('taskin');
console.log(findPlayer);


// ==================indexOf use (Numeric)===================
var playersNumb = [20, 25, 36, 50, 62, 78];
var searchPlayer = playersNumb.indexOf(62);
console.log(searchPlayer);

// -----if you change player number------
playersNumb[3] = 58;
playersNumb[5] = 82;
console.log(playersNumb)


// ==================Push /Add new user from an Aray (String)===================
var players = ['mosfiq', 'tamim', 'sakib', 'taskin', 'Rubal', 'mashrafi'];
players.push('Ashraful');
console.log(players);

// =========pop / remove last user from an Aray (String)==========
players.pop();
console.log(players)

// =============Push /Add new user number  from an Aray  (Numeric)============
var playersNumber = [20, 25, 36, 50, 62, 78];
playersNumber.push(92);
console.log(playersNumber);

//=======pop / remove last user number  from an Aray  (Numeric)=====
playersNumber.pop();
console.log(playersNumber)



//===================================================Compare variables and Comparison operator=======================================
console.log(5 == 6);
console.log(5 == 5);
console.log(5 > 6);
console.log(5 < 6);
console.log(5 != 6); // ===>>> What makes the two variables different? ??? lets check 

// console.log(studyGood && goodPerson);
// console.log(isBanker || goodResult);

//=========================================================if-else, comparison=========================================================

var isFoodReady = true
if (isFoodReady == true) {
    console.log('mama!! I Will eat now.')
}


var phonePrice = 18000;
var myMoney = 12000;
if (phonePrice < myMoney) {
    console.log('Yeah!! my new phone ');
}
else {
    console.log('i can not bye new phone');
}



//========================Handle multiple conditions, and or=============================
var iAmSaiful = true;
var iHavemoney = 5000;
var iamInDhaka = true;
var iamincumilla = false;

if ((iAmSaiful == true && iHavemoney > 2000) || iamInDhaka == true) {
    console.log('you are brillint');
}
else {
    console.log('you are not brillint');
}


//=============OR========if/else Multi stage condition and nested conditions==================

var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 9;
var packedWell = false

if (danishPrice < myBudget) {
    console.log('Eat Danish and go to Danish');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon deya cha khamo');
}

else if (toastBiscuitPrice < myBudget) {
    console.log('toest Biscut cha deya khaita vallaga')
}
else {
    console.log('sodo cha khamo karon cha khaita taka laga na ')
}

// if (danishPrice<myBudget)7{
//     if (packedWell==true){
//         console.log('fresh danish, lets eat now')
//     }
//     else{
//         console.log('Can not eat this danish  ame khawar aga  nosto hoiya gasa packet na thakay ')
//     }
// }

//================================================================================================================================
//array

var collegeBag = ['pen', 'book', 'paper', 'Notebook', 'bottol'];
// collegeBag.indexOf('extraNotebook');
// collegeBag.push('extraPen');
// collegeBag.push('watch');

//condetion
if (collegeBag.length >= 4) {
    console.log('bag full hoiya gasa r kiso newa jaibo na')
}
else if (collegeBag.length == 4) {
    console.log('tomar bag a only 4 ta item asa')
}

else {
    console.log('WOW!! Bag a jayga asa aro kiso nawa jaibo ')
}

//=====================While loop  ===============================

var number = 0;
while (number < 9) {
    console.log('number aro lekho');
    number++;
}


//odd number
var number = 1;
while (number <= 20) {
    console.log(number);
    number = number + 2;
}

//even number
number = 0;
while (number <= 20) {
    console.log(number);
    number = number + 2;
}

//=====================For loop==========================
for (var number = 0; number < 7; number++) {
    console.log('number aro lekha jaibo');//String input
    console.log(number); //Numeric input
}

//odd number
for (var number = 1; number <= 20; number += 2) {
    console.log(number);
}

//even number
for (var number = 0; number <= 20; number += 2) {
    console.log(number);
}

//////////////////////////////////////////////////EXAMPLE////////////////////////////////////////////////

// Ammo amak 500 taka desa 5 ta singara and 7 ta sumosa anar jonno . singara 6 taka
// and sumosa 5 taka .singara sumosa kenar por dokandar thaka amr koy taka ferot pabo and ammok debo koy taka back korbo 


// ak bar kinar shomoy 

function ammuDise(taka, singaraQuantity, somusaQuantity) {
    console.log('ammo bolse 5ta singara and 7 ta somusa nawar jonno', taka);
    var singaraPrice = 5;
    var singaraQuantity = 5;
    var singaraTotalTk = singaraPrice * singaraQuantity;
    var somusaPrice = 6;
    var somusaQuantity = 7;
    var somusaTotalTk = somusaPrice * somusaQuantity;
    var moneyBack = taka - (singaraTotalTk + somusaTotalTk);
    return moneyBack;
}
var money = ammuDise(300);
console.log('dokandar bollo--- ay nan apnar singara + somusa and baki taka', money);
var money = ammuDise(300, 8, 3);
console.log('15 tarikh:dokandar bollo--- ay nan apnar singara + somusa and baki taka', money);
var money = ammuDise(300, 5, 4);
console.log('20 tarikh: dokandar bollo--- ay nan apnar singara + somusa and baki taka', money);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////multiple parameter//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//====================Addition(+) function/number===============================
function addTwoNumber(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secendNumber = 47;
var result = addTwoNumber(firstNumber, secendNumber);
console.log('result value: ', result);

//====================Multiplication(*) function/number=====================
function multiplayTwoNumb(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multiplayTwoNumb(5, 100);
console.log('total after multplication', total);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////multiple objects with multiple properties//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var book = {
    bookName: 'Einglish for today',
    author: 'saiful islam',
    price: 200,
    page: 298,
    published: 'programing point'
}

var phone = {
    phoneName: 'Oppo A53',
    storage: '128gb',
    ram: '8GB',
    price: 19000,
    buyDate: 2021,
}
// akhane phone hocca object and phone ar information ==>> ( phone name , storage, ram , price, buydata) <== golo proparty  

console.log(phone);//phone ar  sob information golo publishid korar jonno  object na main name lekha hoy 
console.log(phone.phoneName);//phone ar information  alada alada show korar jonno 
phone.price = 20000;//phone at price update kora hoise
console.log(phone);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////while and for loop break and continue////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//while loop 
var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 6) {
        break
    }
    i++;
}

//for loop
for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 9) {
        break
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Check whether a year is a Leap Year or not>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);


const yourYear = 20220;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap ', isYourYearLeapYear);

//==========================================Calculate Factorial of a number using for loop==========================================

//7! ==> 7 x 6 x 5 x 4 x 3 x 2 x 1 ===5040
var Factorial = 1;
for (var i = 1; i <= 7; i++) {
    Factorial = Factorial * i;
}
console.log(Factorial);

//=========================================== problem fixt================================================

const myNumber = 5;
const output = Math.abs(myNumber);
console.log(output);


// number ba price ar   oporar mann nawar jonno (math.ceil) use kora hoise 
const roolNumber = 21.998885;
const rooloutput = Math.ceil(roolNumber);
console.log(rooloutput);

// number ba price ar   nechar mann nawar jonno (math.floor) use kora hoise 
const ruriprice = 21.998885;
const rutioutput = Math.floor(ruriprice);
console.log(rutioutput);


//===========================================Create a Fibonacci Series using a for loop================================================

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);


//function

function fiboUse(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fiboUse(15);
console.log(fiboSeries);