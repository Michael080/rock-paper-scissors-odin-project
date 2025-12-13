// prompt user for weapon selection
function getHumanChoice() {
  let weapon = prompt('Select your weapon');
  return weapon;
}

function Player(name) {
  this.name = name;
  this.weapon = getHumanChoice()
}

let player1 = new Player('player1');
