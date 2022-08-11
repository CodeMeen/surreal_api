const express=require('express')

const router=express.Router();


router.get('/:type/:data',(req, res)=>{
   
 
    let response = null;
 
    new Promise(async (resolve, reject) => {
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
        // error
        console.log(ex);
        reject(ex);
      }
 
      if (response) {
        // success
        const json = response.data; 
       res.send(json);
        resolve(json);
      }
 
    });
  
   
 });
 

 module.exports=router