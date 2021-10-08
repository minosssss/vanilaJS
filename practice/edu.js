const a = 5;
const b = 2;
let myName = "nico";
// 'const' would never be update
// 'let' could be update
// 'var' never use that!!
console.log(a + b);
console.log(a * b);
console.log(a ^ b);
console.log('hello' + myName);

myName = "minO";

console.log("My Name is " + myName)


const player = {
    name : 'minO',
    points : 100,
    fat: false,

};

console.log(player);
console.log(player.name);
player.points = player.points + 30;
player.lastName = 'Lee';
console.log(player);


const player = {
    name : 'Minho',
    sayHello: function(otherPerson){
        console.log('hello! ' + otherPerson + "nice to meet you");
    }
};

console.log(player.name);
player.sayHello('Aruem');





const calculator = {
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function (a,b){
        console.log(a/b);
    },
    multi : function (a,b){
        console.log(a*b);
    },
    powerOf : function(a,b){
        console.log(a**b);
    }

};

calculator.add(2,1)
calculator.minus(7,9)
calculator.divide(6,2)
calculator.multi(2,3)
calculator.powerOf(5,5)

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function (a,b){
        return a/b;
    },
    multi : function (a,b){
        return a*b;
    },
    powerOf : function(a,b){
        return a**b;
    }

};

const plusResult = calculator.plus(2,3);

console.log(plusResult)