var express = require('express');
var app = express();
var formidable = require("formidable");
fs = require("fs");

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.use('/', express.static('public'));

app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
        console.log(files.upload.path);
        fs.writeFileSync("./public/wechat-code.png", fs.readFileSync(files.upload.path));
        res.redirect("./upload.html") ;
    });
});

var server = app.listen(8090, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});