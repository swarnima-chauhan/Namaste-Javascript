const p1=new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("P1 success"),3000);
    setTimeout(()=>reject("P1 fails"),3000);
})

const p2=new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("P2 success"),1000);
    setTimeout(()=>reject("P2 fails"),1000);
})

const p3=new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("P3 success"),2000);
    setTimeout(()=>reject("P3 fails"),2000);
})

Promise.any([p1,p2,p3])
.then(res=>console.log(res))
.catch(err=>{
    console.error(err);
    console.log(err.errors);
});