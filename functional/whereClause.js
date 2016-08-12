"use strict";

const { compose, either, equals, head, ifElse, join, over,
    lensIndex, map, curry, identity, concat, toPairs } = require('ramda');

//Goal: To build a semi-complex where clause from params
//
//Strategy: Do transformation on the params object to build out 
//db field name while also templating out parameter. 

const isDateParam=compose(
    either(equals('loadDate'),equals('updateDate')),
    head
);

const wrap = ifElse(
    isDateParam,                                    //if it's a date
    over(lensIndex(0),(str)=>`trunc( ${str} )`),    //then wrap in trunc statement
    identity                                        //else just return the str
);

const copyOver=curry((fromIndex,toIndex,pair)=>(pair[toIndex]=pair[fromIndex],pair));

const toWhereClause=compose(
    concat('WHERE '),       //prepend the whole WHERE clause with 'WHERE'
    join(' AND '),          //join each of the pairs with AND
    map(join(' = :')),      //for each pair, join with equals statement
    map(wrap),              //for each pair, conditionally wrap the first element in a 'trunc' statement
    map(copyOver(0,1)),     //for each pair, copy the first element to the second
    toPairs                 //convert the params to pairs => [['id', 1], ...]
);

const params={
    id:1,
    name:'John',
    updateDate:Date.now()
};
console.log(toWhereClause(params));
