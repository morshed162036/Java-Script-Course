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

