let color="blue";
const height=160;
let likepizzaOrNot=true;
console.log(color,height, likepizzaOrNot);


function nam(name){
    console.log("hello "+name);

}

nam("kavya");

function sum(a,b)
{
    return a+b;
}

let a=sum("4","5");
console.log(a);

let b=sum(4,5);
console.log(b);

function canVote(age)
{
    if (age>18)
    {
        return true;
    }
    else{
        return false;
    }
}

let c=canVote(19);
if (c==true){
    console.log("he/she can vote")
}
else{
    console.log("he/she cant vote")
}


function oddOrEven(num)
{
    if (num%2==0)
    {
        return "even";
    }
    else{
        return "odd";
    }
}

let d=oddOrEven(811);
if (d=="even")
{
    console.log("the given number is even");
}
else{
        console.log("the given number is odd");
}


function sum(number)
{
    let sum=0;
    for(let i=0;i<=number;i++)
    {
        sum+=i;
    }
    console.log(sum);
}

sum(4);

function deets(user)
{
    console.log("hello "+user.name+" oh your age is "+user.age);
}

let user1={
    name:"kavya",
    age:21,
    occuapation:"software Engineer"

}

deets(user1);

function deetails(user)
{
    let g;
    if (user.gender=="F")
    {
        g="Ms";
    }
    else {
        g="Mr";
    }
    let canVote;
    if(user.age>18)
    {
        canVote="you can vote";
    }
    else{
        canVote="you cant vote";
    }
    console.log("hello "+g+ " " +user.name+" "+ canVote);
}

let user2={
    name:"kavya",
    age:21,
    gender:"F"

}

deetails(user2);

let array=["hello",8,true];
console.log(array[0]);
console.log(array.length);


function onlyEven(arr1){
    let arr2=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2==0)
        {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

let k=onlyEven([1,2,3,4,5,6]);
console.log(k);


function userArr(user)
{
    let names=[];
for(let i=0;i<user.length;i++)
{
    if(user[i].age>18)
    {
        names.push(user[i]);
    }
}
return names;
}

const userss = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
},
{
    name: "Aman",
    age: 21
}
];

let m=userArr(users);
console.log(m);

function userArra(user)
{
    let names=[];
for(let i=0;i<user.length;i++)
{
    if(user[i].age>18 && user[i].gender=="M")
    {
        names.push(user[i]);
    }
}
return names;
}

const users = [{
    name: "Harkirat",
    age: 21,
    gender:"M"
}, {
    name: "raman",
    age: 22,
    gender:"F"
},
{
    name: "Aman",
    age: 21,
    gender:'M'
}
];

let m=userArra(users);
console.log(m);

 