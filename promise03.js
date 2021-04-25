// console.log(Function.prototype===Object.__proto__);
// console.log(Object.prototype===Object.__proto__);
// console.log(Function.prototype===Function.__proto__);
// let a=new Promise((resolve,reject)=>{});

// const { resolve } = require("path");

// // console.log(a);
// let p=new Promise((resolve,reject)=>{
// console.log("11");
// reject("err");
// console.log("22");
// });
// console.log("33");
// p.catch((reject)=>{
// console.log(reject);
// })

// let a=Promise.resolve(b);
// console.log(a);
// let a =new Promise((resolve,reject)=>{
//     setTimeout(   ()=>{ resolve("yes")},1000)

// })
// let b=Promise.resolve("ok");
// let c=Promise.resolve("fine");
// let as=Promise.all([a,b,c]);
// let df=Promise.race([a,b,c]);
// console.log(as);
// console.log(df);
let a=new Promise((resolve,reject)=>{
    resolve("as");
})
// let c=a.then((v)=>{
//     console.log(v);
// })//then()方法在执行的时候是异步的，
// console.log(c);
// //先输出c,再输出v。
let aa=a.then((value)=>{
console.log(value);
return 123;
},(er)=>{console.warn(er)})
console.log(aa);