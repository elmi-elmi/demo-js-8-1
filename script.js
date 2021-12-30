"use strict";
// console.log(me);
// console.log(job);
// console.log(year);
//
// var me = 'Jones';
// let job = 'teacher';
// const year = 1991;

// console.log('decl',addDecl(1,2));
// console.log('expr',addExpr(1,2));
// console.log('arrow',addArrow(1,2));
//
// function addDecl(a,b){
//     return a+b;
// }
//
// const addExpr = function(a,b){
//     return a + b;
// }
//
// const addArrow = (a, b)=> a+b;
//
// if(!numProducts){
//     deleteshoppingCart();
// }
//
// var numProducts = 10;
//
// function deleteshoppingCart(){
//     console.log('All products deleted!')
// }

// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(this);
//
// const calcAge = function(birthYear){
//     console.log(2021-birthYear);
//     console.log(this);
// }
//
// calcAge(1993)
//
// const calcAgeArrow = birthYear=>{
//     console.log(2021-birthYear);
//     console.log(this);
// }
//
// calcAgeArrow(1993)
//
// const jonas = {
//     year:1991,
//     calcAge:function(){
//         // console.log(this)
//         // console.log(this.year)
//         const self = this;
//         const isMillennial =  function (){
//             console.log(self)
//         };
//         isMillennial();
//
//     },
    // lastName:'elmi',
    // greet:()=>console.log(`hi ${this.lastName}`),
// }

// jonas.calcAge();

//
// jonas.calcAge();
//
//
// const matilda = {
//     year:2017,
// };
//
// //
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// var lastName = 'elll';
// const aaaa = 'hi';
// console.log(this)
// jonas.greet();

// let age = 30;
// let oldAge = age;
//
// age = 31;
//
// console.log(oldAge);
//
// const me = {
//     age:29,
//     name:'shahrokh'
// };
//
// const friend = me;
//
// me.age = 30;
//
// console.log(me)
// console.log(friend)
//

let lastName = 'elmi';
let oldLastName = lastName;

lastName = 'samani';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName:'Williams',
    age:27
}
const marriedJessica = Object.assign({}, jessica);

marriedJessica.lastName = 'Davis';
