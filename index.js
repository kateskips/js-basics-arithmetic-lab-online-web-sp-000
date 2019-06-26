/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

// Create a variable called multiply that will multiply var1 and var2 whose results will equal "62".
//Create a variable called random that will generate a random integer greater than 0.
//Create a variable called mod set to an equation whose remainder is equal to "4".
//Create a variable called max that will return "20" as the highest number in the set.

function scuberGreetingForFeet(x) {
  if (x <= 400) {
    return 'This one is on me!'
  } else if (x > 2000 && x <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (x > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}

