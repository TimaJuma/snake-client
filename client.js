const net = require('net');

// EStablish connection
const connect = ()=> {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', ()=>{
    console.log('connection established');
  })
  return conn;
}

console.log('Connecting to server...');
// connect();


module.exports = {connect}