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
  let weapon = prompt('Select your weapon');
  return weapon;
}

function Player(name) {
  this.name = name;
  // TODO: uncomment below line - temp. for easy iteration
  //this.weapon = getHumanChoice()
  this.weapon = 'scissors';
}

let player1 = new Player('player1');
