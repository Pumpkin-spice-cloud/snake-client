const connecting = require('./client');
console.log('Connecting ...');
connecting.connect();

function handleUserInput(data) {
  if (data === '\u0003') {
    process.exit();
  }
}

const setupInput = function () {

  const stdin = process.stdin;
  stdin.on('data', data =>{
    handleUserInput(data);
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();



  return stdin;
}
setupInput();

