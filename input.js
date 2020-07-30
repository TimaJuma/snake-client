// SET UP USER INTERFACE
const { stdin } = require('process');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('user quited the GAME with "ctr+c"');
    process.exit();
  }
};



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


module.exports = {setupInput}