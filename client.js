const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541

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


  // conn.on('connect', () => {
  //   conn.write('Move: up')
    
  // });


  return conn;


}




module.exports = {connect};
