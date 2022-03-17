// alert("warning")

// // console.log("jbcfjh")
// const firstName="karthik"
// let age=20
// const haspen=true
// const gtrtg=null


// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof Boolean)
// console.log(typeof null)

// console.log(age)
// console.log(firstName)
// console.log(haspen)
// console.log(gtrtg)

//1.variables///////////////////////////////
//containers to store values//
// var number1 = 34;
// var number2 = 56;
// console.log(number1 +  number2);

///2.Datatypes///////////////////////////////
///numbers///
// const num1 = 455;
// var num2 = 45;
/////string/////
// const str1 = "this is a string"
// var str2 = "this is  also a string"

//////objects////
// var marks = {
//     ravi: 23,
//     bhvan: 32,
//     ram: 45.
// }

// console.log(num1);
// console.log(str1);
/////Boolean Expressions//////

// const a = true;
// const b = false;

// console.log(a)
// console.log(b)
////undefined or null/////

////at a very high level, there are two types of data types in js
// 1. primitive data types: undefined, null,num,str,boolean,symbol
// 2. Reference dat types;  Arrays and objects//////

// const arr = [1,2,3,4,5]
// // console.log(arr)
// console.log(arr [2])
// console.log(arr [4])

//////////operators////////////////////////////
//arthemativ operators//

// const a = 50;
// const b = 60;
// console.log("The value of a + b ", a+b);
// console.log("The value of a - b ", a-b);
// console.log("The value of a * b ", a*b);
// console.log("The value of a / b ", a/b);
///assignment operators///
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// console.log(c)
//comparision operator//
// const x =30;
// var y = 40;
// console.log(x >= y)
// console.log(x <= y)

///logical operators///
//logical AND ///
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)

////logical  OR ///
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

////logical NOT///
// console.log(!false)
// console.log(!true)

///////FUNCTIONS/////////////////////////////////

// function avg(a, b){
//     return (a + b)/2;
// }
// c1 = avg(4, 6);
// c2 = avg(10, 10);

// console.log(c1, c2)
// ///////////or try this ////

// function avg(a, b){
//     c = (a + b)/2;
//     return c; 
// }
// c2 = avg(10, 10);

// console.log(c1, c2)

//////////conditionals in javascript///////////////

// const age = 18;
// if(age >=18) {
//     console.log('eligible for driving license');
// }
// else{
//     console.log('not eligible for driving license');
// }

//////////////string methods////////////////////////



// const marks = 55
// if(marks > 90) {
//   console.log("awarded A grade")
// }else if(marks > 80){
//     console.log("awarded B grade")
// }else if(marks > 70){
//     console.log("awarded C grade")
// }else{
//     console.log("awarded D grade")
// }
/////////Turnari operation///////
// marks = 90)? awardede A grade:awarded B grade
// console.log()
// const a = 2;
// const b = 2;
// console.log(a + b);

// a>b?console.log("true"):console.log("false");

// const firstName = "karthik"
// const presentYear = 2022
// const birthYear = 2001
// const age = presentYear-birthYear

// console.log("my name is "+firstName+" and my birthYear is"+birthYear+" and my age is "+age)

// console.log(`my name is ${firstName} and my birth Year is ${birthYear} and my age is ${age}`)


// const day = "abcd"
// switch(day)
// {
//     case 'monday':
//         console.log("Events!!");
//         break;
//     case 'tuesday':
//         console.log("Music");
//         break;
//     case 'friday':
//         console.log("test");
//         break;
//     case 'saturday':case 'sunday':console.log("Reset!!");
//         break; 
// }
// console.log()
const h1Ele =document.querySelector('h1')
h1Ele.textContent="hey"
h1Ele.style.color = "yellow"
h1Ele.style.fontSize = "100px"
h1Ele.style.backgroundColor = "red"

const pEle = document.querySelector('p')
pEle.textContent = "software testing"
pEle.style.color = "blue"
pEle.style.backgroundColor = "yellow"

