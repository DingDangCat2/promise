let btn=document.getElementsByClassName('a');
btn[0].addEventListener('click',function(){
    let p=new Promise((resolve,reject)=>{
        let n=Math.floor(Math.random()*99+1);
        if(n<30){
            return resolve(n);
        }else{
            return reject(n);
        }
        })
        console.log(p);
        p.then((n)=>{
    n++;
    console.log(n);
        },
        (n)=>{
        alert("失败号码："+n);
        })
})

