process.argv.shift();
process.argv.shift();
var arg = process.argv.shift();

function usage() {
    console.log('usage: server PORT PROG | server -h PORT');
    process.exit(1);
}

var http_mode = false;
if (arg === "-h") {
    http_mode = true;
    arg = process.argv.shift();
}
var port = arg;

if (!port) {
    usage();
}

if (http_mode) {
    var http = require('http');
    var exec = require('child_process').exec;
    http.createServer(function(req,res) {
        var prog = req.url.replace(/\?.*$/, '').replace(/^[^\/]*\//, ''),
            args = req.url.replace(/^.*\?/, '').split("&").join(" "),
            cmd = 'php-cgi  ./' + prog + ' ' + args;
        exec(cmd,
             function (error, stdout, stderr) {
                 var lines = stdout.split(/\n/),
                     body_lines = [],
                     in_body = false,
                     header = {},
                     body;
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
                 body = body_lines.join("\n");
                 res.end(body);
             });
    }).listen(port);
    console.log('http server started on port ' + port + '...');
} else {
    var prog = process.argv.shift();
    if (!prog) {
        usage();
    }
    var cmd = 'php ./' + prog;

    var exec = require('child_process').exec;
    var net = require('net');
    net.createServer(function(socketConnection) {
        exec(cmd,
             function (error, stdout, stderr) {
                 socketConnection.write(stdout);
                 socketConnection.end();
             });
    }).listen(port);
    console.log('serving ' + prog + ' on port ' + port + '...');
}


