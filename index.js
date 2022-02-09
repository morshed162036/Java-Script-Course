//part-1: print in console
//console.log("Hello");

//part-2: variable value define
// var myName = "Morshed";
// var myAge = 20;

// console.log(myName);
// console.log(myAge);

//part-3: chalange-1: variable name syntex
// var _myName = "Morshed";
// var _1my__Name = "Ahmed";
// var 1my__Name = "Ahmed"; //wrong name 
// var $myName = "Shrabon";

// console.log(_myName);

//part-4: datatype that are primitives

// var myName = "Morshed";
// console.log(myName);
// //typeof operator
// console.log(typeof(myName));

// var myAge = 20;
// console.log(myAge);
// //typeof operator
// console.log(typeof(myAge));

// var myNameIsMorshed = true;
// console.log(myNameIsMorshed);
// //typeof operator
// console.log(typeof(myNameIsMorshed));

// var myNameIsMorshed;
// console.log(myNameIsMorshed);
// //typeof operator
// console.log(typeof(myNameIsMorshed));

//part-5: challange-2: Diffrent datatype sum & sub in console

// console.log(10 + "20");
// console.log(9 - "5"); // 1st Bug In JS
// console.log("20" + "20");
// console.log("20" - "20"); //1st Bug In JS
// console.log("20a" - "20");
// console.log("20" - "20a");
// console.log("java" + "script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("morshed" - "Ahmed");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

//part-6: Interview Question-1 : Difference between null vs undefined?

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless)); //2nd Bug IN JS

// var myNameIsMorshed;
// console.log(myNameIsMorshed);
// //typeof operator
// console.log(typeof(myNameIsMorshed));

//part-7: Interview Question-2 : What is Nan? 

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number.

// var myPhoneNumber = 9876543210;
// var myName = "Morshed";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName))
// {
//     console.log("plz enter valid phone number");
// }

//NaN practice

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

//part-8: expressions & operators

//part-8.1:Assignment Operator is ( = )

//part-8.2:Arithmetic Operators
// console.log(3+3);
// console.log(10-3);
// console.log(20/5);
// console.log(5*6);
// console.log("Remainder Operator " + 81%8);

//part-8.2.1:Increment & decrement ++x or x++ & --x or x--

//part-8.3: Comparison operators

// var a = 30;
// var b = 20;
//part-8.3.1: Equel (==)
//console.log(a==b);
//part-8.3.2: Not Equel (!=)
//console.log(a!=b);
//part-8.3.3: Greater than (>)
//console.log(a>b);
//part-8.3.4: Greater than or equal (>=)
//console.log(a>=b);
//part-8.3.5: Less than (<)
//console.log(a<b);
//part-8.3.6: Less than Equal (<=)
//console.log(a<=b);


//part-8.4: Logical operators

//part-8.4.1: Logical AND ( && )
//console.log(a<b && a>0);
//part-8.4.2: Logical OR ( || )
//console.log(a<b || a>0);
//part-8.4.1: Logical NOT ( ! )
//console.log(!((a<b) && (a>0)));
//console.log(!false);

//part-8.5: String Concatenation (operators is ( + ))
//console.log("Hello world");
//console.log("Hello " + "world"); // Concatenation

//part-9: challange-3: power declare (3**3)
// //part-10: challange-4: swap two variable value
//  var a = 5;
//  var b = 10;
//   c = a;
//   a = b;
//   b = c;
//  console.log( a);
//  console.log( b);

// //part-11: challange-5: swap two variable value with out temp variable
 //var a = 5;
 //var b = 10;
 // a = a+b;
 // b = a-b;
 // a = a-b;
// console.log( a);
// console.log( b);
//part-12: Interview Question-3 : diff between == vs === ?
//(==) is check only values
//(===) is check value and datatype
