var chocolateBars = [
  "snickers",
  "hundred grand", 
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(a, element){
  return [element, ...a];
}

destructivelyAddElementToBeginningOfArray(a, element){
  return a.unshift(element);
}