// 1️⃣ create own MAP function.

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
let arr = [1, 2, 3].myMap((val) => val * 2);
//console.log(arr);

// 2️⃣ create string length count function

const getLength = (str) => {
  let count = 0;
  let i = 0;
  while (true) {
    if (typeof str[i] === "undefined") break;
    count++;
    i++;
  }
  return count;
};
//console.log(getLength("my name is Morshed"));

// 3️⃣ closer in JS
let x = 10;

function xl() {
  console.log(x);
}
//console.dir(xl);

// 4️⃣ object freeze & seal in JS

let obj1 = {
  name: "morshed",
  age: 27,
};
Object.freeze(obj1); //after use freeze we cant change or delete this object
obj1.name = "Ahmed";
//console.log(obj1);

let obj2 = {
  name: "morshed",
  age: 27,
};
Object.seal(obj2); //after use seal we cant delete this object, only update or chage value.
obj2.name = "Ahmed";
//console.log(obj2);

// 5️⃣ Non Primitive equlity check [Array,Object]

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
//console.log(arr1 == arr2); //return false every time.
//console.log(arr1 === arr2); //return false every time.
//return true only when there reference are same.
let arr3 = [1, 2, 3];
let arr4 = arr3;
//console.log(arr3 == arr4); //return true.
//console.log(arr3 === arr4); //return true.
// SAME as Object

// 6️⃣ Deep copy or Shallow copy I in JS
let deepObj = {
  name: ["Neeraj", "Ajay", "Himanshu", "Nitin"],
  places: ["Delhi", "Noida", "Gurgaon"],
  married: true,
};

let newObj = { ...deepObj }; //Object.assign   // Object.Create

newObj.places[0] = "Uttarakhand";
newObj.married = false;

//console.log(deepObj);

//console.log(newObj);

// 7️⃣ Conver Multi Array to flat array
function seven() {
  const arr5 = [1, 2, [3, 4, [1, 2], [5, 6, [7, 8, [9, 10]]]]];

  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  //console.log(arr5.flat(Infinity));
  //console.log(typeof arr5[2]);
  //Conver Multi Array to flat array but not using flat function

  const flatArray = (arr) => {
    const result = [];

    const flatFunction = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
          result.push(arr[i]);
        } else {
          flatFunction(arr[i]);
        }
      }
    };
    flatFunction(arr);
    return result;
  };
  console.log(flatArray(arr5));
}
//seven()

// 8️⃣ convert array to string and contat them

//console.log( [1]  + [2] ) ;  // + concat addition

// [1] ==> 1
// [2] ==> 2
// 1+2= 12

// 9️⃣ callback & higher order function use in JS
function nine() {
  const calculator = function (num1, num2, callback) {
    // this calculator function is a higher order function because it return another function.
    return callback(num1, num2);
  };

  const add = (num1, num2) => {
    return num1 + num2;
  };
  const sub = (num1, num2) => {
    return num1 - num2;
  };
  const mult = (num1, num2) => {
    return num1 * num2;
  };
  const div = (num1, num2) => {
    return num1 / num2;
  };

  let result = calculator(4, 2, add);
  //console.log(result);

  let result2 = calculator(4, 2, sub);
  //console.log(result2);

  let result3 = calculator(4, 2, mult);
  //console.log(result3);

  let result4 = calculator(4, 2, div);
  //console.log(result4);
}
//nine()

// 1️⃣0️⃣ Object De-structuring in JS

function ten() {
  //array index name changing,object key name change
  let x = () => {
    let arr = [1, 2, 3, 4, 5, 6];

    let [a, b, ...rest] = arr; //index name change & ...rest use for rest value

    console.log(a);

    console.log(rest);

    const obj = { name: "Morshed", age: 27 };

    const { name: profile_name } = obj;

    console.log(profile_name);
  };
  //x();
  //swap value using destructuring
  let swap = () => {
    let x = 10;
    let y = 20;
    [x, y] = [y, x];
    console.log(x, y);
  };
  swap();
}
//ten();

// 1️⃣1️⃣ how to fixed any array length and some all index..etc

function eleven() {
  //fixed array length
  let arr = [1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 9, 10];
  let fixedLength = (arr) => {
    arr.length = 3;
    console.log(arr);
  };
  //fixedLength(arr);

  //find sum,sub,mult,div etc an array
  let sumFind = (arr) => {
    let result = arr.reduce((x, y) => x + y);
    console.log(result);
  };
  //sumFind(arr);

  //remove duplicate value from array
  let removeDuplicate = (arr) => {
    let result = new Set(arr);
    console.log(result); //return after remove duplicate value but return as a object.
    console.log([result]); //return after remove duplicate value but return as a object inside array.
    console.log([...result]); // return array after remove duplicate value.
  };
  removeDuplicate(arr);
}
//eleven();

// 1️⃣2️⃣ coma operator

function twelve() {
  let x = 10;
  y = 20;
  x = (x++, ++y, x + y); //last value is what we print and before it we can do calculation as many as we need.
  console.log(x);
}
//twelve();

// 13) typeof, var, let, const, string, number

function thirteen() {
  let one = () => {
    (function () {
      var a = (b = 20);
      // it's executed like
      // b=20 // b not declare as var. so it globally declared.
      // var a=b // a declare as var in a function scope and we try to assing global value in it.so that it is un defined.
    })();
    console.log(typeof a); // undefined
    console.log(typeof b); // number
  };
  //one();
  //string and number add,concate qsn
  let two = () => {
    console.log(1 + 1); //2
    console.log("1" + "2" + "2"); //122
    console.log(1 + "2" + "2"); //122
    console.log(1 + +"2" + "2"); //32
    console.log(1 + +"2" + +"2"); //5
    console.log("A" - "B" + "2"); // NaN2
    console.log("A" - "B" + 2); // NaN
  };
  two();
}
//thirteen();
// sorting array using sort function.
let array = [1, 5, 12, 7, 3, 23, 45, 30];
console.log(array.sort()); // [1, 12, 23, 3, 30, 45,  5, 7]
console.log(
  array.sort((a, b) => {
    return a - b;
  })
); //must use return
// [1,  3,  5,  7, 12, 23, 30, 45]// asc order
console.log(
  array.sort((a, b) => {
    return b - a;
  })
); //must use return
// [45, 30, 23, 12, 7,  5,  3,  1]// dsc order

//hosting function
// https://www.youtube.com/watch?v=WkxIv0MJaQY&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=7
