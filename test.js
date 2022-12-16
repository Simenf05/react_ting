var http = require('http');
var fs = require('fs');

try {
    data = fs.readFileSync("res.html", "utf-8");
    testhtml = fs.readFileSync("test.html", "utf-8")
}
catch (err) {
    console.error(err);
    process.exit(-1);
}



server = http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});

        if (req.url == '/') {
            res.write(testhtml)
        }

        if (req.url == '/simen?') {
            res.write(data);
        }

        res.end();
        
})

server.listen(80);


