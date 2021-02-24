const fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// => "fiiiissshhhhhh";


function quadraticBiggestFish(fishes) {
  let longest = ''
  for(let i = 0; i < fishes.length; i++) {
    let fish = fishes[i];
    for(let j = 0; j < fishes.length; j++) {
      if(fishes[j].length > fish.length) {
        longest = fishes[j]
      }
    }
  }
  return longest;
}
// console.log(quadraticBiggestFish(fishes));

function nlognBiggestFish(fishes) {
  fishes.sort((a,b) => b.length - a.length)
  return fishes[0]
}
console.log(nlognBiggestFish(fishes));

function linearBiggestFish(fishes) {
  longest = ''
  for(let j = 0; j < fishes.length; j++) {
    if(fishes[j].length > longest.length) {
      longest = fishes[j]
    }
  }
  return longest
}
console.log(linearBiggestFish(fishes));

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
