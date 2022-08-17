const express = require('express');
const ethereum = require('../modules/ethereum')
const router = express.Router();
router.post('/:reqtype', async(req, res) => {

    let network = req.body.network
    let chain = req.body.chain

    let reqtype = req.params.reqtype
    let data = req.body


    if (network == 'mainnet') {

        switch (chain) {
            case 'ethereum':
                try {
                    if (reqtype == 'getTokenPrice') {
                        let response = await ethereum.tokenPrice(data);
                        res.send(response)
                    } else if (reqtype == 'getAllMetadata') {
                        let response = await ethereum.allMetadata(data)
                        res.send(response)
                    } else if (reqtype == 'getTokenTxs') {
                        let response = await ethereum.erc20Txs(data)
                        res.send(response)
                    } else if (reqtype == 'getNativeTxs') {
                        let response = await ethereum.nativeTxs(data)
                        res.send(response)
                    }
                } catch (error) {
                    console.error(error)
                    res.send(error)
                }


                break;

            default:
                break;
        }


    }


})


module.exports = router