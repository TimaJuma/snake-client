const net = require('net');


// EStablish connection
const connect = ()=> {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', ()=>{
    console.log('message from console log for connection')
    conn.write("Name: TJM");

    // setInterval(()=> {
    //   conn.write("Move: up");
    // }, 1000);
    // setInterval(()=> {
    //   conn.write("Move: left");
    // }, 2000);
    // setInterval(()=> {
    //   conn.write("Move: left");
    // }, 3000);
    // setInterval(()=> {
    //   conn.write("Move: down");
    // }, 4000);
    // setInterval(()=> {
    //   conn.write("Move: down");
    // }, 5000);
    // setInterval(()=> {
    //   conn.write("Move: right");
    // }, 6000);
    
  });

  conn.on('data', (data)=> {
    console.log('Data from server:', data)
  });


  
  return conn;
}

// console.log('Connecting to server...');
// // connect();


module.exports = {connect}