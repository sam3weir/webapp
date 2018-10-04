var http = require('http');

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {

        case "":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var html = "<html>";
            html += "<body>";
            html += "<a href='"
            if (Math.random() > 0.5) {
                html += "/blue";
            } else {
                html += "/green"
            }
            html += "'> click </a>";
            html += "</body>";
            html += "</html>";
            res.end(html);
            break;

        case "/blue":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<html><body bgcolor='blue'></body></html>");
            break;

        case "/green":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<html><body bgcolor='green'></body></html>");
            break;
    }
}).listen(3000);

console.log("server started on localhost: 3000; press ctrl-c to terminate")
