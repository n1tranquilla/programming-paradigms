"use strict";

const { toUpper, map, filter, compose, gt, length, __ } = require('ramda');
const gt4=gt(__,4);

const names=["Sally","John","Bart","Joseph"];

const getLongNames= compose(
    filter(compose(gt4,length)),    //filter in names whose lengths are > 4
    map(toUpper)                    //each name goes to uppercase
);

console.log(getLongNames(names));


