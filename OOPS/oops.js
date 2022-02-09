// 👉 Object oriented JavaSctipt..


// 1️⃣ What is Object Literal?
// Object literal is simply a key:value pair data structure.
// Storing variables and functions together in one container, we can refer this as an Objects.

// 😮 How to create an Object?

// 1st Way:


    // let bioData = {
    //     myName : "morshed" ,
    //     myAge : 25 , 
    //     getData : function (){
    //         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //     }
    // }

    //bioData.getData();
    //console.log(bioData.myAge);


// 2nd Way:


// No need to write functions as well after es6

    // let bioData = {
    //     myName : "morshed" ,
    //     myAge : 25 , 
    //     getData (){
    //         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //     }
    // }

    //bioData.getData();
    //console.log(bioData.myAge);
 
// 3rd Way:
// 😮 What if we want object as a value inside an Object.

    // let bioData = {
    //     myName : {
    //         firstName : "morshed",
    //         lastName : "Ahmed"
    //     } ,
    //     myAge : 25 , 
    //     getData (){
    //         console.log(`My name is ${bioData.myName.firstName} and my age is ${bioData.myAge}`);
    //     }
    // }
    //bioData.getData();
    //console.log(bioData.myName.lastName);




// 2️⃣ What is this Object ?

// The definition of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.

    // for example - 1:
    // console.log(this);
    // console.log(this.alert("Windows"));

    // it refers to the current context and that is windows global object.

    // for example - 2:
    // function myNames(){
    //     console.log(this);// it refers to the current context and that is windows global object.
    // }
    // myNames();

    // for example - 3:

    // var names = "morshed";
    // function myName(){
    //     console.log(this.names);// windows
    // }
    // myName();

    // for example - 4:
    //  const obj = {
    //      myAge : 26,
    //      myName() {
    //          console.log(this.myAge);// current object
    //      }
    //  }
    //  obj.myName();

    // for example - 5:
    // This object will not work with fat arrow function.
    //  const obj = {
    //      myAge : 26,
    //      myName : ()=> {
    //          console.log(this);// windows
    //      }
    //  }
    //  obj.myName();

    