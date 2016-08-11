"use strict";

const { curry } = require('ramda');

const add=curry((base,a,b)=>parseInt(a,base)+parseInt(b,base));

const addBase2=add(2);

const addBase10=add(10);

const addBit=addBase2(1);

const addOne=addBase10(1);

console.log("4 = "+addBit(11));

console.log("12 = "+addOne(11));
