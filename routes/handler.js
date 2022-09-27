const express = require('express');
const ethereum = require('../modules/ethereum')
const router = express.Router();

router.get('/:reqtype', async(req, res) => {
    let reqtype = req.params.reqtype

    try {

        if (reqtype == 'createDefaultWallet') {
            let response = await ethereum.createDefault()
            res.send(response)
        }

    } catch (error) {
        console.error(error)
        res.send(error)
    }
})

router.post('/:reqtype', async(req, res) => {


    let network = req.body.network
    let chain = req.body.chain

    let reqtype = req.params.reqtype
    let data = req.body

    if (data) {
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
                    } else if (reqtype == 'getAllPrices') {
                        let response = await ethereum.AllPrices(data)
                        res.send(response)
                    } else if (reqtype == 'getAllNfts') {
                        let response = await ethereum.allNfts(data)
                        res.send(response)
                    } else if (reqtype == 'getTxMetadata') {
                        let response = await ethereum.txMetadata(data)
                        res.send(response)
                    } else if (reqtype == 'getErc20Metadata') {
                        let response = await ethereum.erc20Metadata(data)
                        res.send(response)
                    } else if (reqtype == 'sendNativeTx') {
                        let response = await ethereum.sendNativeTx(data)
                        res.send(response)
                    } else if (reqtype == 'sendErc20Tx') {
                        let response = await ethereum.sendErc20Tx(data)
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