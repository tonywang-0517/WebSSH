<<<<<<< HEAD
var tty = require('./lib/tty.js');
var ejs = require('ejs');
var app = tty.createServer({
    https: {
        key: "./privatekey.pem",
        cert: "./certificate.pem"
},
    "port": 443
});
app.set("view engine","ejs");
app.listen();
=======
var tty = require('tty.js');

var app = tty.createServer({
    shell: 'bash',
    users: {
        foo: 'bar'
    },
    port: 8000
});

app.get('/foo', function(req, res, next) {
    res.send('bar');
});

app.listen(); 
>>>>>>> de5f2d619eb8ad9b0bfa021e6ed4ab267119d4a2
