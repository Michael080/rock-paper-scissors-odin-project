const winConditions = {
  'scissors': ['paper', 'lizard'],
  'paper': ['rock', 'spock'],
  'rock': ['lizard', 'scissors'],
  'lizard': ['spock', 'paper'],
  'spock': ['scissors', 'rock']
}

function getRandom() {
  return Math.floor(Math.random() * 5);
}

function getComputerChoice() {
  return weapons[getRandom()];
}

// prompt user for weapon selection
function getHumanChoice() {
  let weapon = prompt('Select your weapon');
  weapon = weapon.toLowerCase();
  return weapon;
}

function Player(name) {
  this.name = name;
  this.choice = getHumanChoice();
  this.score = 0;
}

let computer = {
  choice: getComputerChoice(),
  score: 0
}

computer.choice = getComputerChoice();

let human = new Player('human');

function playGame() {

  function playRound(computerChoice, humanChoice) {
    if (winConditions[humanChoice].includes(computerChoice)) {
      // human score condition
      return human.score++;
    }

    if (winConditions[computerChoice].includes(humanChoice)) {
      //computer win condition
      return computer.score++;
    }
  }

  let score = [computer.score, human.score];

  while (!score.includes(5)) {
    playRound(computer.choice, human.choice);
    score = [human.score, computer.score];
    computer.choice = getComputerChoice();
    human.choice = getHumanChoice();
  }

  human.score > computer.score ? console.log('Humanity triumphs!') : console.log('The machines shall rule forever!');
}

playGame();
