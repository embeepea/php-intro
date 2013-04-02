var fs = require('fs');
var exec = require('child_process').exec;
var http = require('http');
var net = require('net');

process.argv.shift();
process.argv.shift();
var arg = process.argv.shift();

function usage() {
    console.log('usage: server PORT PROG | server -h PORT');
    process.exit(1);
}

function writeToFile(fd, string) {
    fs.writeSync(fd, string, 0, string.length, null);
}

function runphp(php, prog, args, callback) {
    var phpfile = "prog-" + process.pid + ".php";
    fs.readFile('args.php', function(err,argsdata) {
        fs.readFile(prog, function (err, progdata) {
            //console.log('creating ' + phpfile);
            fs.open(phpfile, 'w', function(err,fd) {
                writeToFile(fd, argsdata + progdata);
                fs.close(fd, function(err) {
                    exec(php + ' ./' + phpfile + ' ' + args, function (error, stdout, stderr) {
                        callback(error, stdout, stderr);
                        fs.unlinkSync(phpfile);
                        //console.log('deleted ' + phpfile);
                    });
                });
            });
        });
    });
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
    http.createServer(function(req,res) {
        var prog = req.url.replace(/\?.*$/, '').replace(/^[^\/]*\//, ''),
            args = req.url.replace(/^.*\?/, '').split("&").join(" "),
            cmd = 'php-cgi  ./' + prog + ' ' + args;
        runphp('php-cgi', prog, args, function (error, stdout, stderr) {
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

    net.createServer(function(socketConnection) {
        runphp('php', prog, '', function (error, stdout, stderr) {
            socketConnection.write(stdout);
            socketConnection.end();
        });
    }).listen(port);
    console.log('serving ' + prog + ' on port ' + port + '...');
}


