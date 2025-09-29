let user = {};
console.log(user);
console.log(typeof user);

let user1 = {
    firstName:'Rahul',
    lastName:'Sharma',
    age:25,
    hobbies:['Dancing', 'Singing', 'panting'],
    fullName:function(){
        return this.firstName+ " "+this.lastName;
    }
};
console.log(user1);

console.log(user1.firstName+" "+user1.lastName);

console.log(user1['firstName']);

console.log(user1.hobbies);

console.log(user1.fullName);

//for..In
for (let i in user1){
    console.log(user1[i]);
}

for(let x in user1.hobbies){
    console.log(user1.hobbies[x]);
}

//Objects
const person = {
    firstName:'Rahul',
    lastName:'Sharma',
    age:25,
    greet:function(){
        console.log("Hello, "+this.firstName); //this refers to the object calling the greet function
    }
};
person.greet();

//Object Constructor
const person1 = new Object();
person1.firstName = 'Yogee';
person1.lastName = 'KP';
person1.age = 25;
person1.greet1 = function(){
    console.log("Hi, "+this.firstName);
};
person1.greet1();

//Class
class person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet2(){
        console.log("Hello, "+this.firstName);
    }
}
const user2 = new person2("john", "doe", 25);
console.log(user2);

//Class Inheritance
class Employee extends person2{
    constructor(firstName, lastName, age, jobTitle){
        super(firstName, lastName, age);
        this.jobTitle = jobTitle;
    }
    describe(){
        console.log('${this.firstName} is a ${this.jobTitle}');
    }
}
const jane = new Employee("jane", "Doe", 28, "Software Engineering");
jane.describe();

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const mycar = new car("Toyota", "corolla", 2025);
console.log(mycar);

//Adding Methods to Constructor
function car1 (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

}
car1.prototype.start= function(){
    console.log('${this.make} ${this.model} is starting.');
};
const mycar1 = new car1("Maruthi", "Year", 2024);
mycar1.start();

class bus{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log('${this.make} ${this.model} is starting.');
    }
}
const mybus = new bus("Tata", "Bharat", 2025);
mybus.start();

//object
let obj = {
    firstName: "Script",
    lastName:"Kiddi",
    work: ()=>{
        return "Make info tec videos"
    },
    typeofvideos: new Array('HTML', 'CSS', 'Js'),
    cybersecurity: {
        videos:['etical hacking', 'course', 'visiting'],
        courses: "Cyber security in kannada"
    }
};
console.log(obj.firstName);
console.log(obj.work());
console.log(obj.typeofvideos);
console.log(obj.cybersecurity.videos);


