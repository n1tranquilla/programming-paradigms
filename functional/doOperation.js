"use strict";

const { curry, add, subtract, multiply, divide } = require('ramda');

//This functions tells us we know the values
//of a and b before we know how to operate on them.
const doOp=curry((a,b,op)=>op(a,b));

//Represent first REST call
const tasks=[
    {id:1,a:1,b:2},
    {id:2,a:3,b:2},
    {id:3,a:2,b:2},
    {id:4,a:4,b:2}
];

//Represents second REST call
const operations=[
    {id: 1, op:add},
    {id: 2, op:subtract},
    {id: 3, op:multiply},
    {id: 4, op:divide}
];

const storedOps={};

//1.
//Simulating first REST call to get tasks... we want
//to store the values, but we don't yet know how to operate of them.
setTimeout(function(){
    tasks.forEach(function(task){
        storedOps[task.id]=doOp(task.a,task.b);
    });
},1000);

//2.
//Simulating second REST call to get operations... we now
//know what operator we want to use on the stored values
setTimeout(function(){
    operations.forEach(function(operation){
        console.log(storedOps[operation.id](operation.op));
    });
},2000);
