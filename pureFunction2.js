"use strict";

function toCamelCase(str) {
    return str.replace(/_(.)/g, function(match, g1) {
        return g1.toUpperCase();
    });
}

const person={
    first_name: "Elizabeth",
    last_name: "Jones"
};

const mapKey=(transform)=>function(agg,key){
    agg[transform(key)]=person[key];
    return agg;
};

const obj=Object.keys(person).reduce(mapKey(toCamelCase),{});

console.log(obj);

//mapKey is a pure function, because it modifies an object (agg)
//within the scope of its function. Combining this with the reduce
//function, mapKey is portable and testable.