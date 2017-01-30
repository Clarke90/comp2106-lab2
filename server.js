//link to the connect package
let connect = require('connect');
let url = require('url');
let math = require('mathjs');
let http = require('http');
// create a new connect object
let app = connect();

// start and connect to the http server localhost 3000
let port = process.env.PORT || 3000;

// index "page" with calculators functionality
let index = function(req, res, next) {

        //get the entire query string
        let qs = url.parse(req.url, true).query;

        //query string needs all paramaters
        if (qs.m && qs.x && qs.y) {
            let method = qs.m
            let x = qs.x
            let y = qs.y

            //using math.js package for math eval
            let answer = math.eval(method + y + x)

            // display all of the values
            res.end('<h1>' + x + method + y + "=" + answer + '</h1>')
            //test
            console.log(answer);

        } else {
            //error message
            res.end('This is an invalid format')
        }
    } //closing function

// map the url's to the pages
app.use('/', index);

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected server running on port 3000');
    }
})
