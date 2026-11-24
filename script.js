const heading = document.querySelector('h1');
const roundMessages = document.querySelector('h2');
const playerBtns = document.querySelectorAll('.player-btn');
const turnMessage = document.querySelector('.turn-message');

const weapons = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

const winConditions = {
  'scissors': ['paper', 'lizard'],
  'paper': ['rock', 'spock'],
  'rock': ['lizard', 'scissors'],
  'lizard': ['spock', 'paper'],
  'spock': ['scissors', 'rock']
}

function Player(name) {
  this.name = name;
  this.choice;
  this.score = 0;
}

let computer = {
  choice: '',
  score: 0
}

function getRandom() {
  return Math.floor(Math.random() * 5);
}

function getComputerChoice() {
  computer.choice = weapons[getRandom()];
}

let human = new Player('human');

// update html scoreboard
function scoreBoard() {
  const player = document.querySelector('#human-score');
  const cpu = document.querySelector('#cpu-score');

  player.textContent = human.score;
  cpu.textContent = computer.score;
}

// prompt user for weapon selection
function setHumanChoice(weapon) {
  human.choice = weapon;
  heading.classList.add('hidden');

  return weapon;
}

// return human weapon via button click
playerBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let weapon = e.target.id

    setHumanChoice(weapon);
    getComputerChoice();
    playRound(computer.choice, human.choice);
    scoreBoard();

    // update page w/ final outcome (win/lose) message/s
    if ((human.score !== computer.score) && (human.score >= 5 || computer.score >= 5)) {
      heading.classList.remove('hidden');
      human.score > computer.score ? heading.textContent = 'Humanity triumphs!' : heading.textContent = 'The machines shall rule forever!';
    }

  });
});

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
    default:
      return 'DRAW!';
      break;
  }
}

function playRound(computerChoice, humanChoice) {

  roundMessages.textContent = outcomeMessages(computerChoice, humanChoice);

  if (winConditions[humanChoice].includes(computerChoice)) {
    // human score condition
    return human.score++;
  }

  if (winConditions[computerChoice].includes(humanChoice)) {
    //computer win condition
    return computer.score++;
  }
}
