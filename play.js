const {connect } = require('./client');
const { stdin } = require('process');


const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('user quited the GAME with "ctr+c"');
    process.exit();
  }
};

// SET UP USER INTERFACE
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key)=> {
    handleUserInput(key);
  })

  return stdin;
}


setupInput();

//


console.log('connecting from play.js...');
connect();

