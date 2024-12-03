
console.log("========= Q.1 WAP To List Properties of JavaScript Object Property ======");

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

var Properties = Object.keys(student);
console.log(Properties);

console.log("========= Q.2 WAP To Delete 'Roll No' JavaScript Object 'Before & After Print Deleting Property' ======");

var student = {
    name : "Ravi Sharma",
    sclass : "VI",
    rollno : 101
};
console.log("Before deleting rollno:");
console.log(student);
delete student.rollno;
console.log("After deleting rollno:");
console.log(student);

console.log("========= Q.3 WAP To get Length Of JavaScript Object Property ======");

var car={
    make : "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
};
function getObjectLength(Obj) {
    return Object.keys(Obj).length;
};
console.log("Length of the car object: " + getObjectLength(car));

console.log("========= Q.4 WAP To get Dynamic Access JavaScript Object Property ======");

var person ={
    name : "John Doe",
    age : 30,
    profession : "Developer"
};
var PropertyName = "name";
console.log(person[PropertyName]);

var PropertyName = "age";
console.log(person[PropertyName]);

var PropertyName = "profession";
console.log(person[PropertyName]);

console.log("========= Q.5 WAP To Modify Object Property in array of object javaScript ======");

var employees = [
    {
        id: 1,
        name: "John Doe",
        position: "Devloper",
        salary: 50000
    },
];
function updateEmployeeSalary(id, newSalary) {
    for (var index = 0; index < employees.length; index++) {
        if (employees[index].id == id) {
            employees[index].salary = newSalary;
            return;
        }
    }
}
updateEmployeeSalary(1,60000);
console.table(employees);

console.log("========= Q.6 WAP To get last item of javaScript Object ======");
console.log("========== [1] Using Object.keys() Method =========");

var car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};
// Using Object.keys()
var keys = Object.keys(car);
var lastKey = keys[keys.length-1];
console.log("Last Property using keys:", lastKey, car[lastKey]);

console.log("========== [2] Using Object.entries() Method =========");

var car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};

// Using Object.entries()
var entries = Object.entries(car);
var lastEntry = entries[entries.length-1];
console.log("Last property using entries:", lastEntry[0], lastEntry[1]);

console.log("========= Q.7 WAP To Include & Check an Object in Array Against property of Object ======");

var student =[
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Smith", grade: "B"},
    { id: 3, name: "Samule Green", grade: "C"}
];
function CheckStudentExists(id) {
    return student.filter(student => student.id == id).length >0;
};
console.log(CheckStudentExists(2));
console.log(CheckStudentExists(4));

console.log("========= Q.8 WAP To Add An Object an Array in JavaScript ======");

var fruits = ['apple','banana','orange'];

var newFruit = {
    name: 'grape',
    color: 'purple'
};
fruits.push(newFruit);
console.log(fruits);
