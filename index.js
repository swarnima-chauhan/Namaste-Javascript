const arr =[5,1,3,2,6];

function double(i){
    return 2*i;
}

function triple(i){
    return 3*i;
}

function binary(i){
    return (i>>>0).toString(2);
}
/*
console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));
*/

function greaterthanfour(i){
    if(i>=4)
        return i;
}

console.log(arr.map(greaterthanfour));
console.log(arr);
console.log(arr.filter(greaterthanfour));
console.log(arr);

const users=[
    {fName:"akshay", age:26},
    {fName:"donald", age:75},
    {fName:"elon", age:50},
    {fName:"deepika", age:26}
];

const output=users.reduce(function(obj,user){
    if(user.age<30)
        obj.push(user.fName);
    return obj;
},[]);
console.log(output);

