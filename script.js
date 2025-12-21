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
  // TODO: uncomment below line & remove "manual" setting of `weapon`
  //let weapon = prompt('Select your weapon');
  let weapon = 'spock';
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

function outcomeMessages(computerChoice, humanChoice) {
  let weapons = [computerChoice, humanChoice];

  switch (true) {
    case (weapons.includes('scissors') && weapons.includes('paper')):
      return 'Scissors cut paper!';
      break;
    case (weapons.includes('paper') && weapons.includes('rock')):
      return 'Paper covers rock!';
      break;
    case (weapons.includes('rock') && weapons.includes('lizard')):
      return 'Rock crushes lizard!';
      break;
    case (weapons.includes('lizard') && weapons.includes('spock')):
      return 'Lizard poisons Spock!';
      break;
    case (weapons.includes('spock') && weapons.includes('scissors')):
      return 'Spock smashes (or melts) scissors!';
      break;
    case (weapons.includes('scissors') && weapons.includes('lizard')):
      return 'Scissors decapitate lizard!';
      break;
    case (weapons.includes('lizard') && weapons.includes('paper')):
      return 'Lizard eats paper!';
      break;
    case (weapons.includes('paper') && weapons.includes('spock')):
      return 'Paper disproves Spock!';
      break;
    case (weapons.includes('spock') && weapons.includes('rock')):
      return 'Spock vaporizes rock!';
      break;
    case (weapons.includes('rock') && weapons.includes('scissors')):
      return 'Rock crushes scissors!';
      break;
  }
}

function playGame() {

  function playRound(computerChoice, humanChoice) {
    console.log(outcomeMessages(computerChoice, humanChoice));

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
