const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const resetBtn = document.getElementById('reset');

const choices = ['ROCK', 'PAPER', 'SCISSORS'];

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
const maxScore = 5;

const getComputerChoice = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const playRound = (humanSelection) => {
  if (
    roundsPlayed >= maxRounds ||
    playerScore >= maxScore ||
    computerScore >= maxScore
  )
    return;

  const computerSelection = getComputerChoice();
  roundsPlayed++;

  if (humanSelection === computerSelection) {
    resultsDiv.textContent = `Round ${roundsPlayed}: It's a tie! You both chose ${humanSelection}.`;
  } else if (
    (humanSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (humanSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (humanSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    playerScore++;
    resultsDiv.textContent = `Round ${roundsPlayed}: You win! ${humanSelection} beats ${computerSelection}. Score: You ${playerScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `Round ${roundsPlayed}: You lose! ${computerSelection} beats ${humanSelection}. Score: You ${playerScore} - Computer ${computerScore}`;
  }

  if (
    roundsPlayed === maxRounds ||
    playerScore === maxScore ||
    computerScore === maxScore
  ) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (playerScore > computerScore) {
      resultsDiv.textContent += `\nGame over! You won the game! 🎉`;
    } else if (computerScore > playerScore) {
      resultsDiv.textContent += `\nGame over! You lost the game! 😢`;
    } else {
      resultsDiv.textContent += `\nGame over! It's a tie! 🤝`;
    }
  }
};

rockBtn.addEventListener('click', () => playRound('ROCK'));
paperBtn.addEventListener('click', () => playRound('PAPER'));
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  resultsDiv.textContent = '';
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
});
