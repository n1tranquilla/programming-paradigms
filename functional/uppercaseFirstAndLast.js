"use strict";

const { compose, last, toUpper, split, lensIndex, over, reverse, join } = require('ramda');

const sentence="Last returns the last element of the given list or string.";

const firstWordToUpper=compose(
    join(" "),                      //join back into sentence again
    over(lensIndex(0),toUpper),     //uppercase the first element in the array
    split(" ")                      //split into array based on spaces
);

const lastWordToUpper=compose(
    join(" "),                  //join back into sentence again
    reverse,                    //reverse the array
    over(lensIndex(0),toUpper), //uppercase the "last" element in the sentence
    reverse,                    //reverse the array
    split(" ")                  //split into array based on spaces
);

//1.
//Compose based on meaningful groupings of functions
let firstAndLastToUpper=compose(
    firstWordToUpper,               //uppercase first word
    lastWordToUpper                 //uppercase last word
);

console.log(firstAndLastToUpper(sentence));

//2.
//Compose in a more efficient manner
firstAndLastToUpper=compose(
    join(" "),
    reverse,
    over(lensIndex(0),toUpper),
    reverse,
    over(lensIndex(0),toUpper),
    split(" ")
);

console.log(firstAndLastToUpper(sentence));