var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHeader({
        'Content-Type' : 'text/plain'
    });


    var exec = require('child_process').exec,
        child;

    child = exec('ls',
                 function (error, stdout, stderr) {
                     res.end(stdout);
                 });

}).listen(3000);



