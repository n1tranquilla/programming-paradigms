"use strict";

const names=["Sally","John","Bart","Joseph"];
const moreThan=(length)=>(string)=>string.length > length;
const toUpper=(str)=>str.toUpperCase();

const longNames=names
    .map(toUpper)
    .filter(moreThan(4));

console.log(longNames);

