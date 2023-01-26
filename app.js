const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

//routes modules
const handler = require('./routes/handler')
const airdrophandler=require('./routes/airdrophandler')

var app = express();
app.set('port', process.env.PORT || 3000);


app.use(cors({
    origin: '*'
}));



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

//routes
app.use('/app', handler)
app.use('/airdrop', airdrophandler)

app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

/*
const options = {
    key: fs.readFileSync("./config/cert.key"),
    cert: fs.readFileSync("./config/cert.crt"),
  };

  */


app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});




/*

https.createServer(options, app).listen(8081, () => {
    console.log(`HTTPS server started on port 8081`);
  });

  */