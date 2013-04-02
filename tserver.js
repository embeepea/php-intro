process.argv.shift();
process.argv.shift();

prog = process.argv.shift();
cmd = 'php ./' + prog;

var exec = require('child_process').exec;
var net = require('net');
net.createServer(function(socketConnection) {
  exec(cmd,
       function (error, stdout, stderr) {
           socketConnection.write(stdout);
           socketConnection.end();
       });
}).listen(8124);
