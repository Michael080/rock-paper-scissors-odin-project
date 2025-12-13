const weapons = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

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
  // TODO: remove default 'spock' once logic is complete
  let weapon = prompt('Select your weapon', 'spock');
  weapon = weapon.toLowerCase();
  return weapon;
}

function Player(name) {
  this.name = name;
  // TODO: uncomment below line - temp. for easy iteration
  this.choice = getHumanChoice();
  this.score = 0;
}

let computer = {
  choice: getComputerChoice(),
  score: 0,
}

computer.choice = getComputerChoice();

let human = new Player('human');

// WARNING: temporary values REMOVE AFTER TESTING SUCCEEDS
//human.choice = 'spock';
//computer.choice = 'lizard';

function playRound(computerChoice, humanChoice) {
  if (winConditions[humanChoice].includes(computerChoice)) {
    // human score condition
    human.score++;
  } else if (winConditions[computerChoice].includes(humanChoice)) {
    //computer win condition
    computer.score++;
  } else {
    // draw condition
  }
}

playRound(computer.choice, human.choice);
