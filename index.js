let name={
    firstName:"Akshay",
    lastName:"Saini"
}

let printName=function(){
    console.log(this.firstName+" "+this.lastName);
}

let printMyName = printName.bind(name);
console.log(printMyName);
printMyName();