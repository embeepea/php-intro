process.argv.shift();
process.argv.shift();
arg = process.argv.shift();

var cgi_mode = false;
if (arg === "-w") {
    cgi_mode = true;
    arg = process.argv.shift();
}
var port = arg;

if (!port) {
    console.log('usage: server PORT');
    process.exit(1);
}

var http = require('http');
var exec = require('child_process').exec;

var php = cgi_mode ? "php-cgi" : "php";

http.createServer(function(req,res) {
    var prog = req.url.replace(/\?.*$/, '').replace(/^[^\/]*\//, ''),
        args = req.url.replace(/^.*\?/, '').split("&").join(" "),
        cmd = php + ' ./' + prog + ' ' + args;
    exec(cmd,
         function (error, stdout, stderr) {
             lines = stdout.split(/\n/);
             body_lines = [];
             in_body = false;
             header = {};
             for (var i=0; i<lines.length; ++i) {
                 line = lines[i].replace(/^\s+/, '').replace(/\s+$/, '');
                 if (in_body) {
                     body_lines.push(line);
                 } else {
                     if (line.length === 0) {
                         in_body = true;
                     } else {
                         m = line.match(/^([^:]+):\s*(.*)*/);
                         if (m) {
                             key = m[1];
                             val = m[2];
                             header[key] = val;
                         }
                     }
                 }
             }

             res.writeHeader(200, header);
             res.end(body_lines.join("\n"));
         });
}).listen(port);

console.log('listening on port ' + port + '...');
