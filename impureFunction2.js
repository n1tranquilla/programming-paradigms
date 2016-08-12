"use strict";

function toCamelCase(str) {
    return str.replace(/_(.)/g, function(match, g1) {
        return g1.toUpperCase();
    });
}

const obj={};

const person={
    first_name: "Elizabeth",
    last_name: "Jones"
};

const mapKey=(transform)=>function(key){
    obj[transform(key)]=person[key];
    return obj;
};

Object.keys(person).forEach(mapKey(toCamelCase));

console.log(obj);


//mapKey is an impure function because it modifies
//an object outside the scope of its function. As a
//consequence, is not portable or testable.

