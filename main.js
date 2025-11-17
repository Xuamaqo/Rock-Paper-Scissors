const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const resultDiv = document.querySelector('#results');
const resetBtn = document.querySelector('#reset');

const choice = ['ROCK', 'PAPER', 'SCISSORS'];

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => playRound('ROCK'));
btnPaper.addEventListener('click', () => playRound('PAPER'));
btnScissors.addEventListener('click', () => playRound('SCISSORS'));

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  resultDiv.textContent = `Scores have been reset. You: ${playerScore}, Computer: ${computerScore}`;

  // Enable buttons again
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
});

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
};

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
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

  if (playerScore === 5 || computerScore === 5) {
    const finalResult =
      playerScore > computerScore
        ? 'Congratulations! You won the game!'
        : 'Sorry! The computer won the game.';

    resultDiv.textContent = `${finalResult} Final Scores You: ${playerScore}, Computer: ${computerScore}`;

    // Disable buttons
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  }
};
