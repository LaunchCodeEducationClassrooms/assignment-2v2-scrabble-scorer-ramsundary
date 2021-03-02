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

function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   let userWord = input.question("Let's play some scrabble! Enter a word: ");

   return userWord;
   
};

let simpleScore = function(word) {
  let score = 0;

  for (let i= 0; i < word.length; i++) {
    //simpleScore += `Points for '${word[i]}':` + 1 + '\n'
    score += 1;
  }
  return score;
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase();

  const vowelStructure = {
    1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','X','Z'],
    3: ['A','E','I','O','U','Y','W']
  }

  let score = 0;

  for (let i= 0; i < word.length; i++) {
	  for (const pointValue in vowelStructure) {
 
		 if (vowelStructure[pointValue].includes(word[i])) {
			//vowelBonusScore += `Points for '${word[i]}': ${pointValue}\n`
      score += Number(pointValue);
		 }
 
	  }    
  }
  return score;

};

let scrabbleScore = function(word){
  word = word.toUpperCase();
	let letterPoints = "";
  let score = 0;

  //newPointStructure = transform(oldPointStructure);

  if (transform(oldPointStructure))  {

    for (let i = 0; i < word.length; i++) {
  
      for (const item in newPointStructure) {
  
      if (item == word[i]) {
        score += newPointStructure[item];
      }

      }
    }
    return score;
  }

};

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
      wordScore = simpleScore(word);
    } else if (funInput == 1) {
      wordScore = vowelBonusScore(word);
    } else if (funInput == 2) {
      //wordScore = oldScrabbleScorer(word);
      wordScore = scrabbleScore(word);
    }
          

    return wordScore;
}

function transform(oldPointStructure) {
  let newStructure  = {};
  let pointStructure = {};

  for (let item in oldPointStructure){
    let letters = oldPointStructure[item];

    for (let i = 0; i < letters.length; i++) {
        newStructure[letters[i]] = Number(item);
    }
  }
  /*
  let keys = [], k, i;
    
  for (k in newStructure) {
    if (newStructure.hasOwnProperty(k)) {
    keys.push(k);
    }
  }

  keys.sort();

  for (i = 0; i < keys.length; i++) {
    k = keys[i];
    pointStructure[k] = Number(newStructure[k]);
  }


  return pointStructure; */
  //return newStructure;
  newPointStructure = newStructure;
  return true;
};

let newPointStructure = {};

function runProgram() {
  //newPointStructure = transform(oldPointStructure);
  //console.log(newPointStructure);
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

