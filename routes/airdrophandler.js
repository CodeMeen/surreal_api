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


/* router.post('/:reqtype', async(req, res) => {


    let network = req.body.network
    let chain = req.body.chain

    let reqtype = req.params.reqtype
    let data = req.body



    if (data.chain) {
        switch (chain) {
            case 'ethereum':
                try {
                    if (reqtype == 'getTokenPrice') {
                        let response = await ethereum.tokenPrice(data);
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


                break;

            default:
                break;
        }
    } else {
        res.send({ 'status': 'error', 'reason': 'Not Authorized' })
    }

}) */


module.exports = router
