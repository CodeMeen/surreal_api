const express=require('express');
const ethereum=require('../modules/ethereum')
const router=express.Router();
router.post('/:reqtype',async (req,res)=>{
    
   let network=req.body.network
    let chain=req.body.chain

    let reqtype=req.params.reqtype
    let data=req.body


    if(network=='mainnet'){

        switch (chain) {
            case 'ethereum':

                if(reqtype=='getTokenPrice'){
                    let response= await ethereum.tokenPrice(data);
                    res.send(response)
                }else if(reqtype=='getMetadata'){
        
                }
                
                break;
        
            default:
                break;
        }


    }


})


module.exports=router