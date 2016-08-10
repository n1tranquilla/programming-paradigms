"use strict";

const names=["Sally","John","Bart","Joseph"];
const longNames=[];
let i=0
longNames[i++]=names[0].toUpperCase();
longNames[i++]=names[3].toUpperCase();

console.log(longNames);

function caps(str){
    return str.toUpperCase();
}
