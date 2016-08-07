

Solution

function whatIsInAName(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  addToList = false;

  for(var i=0; i<nameList.length; i++) {
    for(var name in targetList) {
      if(nameList[i].hasOwnProperty(name)  && nameList[i][name] === targetList[name]) {
        addToList = true;
      } else {
        addToList = false;
      }
    }
    if(addToList === true) {arr.push(nameList[i]);}
  }
  return arr;
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });





























Attempt #5 ??????

function whatIsInAName(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  targetKeys = [];
  targetKeys = Object.keys(targetList);
  FinalObj = Object.create(nameList);
  addToList = false;


  for(name in targetList) {

    for(i = 0; i < nameList.length; i++) {

      if(nameList[i].hasOwnProperty(name)) {



      if(nameList[i][name] === targetList[name]) {
        addToList = true;
      }  else {
        addToList = false;
      }



    if(addToList === true) {arr.push(nameList[i]);}

    }
  }





  return arr;

  // Only change code above this line
}



whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });























Attempt #4 This works, but the return is supposed to return only those objects that have all of the properties in the target values equal
function whatIsInAName(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  targetKeys = [];
  targetKeys = Object.keys(targetList);
  FinalObj = Object.create(nameList);

  for(var i = 0; i < targetKeys.length; i++) {
    for(var j=0; j < Object.keys(nameList).length; j++) {
        if(targetList[targetKeys[i]] === nameList[j][targetKeys[0]]) {
          arr.push(nameList[j]);
        }
    }
  }

  return arr;

  // Only change code above this line
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




















Attempt #3 Close (not clean, but close)

function whatIsInAName(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  targetKeys = [];
  targetKeys = Object.keys(targetList);
  FinalObj = Object.create(nameList);

  for(var i = 0; i < targetKeys.length; i++) {
    for(var j=0; j < Object.keys(nameList).length; j++) {
        if(targetList[targetKeys[i]] === nameList[j][targetKeys[0]]) {
          arr.push(nameList[j]);
        }
    }
  }

  return arr;

  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



























Attempt #1
function whereAreYou(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  targetKeys = [];
  targetKeys = Object.keys(targetList);
  FinalObj = Object.create(nameList);

  for(var i = 0; i < targetKeys.length; i++) {
    for(var j=0; j < Object.keys(nameList); j++) {
        if(targetList[i] === nameList[j]) {
          FinalObj.push(nameList[j]);
        }
    }
  }

  return FinalObj;

  // Only change code above this line
}


whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




Attempt #2


function whereAreYou(collection, source) {
  // What's in a name?
  arr = [];
  // Only change code below this line
  nameList = Object.assign(collection);
  targetList = Object.assign(source);
  targetKeys = [];
  targetKeys = Object.keys(targetList);
  FinalObj = Object.create(nameList);

  for(var i = 0; i < targetKeys.length; i++) {
    for(var j=0; j < Object.keys(nameList).length; j++) {
        if(targetList[targetKeys[i]] === nameList[j][targetKeys[0]]) {
          arr.push(nameList[j]);
        }
    }
  }

  return arr;

  // Only change code above this line
}


whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
