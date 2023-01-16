const express = require('express');
const airdrop = require('../modules/airdrop')
const dateincrease = require('../modules/date_increase')
const router = express.Router();




router.get('/:reqtype', async(req, res) => {
    let reqtype = req.params.reqtype
    let reqnum = Number(req.params.num)
    try {

        if (reqtype == 'getAirdropMetadata') {
            let response = await airdrop.airdropMetadata()
            res.send(response)
        }else{
            res.type('text/plain');
            res.status(404);
            res.send('404 - Not Found');
        }


    } catch (error) {
        console.error(error)
        res.send(error)
    }
})

router.get('/:reqtype/:num', async(req, res) => {
    let reqtype = req.params.reqtype
    let reqnum = Number(req.params.num)
    try {

       if (reqtype == 'manualAdd') {
            let response = await dateincrease.manualAdd(reqnum)
            res.send(response)
        }else{
            res.type('text/plain');
            res.status(404);
            res.send('404 - Not Found'); 
        }


    } catch (error) {
        console.error(error)
        res.send(error)
    }
})


 router.post('/:reqtype', async(req, res) => {

    let reqtype = req.params.reqtype
    let data = req.body

    // let refcode=req.body.refcode
    // let appid=req.body.appid

                try {
                    if (reqtype == 'newAirdrop') {
                        let response =await airdrop.newAirdrop(data)
                        res.send(response)
                    } else if(reqtype=='getMyAirdrop'){
                        let response =await airdrop.myAirdrop(data)
                        res.send(response) 
                    }else if (reqtype == 'taskDone') {
                        let response = await airdrop.taskDoneFromCl(data)
                        res.send(response)
                    }else if (reqtype == 'withdrawEarnings') {
                        let response = await airdrop.withdrawEarnings(data) 
                        res.send(response)
                    }else if (reqtype == 'addReferrer') {
                        let response = await airdrop.addReferrer(data) 
                        res.send(response)
                    }else{
                        res.type('text/plain');
                        res.status(404);
                        res.send('404 - Not Found');
                    }
                } catch (error) {
                  

                    if(error.respstatus==false){
                        res.send(error);
                    }else if(!error.respstatus){
                        res.status(500);
                        res.send(error);
                    }
                   
                }
})


module.exports = router
