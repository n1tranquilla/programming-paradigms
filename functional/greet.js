"use strict";

const { compose, prepend, join, __ } = require('ramda');

const greet=compose(
    join(''),
    prepend('Hello '),
    prepend(__,'!')
);

console.log(greet("Nathan"));


