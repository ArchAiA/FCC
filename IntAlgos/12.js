//Solution: FCC Spinal Tap Case  


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins


  re1 = /\s+|_+/g;
  re2 = /([a-z])([A-Z])/g;


  newstring = str.replace(re2, '$1 $2').replace(/\s|_/gi, '-').toLowerCase();
  return newstring;
}

spinalCase('This Is Spinal Tap');
