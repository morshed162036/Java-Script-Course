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
// var a = 5;
// var b = 10;
//  a = a+b;
//  b = a-b;
//  a = a-b;
// console.log( a);
// console.log( b);
//part-12: Interview Question-3 : diff between = vs == vs === ?
//(=) is for asing value in variable.
//(==) is check only values.
//(===) is check value and datatype.

//**********************************************
//**********************************************
//***************Control Statement & Loops******
//********************************************** 
//**********************************************

//part-13: control Statement & Loops

//part-13.1: If , Else.

    var rain = "raining";

    if(rain=="raining")
    {
        //console.log("raining");
    }else{
        //console.log("not raining");
    }

    var area = "square";
    var PI = 3.142, l = 5, b = 4, r = 3;

    if(area == "circle")
    {
        //console.log("The are of the circle is :" + PI*r**2);
    }else if(area == "triangle")
    {
        //console.log("The are of the triangle is :" + (l*b)/2);
    }else if(area == "rectangle")
    {
        //console.log("The are of the rectangle is :" + (l*b));
    }else{
        //console.log("Please Enter Valid Data");
    }

//part-13.2: chalange-6: Write a program that works out weather if a given your is a leap year or not?
// A normal years has 365 days, leap years have 366, with an extra day in february.

    var year = 2020;

    if (year%4==0)
    {
        if(year%100 ==0)
        {
            if(year%400 == 0)
            {
                //console.log("Leap year");
            }else{
                //console.log("Not Leap year");
            }
        }else{
            //console.log("Leap year");
        }
    }else{
        //console.log("Not Leap year");
    }

//part-13.3: Interview Question-4 : What is truthy and falsy values in Javascript?
// ans: we have total 5 falsy values in Javascript.
//  0, "", undefined, null, NaN, False** is false anyway.

    if(score = 0)// if(score = 12)
    {
        //console.log("we loss the game");
    }else{
        //console.log("yeah we won the game");
    }

//part-13.4: Conditional (ternary) oprtator is the only JavaScript operator that takes three operands.

    var age = 17;

    if (age>=18)
    {
        //console.log("you are eligible to vote");
    }else{
        //console.log("you are not eligible to vote");
    }
    // conditional 
    //console.log((age>=18) ? "you can vote":"you can't vote");
    statement = (age>=18) ? "you can vote":"you can't vote";
    //console.log(statement);

//part-13.5: Switch Statement.

// Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
// 1st without break statement.
// Find the area of circle, triangle and rectangle?

    var area = "circle";
    var PI = 3.142, l = 5, b = 4, r = 3;

    switch(area){
        case 'circle':
            //console.log("The are of the circle is :" + PI*r**2);
            break;
        case 'triangle':
            //console.log("The are of the triangle is :" + (l*b)/2);
            break;
        case 'rectangle':
            //console.log("The are of the rectangle is :" + (l*b));
            break;
        default:
            //console.log("Please Enter Valid Data");
    }

//part-13.6: While Loop.
    var num = 0;
    // block scope
    while(num<=10)
    {
        //console.log(num);
        num++
    }

//part-13.7: Do-While Loop.
    
    var num = 11;

    
    do{
        //debugger;
        //console.log(num);
        num++
    }while(num<=10)

//part-13.8: For Loop.

    for(var num = 0; num<=10; num++)
    {
        //console.log(num);
    }

//part-13.9: challenge-7: Javascript program to print table for given number(8)?

    var num1 = 8;
    for(var num = 0; num<=10; num++)
    {
        //console.log(num1 +" * " + num +" = "+ (num*num1));
    }

//*********************************************
//***********Functions ************************
//*********************************************

//part-14.1:Function.
    function sum()
    {
        var a=10,b=20,total;
        total = a+b;
        //console.log(total);
        
    }
  // console.log(sum()); 

//part-14.2: Paramters in function
function sum(a,b)
{
    
    var total = a+b;
    //console.log(total);
    
}
sum(20,10);
//console.log(sum(20,10));

//Interview Question
//Why functions?
// ANS: you can reuse code: define the code once, and use it many times.
//you can use the same code with different arguments, to produce different results.

//part-14.3: Function expressions. AND Return keyword.
// Function expression simply means create a function and put it into the variable.
//When javascript reaches a return statement the function will stop executing.
    function sum(a,b)
    {
        
        var total = a+b;
        return total;
        
    }
    var funexp = sum(20,10);
    //console.log(funexp);
    //console.log('the sum of two number is '+ funexp);

//part-14.4: Anonymous Function function.
// ASN: A function expression is similar to and has the same syntax as a function declaration One can define "named"
//function expressions(where the name of the expression might be used in the call stack for example) or "anonymous" function expressions.

    var funexp = function(a,b)
    {
        
        var total = a+b;
        return total;
        
    }
    var sum = funexp(20,10);
    var sum1 = funexp(21,10);
    //console.log('the sum of two number is '+ sum);
    //console.log(sum<sum1);//print true or false

   // ECMAScript 2015 / ES6
   //1)LET and CONST
   //2) TEMPLATE STRING
   //3) DEFAULT ARGUMENT
   //4) DESTRUCTURING
   //5) OBJECT PROPERTIES
   //6) ARROW FUNCTION
   //7) REST OPERATORS
   //8) SPREAD Operators


//1) LET vs CONST vs VAR

//var => Function scope
//let and const => Block Scope
    // var myName = "Morshed Ahmed"
    // console.log(myName);

    // myName = "Shrabon"
    // console.log(myName);

    // const myName = "Morshed Ahmed"
    // console.log(myName);

    // myName = "Shrabon"
    // console.log(myName);

    function biodata(){
        let myfirstname = "Morshed";
        //console.log(myfirstname);
        if(true){
            let mylastname = "Ahmed";
           // console.log('inner '+ myfirstname);
           // console.log('inner '+ mylastname);
        }
       // console.log('innerOuter '+ mylastname);
    }
    biodata();

// 2) Template literals (Template strings)
// JavaScript program to print table for given number (8)?

    var num1 = 8;
    for(var num = 0; num<=10; num++)
    {
        //console.log(num1 +" * " + num +" = "+ (num*num1));
        //console.log(`${num1} * ${num} = ${num*num1}`);
    }

// 3) Default Argument or Parameters
//Default function parameters allow named perameters to be initialized with default values allow named parameters to be
//initialized with default values if no value or undefiend is passed.

    function multi(a,b=10)
    {
        
        var total = a+b;
        //console.log(total);
        
    }
    multi(20);

//6) Fat Arrow Function

// Normal way of writing function

    //console.log(multi(20));
    function multi(a,b=10)
    {
        
        var total = a+b;
        return total;
        
    }
    multi(20);

// How to convert it into Fat Arrow Function

    //type-1:
    // const mult = (a,b=10) => {
    //     var total = a+b;
    //     return total;
    // } 
    // console.log(mult(20)); //console always fat arrow function bananor pore dite hobe..

    //type-2:
    // const mult = () => {
    //     //var total = a+b;
    //     return `${(a=10)+(b=10)}`;
    // } 
    // console.log(mult());

    //type-3

    // const mult = () => `${(a=10)+(b=10)}` 
    // console.log(mult());


/******************* */
//Array In JavaScript
/******************* */

// In javascript we can store any kind of datatype in same variable.

    var myFriends = ['auti',22,'male','nafise',21,'male','fahim',52,true];

//part-1: Traversal in Array

// navigate through an array

// if we want to get the single data at a time and also
//if we want to change the data

var myFriend = ['auti','nafise','fahim','shrabon'];
//console.log(myFriend[1]);
//console.log(myFriend.length);

// Using For loop
    for(var i=0; i<=myFriend.length-1; i++){
        //console.log(myFriend[i]);
    }

//Using For in loop // it print only indrex number.
    for(let elements in myFriend){
        //console.log(elements);
    }

//Using For of loop // it print only indrex value.
    for(let elements of myFriend){
        //console.log(elements);
    }

// Using forEach()
//Calls a function for each element in the array.
//can not use break in this function.
    //type-1:
    myFriend.forEach(function(element, index, array){
        //console.log(`index-${index} => element-${element} => ${array}`);
    });
    //type-2: fat arrow. // one prb in Fat Arrow function..it can't Support this method.
    myFriend.forEach((element, index, array) => {
        //console.log(`index-${index} => element-${element} => ${array}`);
    })

// part-2: Searching and filter in an Array. All function pass 4 argument(current value, element, index, array).
// part-2.1:Arroy.prototype.indexOf()

//Return the first (least) index of an element within the array equal
//to an element, or -1 if none is found. It search the element from the 0th index number.

    //console.log(myFriend.indexOf('nafise'));// return elements index number
    //console.log(myFriend.indexOf('nafise',3));// start to find nafise after index 3. if not found then return -1.

//part-2.2: Arroy.prototype.lastindexOf()

//Return the last (least) index of an element within the array equal
//to an element, or -1 if none is found. It search the element from the last index number.
    //console.log(myFriend.lastndexOf('nafise'));
    //console.log(myFriend.lastndexOf('nafise',3));// start to find nafise before index 3. it search backword.if not found element return -1.

//part-2.3:Array.prototype.includes()
//Determines whether the array contains a value, returning true or false as appropriate.

    //console.log(myFriend.includes('nafise'));// if value found in array then return true.otherwise return false. It also travers forward.

//part-2.4:Array.prototype.find()
//Return the found element in the array, if some element in the array satisfies the testing function,
//or undefined if not found.
//Only problem is it returns only one element.

    const price = [20,25,30,35,40,45];
    //type-1:
    // const findElmn = price.find((currVal) => {
    //     return currVal<35;// return only 1st value which fulfill this condition.
    // })
    //console.log(findElmn);
    //type-2:
    //console.log(price.find((currentvalue) => currentvalue<35));

//part-2.5:Array.prototype.findIndex()
//Return the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.
    //console.log(price.findIndex((currentvalue) => currentvalue<35));


//part-2.6:Array.prototype.filter()

//Return a new array containing all elements of the calling array for which the provided filtering function returns true.
    const newPriceList = price.filter((elem) => {
        return elem<35;// if condition true then return a set of array or return empty array.
    })
    //console.log(newPriceList);

//part-3: How to Sort an Array
//part-3.1: Array.prototype.sort()

//The sort() method sorts the elements of an array in place and return the sorted array.
//The default sort order is ascending, built upon converting the elements into strings,
// then comparing their  sequences of UTF-16 code units values.

    const month = ['jan','march','feb','dec'];
    //console.log(month.sort()); //print [ 'dec', 'feb', 'jan', 'march' ] because it compare 1st charecter asci value.

//Because of this, the sort() method will produce an incorrect result when sorting numbers.
    const day = [1,2,30,200,34]
    //console.log(day.sort());// print [ 1, 2, 200, 30, 34 ]


//part-4: How to CRUD an Array
    const animal = ['pigs', 'goats', 'sheep'];
//Array.prototype.push()
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

    
    //type-1:
    //animal.push('cow');// add element in last of the array.
    //console.log(animal);
    //type-2:
    //const count = animal.push('cow');//return length of the array.
    //console.log(count);
    //type-3:
    //animal.push('cow','cat','dog');// ADD multipul value in array.
    //console.log(animal);

//Array.prototype.unshift()
//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

    //type-1:
    //animal.unshift('cow');// add element in first of the array.
    //console.log(animal);
    //type-2:
    //const count = animal.unshift('cow');//return length of the array.
    //console.log(count);
    //type-3:
    //animal.unshift('cow','cat','dog');// ADD multipul value in array.
    //console.log(animal);

//Array.prototype.pop()
//The pop() method removes the element from an array and returns that element. This method changes the length of the array.

    //type-1:
    // console.log(animal);
    // console.log(animal.pop());//consol remove element value
    // animal.pop();// remove element from last of the array.
    // console.log(animal);

//Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

    //type-1:
    // console.log(animal);
    // console.log(animal.shift());//print removed element values.
    // animal.shift();// remove element from 1st of the array.
    // console.log(animal);

//Array.prototype.splice()
//Adds and/or removes elements from an array.

//1: Add Dec at the end of an array.
//2: What is the return value of splice method?
//3: Update march to March(update).
//4: Delete June from an array.

    const months = ['Jan', 'march', 'April', 'June', 'July'];

//Ans-1:
     //const newmonth = months.splice(months.length,0,'Dec'); // 1st index number where add or delete. 2nd is for delete count. 0 for add 1 or others for delete. 3rd value for add.
     //console.log(months);
//Ans-2:
     //months.splice(months.length,0,'Dec');
     //console.log(newmonth);// [deleted array list return kore]
//Ans-3:
    //type-1:  
    //const updatemonths = months.splice(1,1,'March');// put update element index number, delete previous element, write new element value.
    //console.log(months);
    //type-2:  
    // console.log(months);
    // const updatemonths = months.splice(months.indexOf('march'),1,'March');// put update element index number, delete previous element, write new element value.
    // console.log(months);
    //type-3:
    // const indexOfMonth = months.indexOf('march');// if data found then return index number else return -1.
    // if(indexOfMonth != -1){
    //     const updatemonths = months.splice(indexOfMonth,1,'March');
    //     console.log(months);
    // }else{
    //     console.log('No Data found');
    // }
//Ans-4:
    // const indexOfMonth = months.indexOf('June');// if data found then return index number else return -1.
    // if(indexOfMonth != -1){
    //     const updatemonths = months.splice(indexOfMonth,1);// 1 er infinity lekle joto data thakbe shob delete kore dibe.
    //     console.log(months);
    //     console.log(updatemonths);
    // }else{
    //     console.log('No Data found');
    // }

//part-4: Map and Reduce and filter Method

//let newArray = arr.map(callback(currenValue[, index[, array]]))
//          //return element for newArray, after executing something
//        }[, thisArg]);
//returns a new array containing the results of calling a function on every element in this array.

//Array.prototype.map()
    const mapArray = [1,4,9,16,25];
    //type-1:
    // num > 9
    // let newArr = mapArray.map((currElem,index,arr) => {
    //     return currElem > 9;
    // })
    // console.log(mapArray); 
    // console.log(newArr); //[return true false value]
    //type-2:
    // let newArr = mapArray.map((currElem,index,arr) => {
    //     return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
    // })
    // console.log(newArr);
    
    //compare between Map() and forEach()

    // let newArr = mapArray.map((currElem,index,arr) => {
    //     return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
    // })
    // console.log(newArr);// Return New Array set.

    // let newArrfor = mapArray.forEach((currElem,index,arr) => {
    //     return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
    // })
    // console.log(newArrfor);// Return Undefined.

// Challenge time.
//1) Find the square root of each element in an array?
//2) Multiply each element by 2 and return only those elements which are greater than 10?

    let arr = [25, 36, 49, 64, 81];
//ANS-1:

    // let arrSqrt = arr.map((currElem) => {
    //     return Math.sqrt(currElem); // return charaw 1 line e kora jaito.
    // })
    //  console.log(arrSqrt);

//ANS-2:
    //type-1:
    // let arr2 = arr.map((currElem) => {
    //     return currElem * 2;
    // }).filter((currElem) => {
    //     return currElem >80;
    // })
    // console.log(arr2);

    //type-2:
    // let arr2 = arr.map((currElem) => currElem * 2).filter((currElem) => currElem >80);
    // console.log(arr2);

//Array.prototype.reduce()

//flatten an array means to convert the 3d or 2d array into a single dimension array.
//The reduce() method executes a reduce function (that you provide) on each element of the array, resulting in a single output.
//The reducer function take 4 arguments:
//1) Accumulator.
//2) Current value.
//3) Current Index.
//4) Source Array.
    // type-1:
    // let arrReduce = arr.reduce((accumulator,currentvalue) => {
    //     return accumulator += currentvalue ;
    // })
    // console.log(arrReduce);// return sum of the array.

    //type-2:
    //let arr2 = arr.map((currElem) => currElem * 2).filter((currElem) => currElem >80).reduce((acc,currElem) => acc +=currElem);
    // let arr2 = arr.map((currElem) => currElem * 2).filter((currElem) => currElem >80).reduce((acc,currElem) => acc +=currElem,1 );
    // console.log(arr2);

    //type-3: initial value set.
    //4 sub = 1 sub mark = 100
    //3 sub = [25, 36, 49]
    // let arrReduce = arr.reduce((accumulator,currentvalue) => {
    //     return accumulator += currentvalue ;
    // },100) //100 is set as a initial value. which is auto save in accumulator before execution.
    // console.log(arrReduce);// return sum of the array.

    //type-3.1: How to fatten an array. converting 2d, 3d array into one dimensional array.

    // const arr2d = [
    //     ['stusent_1', 'student_2'],
    //     ['stusent_3', 'student_4'],
    //     ['stusent_5', 'student_6']
    // ];
    // let Arr2d = arr2d.reduce((acc,curr) => {
    //     return acc.concat(curr);
    // })
    // console.log(Arr2d);// print ['stusent_1','student_2','stusent_3','student_4','stusent_5','student_6']
    
    //type-3.2:
    // const arr2d = [
    //         ['stusent_1', 'student_2'],
    //         ['stusent_3', 'student_4'],
    //         ['stusent_5', 'student_6'],
    //         ['stusent_7', ['stusent_8', 'student_9']]
    //     ];
    // let Arr2d = arr2d.reduce((acc,curr) => {
    //         return acc.concat(curr);
    // }) //can't return inner array into a fatten array.
    // console.log(Arr2d);// print ['stusent_1','student_2','stusent_3','student_4','stusent_5','student_6','stusent_7', ['stusent_8', 'student_9']]
    




/******************* */
//String In JavaScript
/******************* */

// A javascript string is zero or more characters written inside quoters.
//javascript strings are used for storing anf manipulating text.
//You can use single or double quotes.
//String can be created as primitives, from string literals, or as objects, using the String() constructor.

    let myFirstName = 'Morshed';
    let myLastName = "Ahmed";
    let fullName = "morshed ahmed";
    //let fullName = new String("morshed ahmed");// constructor// use kora uchit na eita.
    // console.log(myFirstName);
    // console.log(fullName);

//part-1: How to find the length of a String.

    //console.log(fullName.length);

//part-2: Escape Character

    //type-1:
    // let anySentence = "My name is \"Morshed\" ";
    // console.log(anySentence);

    //type-2:
    // let anySentence = 'My name is "Morshed"';
    // console.log(anySentence);

//part-3: Find a String in a String.


// case sensitive.
//String.prototype.indexOf(searchValue [, fromIndex])

//the indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. it search forword.

    // const myBio = "I am Morshed Ahmed";
    // console.log(myBio.indexOf('a') );// return index number if not found then return -1
    // console.log(myBio.indexOf('a',5) ); //search from index number 5. forword search.

//String.prototype.lastIndexOf(searchValue [, fromIndex])

//the lastIndexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. it search backword.

    // const myBio = "I am Morshed Ahmed";
    // console.log(myBio.lastIndexOf('m') );// return index number if not found then return -1
    // console.log(myBio.lastIndexOf('m',5) ); //search from index number 5. forword search.


//part-4: Search for a String in a String.


//String.prototype.search(regexp)
//The search() method searches a string for a specified value and returns the position of the match.
// this method can't take a second start position argument.
    // const myBio = "I am Morshed Ahmed";
    // console.log(myBio.search("am"));


//part-5: Extracting String Parts.

// remember: Javascript counts position from zero. 1st position is 0.
//there are 3 methods for extracting a part of a string:
//1) slice(start, end)
//2) substring(start, end)
//3) substr(start, length)

    //part-1: The slice() method.
    //slice() extracts a part of a string and returns the extracted part in a new string.
    // this method takes 2 parameters: start and end position(end not included).
    // The slice() method selects the elements starting at the given stat argument, and ends at, but does not include the given end argument.

    const myBio = "I am Morshed Ahmed";
    
    //type-1:
    // let slice = myBio.slice(2);
    // console.log(slice);//print : am Morshed Ahmed

    //type-2:
    // let slice = myBio.slice(0,3);
    // console.log(slice);//print : I a

    //type-3:
    // let slice = myBio.slice(2,-2);// start from index 2 and -2 means (length-2).
    // console.log(slice);//print : am Morshed Ahm

//Challenge Time: 
//Display only 280 characters of a string like the one used in Twitter?

    let myTwitter = "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing ";

    let myActualTweet = myTwitter.slice(0,280);
    console.log(myTwitter.length);
    console.log(myActualTweet);
    console.log(myActualTweet.length);