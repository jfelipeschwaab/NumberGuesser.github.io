let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
  return Math.floor(Math.random()*10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess){
  const humanDifference = Math.abs(humanGuess - targetGuess);
  const computerDifference = Math.abs(computerGuess - targetGuess);
  return humanDifference <= computerDifference;
}

const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

