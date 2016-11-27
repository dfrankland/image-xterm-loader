const bulbasaur = require('./bulbasaur.png');
const fixture = require('./fixture');

console.log(bulbasaur);

if (bulbasaur !== fixture) {
  throw new Error('Loaded xterm image does not match fixture!');
}
