"use strict";

const { compose, concat, groupBy, prop, map, mergeAll, has, filter, values, complement } = require('ramda');

const names=[
    {id: 1, name:'Sally'},
    {id: 2, name:'Suzy'},
    {id: 3, name:'Phil'},
    {id: 4, name:'John'},
    {id: 5, name:'James'}
];

const phones=[
    {id: 4, phone:'+15061112223'},
    {id: 5, phone:'+15061112224'},
    {id: 6, phone:'+15061112225'},
    {id: 7, phone:'+15061112226'},
    {id: 8, phone:'+15061112227'}
];

//Scenario:
//Making a REST call to 2 different endpoints and combining the results
//into a single.

//Goal:
//To get a list of name and numbers. The phone number is optional,
//meaning we're allowed to have names and no numbers, but not allowed
//to have numbers without names

//Strategy:
//SQL-like LEFT JOIN between names and phones

const hasAName=has('name');
//const trace=(msg)=>(data)=>(console.log(msg,data),data);

const join=compose(
    filter(hasAName),       //keep the record IFF it has a 'name' property
    values,                 //drop the grouping
    map(mergeAll),          //for each grouping, merge the records together
    groupBy(prop('id')),    //group the list by the 'id' property
    concat(names)           //make the 'names' and 'phones' a single list
);

console.log(join(phones));