// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  scrabbleScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 /*if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     }*/
 		 if (oldPointStructure[pointValue].includes(word[i])) {
			scrabbleScore += Number(pointValue);
		 }

	  }
	}
	//return letterPoints;
  return scrabbleScore;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function scorerFunction(word) {
  simpleScore = 0;

  for (let i= 0; i < word.length; i++) {
    //simpleScore += `Points for '${word[i]}':` + 1 + '\n'
    simpleScore += 1;
  }
  return simpleScore;
}

function vowelScore(word) {
  word = word.toUpperCase();

  const vowelStructure = {
    1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','X','Z'],
    3: ['A','E','I','O','U','Y','W']
  }

  vowelBonusScore = 0;

  for (let i= 0; i < word.length; i++) {
	  for (const pointValue in vowelStructure) {
 
		 if (vowelStructure[pointValue].includes(word[i])) {
			//vowelBonusScore += `Points for '${word[i]}': ${pointValue}\n`
      vowelBonusScore += Number(pointValue);
		 }
 
	  }    
  }
  return vowelBonusScore;

}

function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   let userWord = input.question("Let's play some scrabble! Enter a word: ");

   return userWord;
   
};

let simpleScore;

let vowelBonusScore;

let scrabbleScore;

//const scoringAlgorithms = []; 
const scoringAlgorithms = [{name: 'Simple Score', 
                            description: 'Each letter is worth 1 point', 
                            scoringFunction: simpleScore
                            },
                            {name: 'Bonus Vowels', 
                            description: 'Vowels are 3 pts, consonants are 1 pt', 
                            scoringFunction: vowelBonusScore
                            },
                            {name: 'Scrabble', 
                            description: 'The traditional scoring algorithm', 
                            scoringFunction: scrabbleScore
                            }
]; 

function scorerPrompt(word) {
    let wordScore = 0
    console.log('Which scoring algorithm would you like to use?\n');
   
    console.log('0 - Simple: One point per character');
    console.log('1 - Vowel Bonus: Vowels are worth 3 points');
    console.log('2 - Scrabble: Uses scrabble point system');
    let funInput = Number(input.question('Enter 0, 1, or 2: '));

    while ( funInput < 0 || funInput > 2) {
      funInput = Number(input.question('Invalid input... Re enter 0, 1, or 2: '));
    }

    if (funInput == 0) {
      wordScore = scorerFunction(word);
    } else if (funInput == 1) {
      wordScore = vowelScore(word);
    } else if (funInput == 2) {
      //wordScore = oldScrabbleScorer(word);
      wordScore = newScrabbleScore(word);
    }
          

    return wordScore;
}

function transform(oldPointStructure) {};

let newPointStructure = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  ' ': 0
};

function newScrabbleScore(word){
  word = word.toLowerCase();
	let letterPoints = "";
  scrabbleScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const item in newPointStructure) {
 
 		 if (item == word[i]) {
			scrabbleScore += newPointStructure[item];
		 }

	  }
	}
	//return letterPoints;
  return scrabbleScore;

}

function runProgram() {
  let userWord = initialPrompt();
  let score = scorerPrompt(userWord);

  console.log('Score for '+ "'" + userWord + "' : " + score);
      
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

