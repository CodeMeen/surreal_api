const axios = require('axios');


async function tokenPrice(input){

    let symbol=input.data.symbol
 
    let mapurl="";

    mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol="+symbol;

    let response=null

    try {
        response = await axios.get(mapurl, {
          headers: {
             'Content-Type':  'application/json',
             'Accept-Encoding': 'deflate, gzip',
             'X-CMC_PRO_API_KEY': 'd57d613e-51ed-4fea-a83d-8a977d2cae3a',
          },
        });
      } catch(ex) {
        response = null;
        return(ex)
      }

      if (response) {
        // success
        const json = response.data; 
       
        return json
        
      }
    

      

 }

 async function walletMetadata(input){

 }




 module.exports.tokenPrice=tokenPrice
 module.exports.walletMetadata=walletMetadata