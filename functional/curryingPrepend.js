"use strict";

const { curry } = require('ramda');

const prepend=curry((prependStr,targetStr)=>prependStr+targetStr);

const prefixHello=prepend("Hello, ");

console.log(prefixHello("Nathan"));
