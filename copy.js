//重写promise;

function Promise(excute){//excute是一个函数，相当于一个形参。
    this.State="pending";
    this.Result='';
    this.callback={};
    let self_this=this;
    function resolve(data){
        if(self_this.State!=='pending'){return;}//判断的原因是promise的状态只能由pending-resolve或者pending-reject.在实例化对象中就只能改变一次状态！
self_this.State="resolve";
self_this.Result=data;
self_this.callback.resolved(data);
    }
    function reject(err){
        if(self_this.State!=='pending')return;
        self_this.State="reject";
        self_this.Result=err; 
        if(self_this.callback)
        self_this.callback.rejected(err);
    }
    try{
    excute(resolve,reject);//执行器，同步调用。excute（）调用存在的作用就是使得resolve(),reject在实例化的对象中能够使用。
    }catch(e){
        reject(e);
    }//使用try-catch的原因是因为，在实例化对象中，throw一个错误应该是返回一个失败的promise状态，而不是停止代码执行。

}

Promise.prototype.then=function(resolved,rejected){//此时的resolved,rejected只是一个变量的作用，代表的是调用时的两个函数。

    if(this.State=='resolve'){
        resolved(this.Result);}else{
        if(this.State=="reject"){rejected(this.Result)}else{
            if(this.State=='pending')
{

    this.callback={
    resolved:resolved,
    rejected:rejected
}}
        //当状态的改变延迟之后呢？，实例化的对象在还没有状态发生变化的时候就调用了then()方法，此时this状态是初始的pending。
    }}//当实例化的对象调用then（）方法时，this指向的是这个实例化的promise对象。
}

let p=new Promise((resolve,reject)=>{//实例化的Promise中的函数是实参，只要实例化对象中定义了这个excute,则调用。
// resolve('yes');
// throw "err";
setTimeout(()=>{resolve('ok')},1000)//状态先是pending，then()方法设置callback,1秒后，实例化对象状态改变，调用resolve（）或者reject()方法。

});
p.then(value=>{
    console.log(value)},
    err=>{
        console.log(err)
    
})

 console.log(p);
