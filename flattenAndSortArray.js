"use strict";

function flattenAndSort(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++){
    newArr = newArr.concat(array[i])
  }
  return newArr.filter(x => typeof x === 'number').sort( (a, b) => a - b);
}