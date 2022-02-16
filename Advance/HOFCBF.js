const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return Math.abs(a-b);
}
const mult = (a,b) =>{
    return a*b;
}
const div = (a,b) =>{
    return a/b;
}
// all the operator is callback function.

const calculator = (num1,num2,operator)=>{ // Calculator is Higher order function.
    return operator(num1,num2);
}
console.log(calculator(10,20,add));
console.log(calculator(10,20,sub));