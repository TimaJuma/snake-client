// SET UP USER INTERFACE
// const { stdin } = require('process');


let connection;
const setupInput = function(conn) {

  connection = conn;
  const stdin = process.stdin;  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  return stdin.on('data', handleUserInput);
}


const handleUserInput = function(key) {
  //WASD
  if (key === 'w') {
    console.log('pressed W')
    connection.write("Move: up");

  }  if (key === 'a') {
    console.log('pressed A')
    connection.write("Move: left");
  }  if (key === 's') {
    connection.write("Move: down");
  }  if (key === 'd') {
    connection.write("Move: right");
  }  if (key === 'f') {
    connection.write('Say: YAS');
  }  if (key === 'e') {
    connection.write('Say: WOO');
  }  if (key === 'q') {
    connection.write('Say: EYY')
  }  if (key === '\u0003') {
    process.exit();
  }
}


module.exports = {setupInput}