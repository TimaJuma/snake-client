const {connect } = require('./client');
const {setupInput} = require('./input');





console.log('connecting from play.js...');
const conn = connect();

setupInput(conn);
