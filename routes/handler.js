const express = require('express');
const ethereum = require('../modules/ethereum')
const router = express.Router();

router.get('/:reqtype', async(req, res) => {
    let reqtype = req.params.reqtype

    try {

        if (reqtype == 'createDefaultWallet') {
            let response = await ethereum.createDefault()
            res.send(response)
        } else if (reqtype == 'createNewWallet') {
            let response = await ethereum.createNew()
            res.send(response)
        }    
        else {
            res.type('text/plain');
            res.status(404);
            res.send('404 - Not Found');
        }

    } catch (error) {
        console.error(error)
        res.status(500);
        res.send(error)
    }
})

router.post('/:reqtype', async(req, res) => {


    let network = req.body.network
    let chain = req.body.chain

    let reqtype = req.params.reqtype
    let data = req.body


if(data || data!=''){

    console.log(data)

    if (data.chain) {
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
                    } else if (reqtype == 'getErc20TokensInWallet') {
                        let response = await ethereum.erc20TokensInWallet(data)
                        res.send(response)
                    } else if (reqtype == 'sendErc721Tx') {
                        let response = await ethereum.sendErc721Tx(data)
                        res.send(response)
                    } else if (reqtype == 'nftTxs') {
                        let response = await ethereum.NftTxs(data)
                        res.send(response)

                    } else if (reqtype == 'getMnemonicMetadata') {
                        let response = await ethereum.mnemonicMetadata(data)
                        res.send(response)

                    } else if (reqtype == 'getPrivatekeyMetadata') {
                        let response = await ethereum.privatekeyMetadata(data)
                        res.send(response)

                    }   
                    else {
                        res.type('text/plain');
                        res.status(404);
                        res.send('404 - Not Found');
                    }
                } catch (error) {
                    console.log(error)
                    res.type('text/plain');
                    res.status(500);
                    res.send('An error occurred');
                }


                break;

            default:
                break;
        }
    } else {
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
    }

}else{
    res.type('text/plain');
    res.status(500);
    res.send('404 - Not Found');  
}


})


module.exports = router