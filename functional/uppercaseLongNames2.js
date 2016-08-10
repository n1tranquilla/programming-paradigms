"use strict";

const { toUpper, map, filter, compose, gt, __, where } = require('ramda');
const gt4=gt(__,4);

const names=["Sally","John","Bart","Joseph"];

const getLongNames= compose(
    filter(where({length: gt(__,4)})),  //filter in names whose lengths are > 4
    map(toUpper)                        //each name goes to uppercase
);

console.log(getLongNames(names));


