var chocolateBars = [
  "snickers",
  "hundred grand", 
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(a, element){
  return [element, ...a];
}

function destructivelyAddElementToBeginningOfArray(a, element){
  a.unshift(element);
  return a;
}

function addElementToEndOfArray(a, element){
  return [...a, element];
}

function destructivelyAddElementToEndOfArray(a, element){
  a.push(element);
  return a;
}


