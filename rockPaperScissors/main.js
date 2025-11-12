const choice = ['ROCK', 'PAPER', 'SCISSORS'];

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
};

const getHumanChoice = () => {
  const humanChoice = prompt(
    'Choice between: Rock, Paper Or Scissors'
  ).toUpperCase();
  return humanChoice;
};

// ! Making the game last 5 round. Re adding stuff in this function and moving around stuff.

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    // Convert to uppercase just to be safe
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
      (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
      playerScore++;
      console.log(
        `You win! ${humanChoice} beats ${computerChoice}. You: ${playerScore}, Computer: ${computerScore}`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${computerChoice} beats ${humanChoice}. You: ${playerScore}, Computer: ${computerScore}`
      );
    }
  };

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (playerScore > computerScore) {
    console.log(
      `You won the game! You: ${playerScore}, Computer: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Computer won the game! You: ${playerScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `The game is a tie! You: ${playerScore}, Computer: ${computerScore}`
    );
  }
};
playGame();
