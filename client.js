const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('Server says hello');
  });

  conn.on('connect', () => {
    conn.write('Name: AMO');
  });


  

  return conn;


}




module.exports = {connect}

