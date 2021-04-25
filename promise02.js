const fs=require('fs');
const http=require('http');
let p =new Promise((resolve,reject)=>{
    fs.readFile('./promise.txt',function(err,data){
        if(err){return reject(err);;}else{
        return resolve(data);
        }
    });
})
p.then((a)=>{
    console.log(a)
},(b)=>{console.log(b)})

const util=require('util');
let as=util.promisify(fs.readFile);
as('./promie.txt').then((value)=>{console.log(value.toString())},(err)=>{console.log("ersadar")})