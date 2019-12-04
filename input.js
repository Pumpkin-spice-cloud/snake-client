let connection;


function handleUserInput(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');

  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
}

const setupInput = function (conn) {

  const stdin = process.stdin;
  connection = conn;
  stdin.on('data', data =>{
    handleUserInput(data);
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();



  return stdin;
}



module.exports = {setupInput};