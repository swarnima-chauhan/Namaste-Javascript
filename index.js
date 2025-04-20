const student={
    name:"swarnima",
    printName:function(){
        console.log(this.name);
    }
}

const student2={
    name:"akshay"
}


student.printName.call(student2);
student.printName.apply(student2);
let students= student.printName.bind(student2);
console.log(students);
students();