// app/routes.js

// grab the nerd model we just created
// var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
/*        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });
*/
        // route to handle creating goes here (app.post)
        // Twilio service
        app.post('/', function(req, res) {
            var twilio = require('twilio');
            var twiml = new twilio.TwimlResponse();
            var message = req.body.Body;
            var execFile = require('child_process').execFile;
            var file = '/home/optee/hello_world';
            //var args = '';
            //var options = '';
            //execFile(file, args, options, function(error, stdout, stderr) {
            execFile(file, function(error, stdout, stderr) {
                console.log(stdout);
                twiml.message(stdout);
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
            });
            /*if (req.body.Body == 'hello') {
                twiml.message('Hi!');
            } else if(req.body.Body == 'bye') {
                twiml.message('Goodbye');
            } else {
                twiml.message('No Body param match, Twilio sends this in the request to your server.');
            }*/
            //res.writeHead(200, {'Content-Type': 'text/xml'});
            //res.end(twiml.toString());
        });

        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
