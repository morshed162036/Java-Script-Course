// How javaScript works? Advanced and Asynchronous JavaScript

// Advance JavaScript Section

// 1️⃣: Event Propagation( Event Bubbling & Event Capturing)
//     // Check html file.
// 2️⃣: Higher Order Function.
//     // Function Which takes another function as an arguments is called HOF
//     // jei function onno function ke argument hisabe accept kore take HOF bole.
// 3️⃣: Callback Function.
//     // Function which get passed as an argument to another function is called CBF.
//     // A Callback function is a function that is passed as an argument to another function, to be "called back" at a later time.
//     // jei function ke amra onno function er vitore argument hishabe pass kori tader call back function bole.


// 4️⃣: Synchronous And Asynchronous in JavaScript.

    // Synchronous JavaScript Program.

    // const fun2 = () => {
    //     console.log(`Function 2️⃣ is called`);
    // }
    // const fun1 = () =>{
    //     console.log(`Function 1️⃣ is called`);
    //     fun2();
    //     console.log(`Function 1️⃣ is called`);
    // }
    // fun1();


    // Asynchronous JavaScript Program.

    // const fun2 = () => {
    //     setTimeout(()=>{
    //         console.log(`Function 2️⃣ is called`);
    //     },2000);
        
    // }
    // const fun1 = () =>{
    //     console.log(`Function 1️⃣ is called`);
    //     fun2();
    //     console.log(`Function 1️⃣ is called`);
    // }
    // fun1();

// 5️⃣: Hoisting in Javascript.

//   // We have a creation phase and execution phase.
//    // Hoisting in Javascript is a mechanism where variables and functions 
//    // declarations are moved to the top of their scope before the code executes.

//    // For example:
//    // we write:

//    // console.log(myName);
//    // var myName;
//    // myName = "Morshed";

//    // How it will be in output during creation phase.

//    // var myName = undefined;
//    // console.log(myName);
//    // myName = "Morshed";

//    // In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword instead of var.
//    // ( The other difference is the variables declared with let are local to the surrounding block, not the entire function.)

// 6️⃣: What is Scope Chain and Lexical Scoping in JavaScript?

// The scope chain is used to resolve the value of variable names in JS.
// scope chain in js lexically defined, which means that we can see what the scope chain will be by looking at the code.
// At the top, we have the global scope, which is the window Object in the browser.
// Lexical Scoping means Now, the inner function can get access to their parent functions variables but the vice-versa is not true. 

    // let a = "Hello guys. "; // global scope

    // const parent = () => {
    //     let b = "How are you? ";
    //     const child = () => {
    //         let c = "Hi I am fine.";
    //         console.log(a+b+c);
    //     }
    //     child();
    //     //console.log(a+b+c);// I can't use c
    // }
    // parent();

// 7️⃣: What is Closures in JavaScript?

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function's scope from an inner function.

// In JavaScript, closures are created every time a function is created, at function creation time.

        // const outerFunction = (a) => {
        //     let b = 10;
        //     const innerFunction = () => {
        //         let sum = a+b;
        //         console.log(`The sum of the two num is ${sum}`);
        //     }
        //     innerFunction();
        // }

        // outerFunction(5);

    // One more Example 👇

        // const outerFunction = (a) => {
        //     let b = 10;
        //     const innerFunction = () => {
        //         let sum = a+b;
        //         console.log(`The sum of the two num is ${sum}`);
        //     }
        //     return innerFunction;
        // }

        // let checkClousure = outerFunction(5);
        //checkClousure();// print: The sum of the two num is 15
        //console.log(checkClousure);// [Function: innerFunction]
        //console.dir(checkClousure); // web site console e dekte hobe.

// 8️⃣: Function Curring (We will see after Async JS section)
    
    //Type-1:

    // function sum (num1){
    //     console.log(num1);
    //     return function (num2){
    //         console.log(num1,num2);
    //         return function (num3){
    //             console.log(num1,num2,num3);
    //             console.log(num1+num2+num3);
    //         }
    //     }
    // }
    // sum(5)(3)(8);

    //Type-2:

    // function sum(num1){(num2)=>{
    //     (num3)=>{
    //             console.log(num1,num2,num3);
    //         }
    //     }
    // }
    // sum(5)(3)(8); 

    //Type-3:

    // const sum = (num1) => (num2) => (num3) => console.log(num1,num2,num3);
    // sum(5)(3)(8); 


// 9️⃣: CallBack Hell

    setTimeout(() => {
        console.log(` 1️⃣ work is done`);
        setTimeout(() => {
            console.log(` 2️⃣ work is done`);
            setTimeout(() => {
                console.log(` 3️⃣ work is done`);
                setTimeout(() => {
                    console.log(` 4️⃣ work is done`);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
