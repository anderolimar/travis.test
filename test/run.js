var file = require('file');
var Mocha = require('mocha');
var path = require('path');

var testDir = './test';
var mocha = new Mocha();

function addTest(currentDir, dirs, files) {
  if (currentDir == testDir)
    return;
  for (var i = 0; i < files.length; i++)
    mocha.addFile(path.join(currentDir, files[i]));
}

file.walkSync(testDir, addTest);

console.log('Running tests...');

mocha.run(function (failures) {
  process.on('exit', function () {
  });
});