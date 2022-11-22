const express = require('express');
const airdrop = require('../modules/airdrop')
const router = express.Router();


router.get('/:reqtype', async(req, res) => {
    let reqtype = req.params.reqtype

    try {

        if (reqtype == 'getAirdropMetadata') {
            let response = await airdrop.airdropMetadata()
            res.send(response)
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
                    } 
                    else {
                        res.type('text/plain');
                        res.status(404);
                        res.send('404 - Not Found');
                    }
                } catch (error) {
                    console.error(error)
                    res.send(error)
                }
})


module.exports = router
