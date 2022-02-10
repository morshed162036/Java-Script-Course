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

    
// 3️⃣ Destructuring in ES6 ?

    //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
    //or properties from objects, into distinct variables.

    // => Array Destructuring 🥇

    // const myBio = ['morshed', 'ahmed', 26];

    // let myFname = myBio[0];
    // let myLname = myBio[1];
    // let myage = myBio[2];
    

    // let [myFname, myLname, myage] = myBio;
    // console.log(myage);

    // we can add values too

    // let [myFname, myLname, myage, address = 'mirpur'] = myBio;
    // console.log(address);



    // => Object Destructuring 🥇

    // const  myBioData = {
    //     myFname : 'Morshed',
    //     myLname : 'Ahmed',
    //     age : 26
    // }
    // let age = myBioData.age;
    // console.log(age);

    //  let {myFname, myLname, myage} = myBioData;
    //  console.log(myage);

     // we can add values too

    // let {myFname, myLname, myage, address = 'mirpur'} = myBioData;
    // console.log(address);

// 4️⃣ Object Properties in ES6 ?

    // => we can now use Dynamic Properties.

    // let myName = "Morshed";
    // const myBio = {
    //    myName : "Hi there",
    //     [myName] : "Hi there",
    //     26 : "is my age"
    //     [20+6] : "is my age"
    // }
    // console.log(myBio); // return : { '26': 'is my age', Morshed: 'Hi there' }

    // => No need to write key and value, if both ase same.

    // Type-1;
    // let myName = 'morshed ahmed';
    // let myAge = 26;

    // const myBio = {
    //     myName : myName,
    //     myAge : myAge
    // }
    // console.log(myBio);

    // Type-2:
    // let myName = 'morshed ahmed';
    // let myAge = 26;

    // const myBio = {
    //     myName,
    //     myAge
    // }
    // console.log(myBio);

// 5️⃣ Spread Operator

    // const colors = ['red', 'green','blue'];

    // const colors = ['red', 'green','blue','white','black'];

    // 2nd time add one more color on top and tell we need to write it again on myColor array too.

    // const myFavColors = [ 'yellow', 'black', ...colors];
    // console.log(myFavColors);