const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const resultDiv = document.querySelector('#results');

const choice = ['ROCK', 'PAPER', 'SCISSORS'];

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => playRound('ROCK'));
btnPaper.addEventListener('click', () => playRound('PAPER'));
btnScissors.addEventListener('click', () => playRound('SCISSORS'));

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
  };

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a tie!, You: ${playerScore}, Computer: ${computerScore}`;
  } else if (
    (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
  ) {
    playerScore++;
    resultDiv.textContent = `You win! You: ${playerScore}, Computer: ${computerScore}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! You: ${playerScore}, Computer: ${computerScore}`;
  }
};
