// <script src="tests/outcomeMessages.js"></script>

// test message output
const incorrectMessage = 'Incorrect message for match between: ';
console.group('testing messages via function: outcomeMessages() ')

let weap1 = 'scissors';
let weap2 = 'paper';
console.assert(outcomeMessages(weap1, weap2) === 'Scissors cut paper!', `${incorrectMessage} ${weap1} v ${weap2}`);


weap1 = 'paper';
weap2 = 'rock';
console.assert(outcomeMessages(weap1, weap2) === 'Paper covers rock!', `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'rock';
weap2 = 'lizard';
console.assert(outcomeMessages(weap1, weap2) === 'Rock crushes lizard!', `${incorrectMessage} ${weap1} v ${weap2}`);


weap1 = 'lizard';
weap2 = 'spock';
console.assert(outcomeMessages(weap1, weap2) === 'Lizard poisons Spock!', `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'spock';
weap2 = 'scissors';
console.assert(outcomeMessages(weap1, weap2) === 'Spock smashes (or melts) scissors!', `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'scissors';
weap2 = 'lizard';
// + improved formatting (from above "asserts")
let desiredMsg = 'Scissors decapitate lizard!';
console.assert(outcomeMessages(weap1, weap2) === desiredMsg, `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'lizard';
weap2 = 'paper';
desiredMsg = 'Lizard eats paper!';
console.assert(outcomeMessages(weap1, weap2) === desiredMsg, `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'paper';
weap2 = 'spock';
desiredMsg = 'Paper disproves Spock!';
console.assert(outcomeMessages(weap1, weap2) === desiredMsg, `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'spock';
weap2 = 'rock';
desiredMsg = 'Spock vaporizes rock!';
console.assert(outcomeMessages(weap1, weap2) === desiredMsg, `${incorrectMessage} ${weap1} v ${weap2}`);

weap1 = 'rock';
weap2 = 'scissors';
desiredMsg = 'Rock crushes scissors!';
console.assert(outcomeMessages(weap1, weap2) === desiredMsg, `${incorrectMessage} ${weap1} v ${weap2}`);
console.groupEnd();
