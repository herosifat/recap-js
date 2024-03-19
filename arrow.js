// function math related
const dif =(x,y) => x-y;
const d =dif(10,5);
console.log(d)
const multiplay = (first,second,third) => first*second*third;

// object related
const getAge=(person)=>person.age;
const student ={name: 'johir', age:56};
const age =getAge(student);
console.log(age);

// array function related
const getThird = Number =>Number[3];
const third =getThird([3,2,3,23,2,3]);
console.log(third);
// more arrow
// doubleIt
const doubleIt = num => num*2;
const double =doubleIt(6);
console.log(double);

// divided related;
const dividedIt =nums =>nums/2;
const div =dividedIt(200);
console.log(div);