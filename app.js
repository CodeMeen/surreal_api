var express = require('express');
const bodyParser = require("body-parser");
const cors= require('cors');
const axios = require('axios');



var app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors({
origin: '*'
}));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/getTokenData/:data/:type', function(req, res){
   let data=req.params.data;
   let type=req.params.type;

   if(type=='id'){
   const mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id="+data;
   }else if(type=="name"){
      const mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?name="+data;
   }else if(type=="symbol"){
      const mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol="+data;
   }else if(type=="token_address"){
      const mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?token_address="+data;
   }

   let response = null;
   new Promise(async (resolve, reject) => {
     try {
       response = await axios.get(mapurl, {
         headers: {
           'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
         },
       });
     } catch(ex) {
       response = null;
       // error
       console.log(ex);
       reject(ex);
     }
     if (response) {
       // success
       const json = response.data;
       console.log(json);
       resolve(json);
     }
   });
 
  
});



app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
    });
    // custom 500 page
    app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
    });


  app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
   });