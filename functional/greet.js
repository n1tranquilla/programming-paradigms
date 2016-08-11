"use strict";

const { compose } = require('ramda');

const prepend=(str)=>(target)=>str+target;
const append=(str)=>(target)=>target+str;

const f=append(' How are you doing?');
const g=append('!');
const h=prepend('Hello, ');

const greet=compose(g,h);
console.log(greet('Nathan'));
//Hello, Nathan!

const askQuestion=compose(f,g);
console.log(askQuestion('Nathan'));
//Nathan! How are you doing?

//We can compose our sentence a few different ways:

//1.
// compose( f , compose(g,h)  )
let bePolite=compose(f, greet);
console.log(bePolite('Nathan'));
//Hello, Nathan! How are you doing?

//2.
// compose( compose(f,g), h )
bePolite=compose(askQuestion,h);
console.log(bePolite('Nathan'));
//Hello, Nathan! How are you doing?

// because of associativity
// compose( f , compose(g,h) ) === compose( compose(f,g), h )




