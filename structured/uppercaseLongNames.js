"use strict";

const names=["Sally","John","Bart","Joseph"];
const longNames=[];
for (let i=0; i<names.length; i++){
    const name=names[i];
    if (name.length > 4){
        addName(caps(name));
    }
}

console.log(longNames);

function caps(str){
    return str.toUpperCase();
}

function addName(str){
    longNames.push(str)
}
