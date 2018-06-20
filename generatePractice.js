'use strict'

function sort(input) {
    return input.sort((a,b) => a-b); 
}

function search(input, target){
    for(var i = 0; i < input.length; i++){
        if(input[i] == target){
            return i;
        }
    }
    return -1;
}

function randomInteger(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + a;
}

function createArray(arr){
    var target = randomInteger(10, -10);
    var input = Array.from({length: arr}, i => randomInteger(10, -10));
    var output = search(input, target);
    var item = {input, target, output};
    return item;
}

function generate(testLengthArray){
    var i = 0;
    var arr = Array.from({length: testLengthArray.length},item => createArray(testLengthArray[i++]));
    return arr;
}

module.exports = generate
