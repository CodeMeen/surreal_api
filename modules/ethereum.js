const axios = require('axios');
const alltokens = require('./alltokens')
const { ethers } = require("ethers");
const res = require('express/lib/response');

const INFURA_ID = 'b64a1f176b30451da06a45377bca23a2'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];


async function tokenPrice(input, inapp) {
    let symbol;

    if (inapp == true) {
        symbol = input
    } else {
        symbol = input.data.symbol
    }


    let mapurl = "";

    mapurl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + symbol;

    let response = null

    try {
        response = await axios.get(mapurl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                'X-CMC_PRO_API_KEY': 'de4be442-9232-4375-b9a7-18ada0e0bcb3',
            },
        });
    } catch (ex) {
        response = 0;
    }

    if (response) {
        // success
        const json = response.data;
        let rawprice = json.data[symbol].quote.USD.price
        let correctprice = await reducenumber(rawprice)
        let priceres = { 'price': correctprice }

        return priceres
    }


}

/* function numberize(num, fixed) {
    if (fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');

        let stringre = num.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]
        return parseInt(stringre)
    } else {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (2 || -1) + '})?');

        let stringre = num.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]
        return stringre
    }
}
*/

async function reducenumber(num, fixed) {

    let string = await num.toString()

    if (!fixed) {

        if (string.length <= 11) {
            return string
        } else {
            let trimmedString = await string.slice(0, 11);
            return trimmedString
        }

    } else {
        if (string.length <= fixed) {
            return string
        } else {
            let trimmedString = await string.slice(0, fixed);
            return trimmedString
        }
    }

}

/* async function numberize(x, num) {
    let rx;
    let rxnum = parseInt(x);
    if (num) {
        rx = await rxnum.toFixed(num);
    } else {
        rx = await rxnum.toFixed(2);
    }

    return rx

}

*/



async function nativeTxs(input) {

    let privatekey = input.privatekey
    let publickey = (input.publickey).toLowerCase()
    let chain = input.chain
    let network = input.network

    let response = null

    let url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + publickey + "&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=C2MM841C66BQREI5VAQWVWC58Q9Z8XHB48"

    try {

        response = await axios.get(url)

    } catch (error) {
        response = null
    }

    if (!response || response.data.status == '0') {
        return []
    } else {

        let result = response.data.result

        for (let index = 0; index < result.length; index++) {
            const eachresult = result[index];
            if (eachresult.to == publickey) {
                eachresult['type'] = 'receiving'
            } else {
                eachresult['type'] = 'sending'
            }

            let txvalue = ethers.utils.formatEther(eachresult.value)

            eachresult['tokenvalue'] = await reducenumber(txvalue, 7)


            eachresult['shortTo'] = shortPublicKey(eachresult.to)
            eachresult['shortFrom'] = shortPublicKey(eachresult.from)

        }



        return result


    }



}

async function erc20Txs(input) {

    let privatekey = input.privatekey
    let publickey = (input.publickey).toLowerCase()
    let chain = input.chain
    let network = input.network

    let contractaddr = input.data.contractaddr

    let response = null

    let url = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=" + contractaddr + "&address=" + publickey + "&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=C2MM841C66BQREI5VAQWVWC58Q9Z8XHB48"

    try {
        response = await axios.get(url)
    } catch (error) {
        response = null
    }


    if (response.data.status == '0') {
        return []
    } else {
        let result = response.data.result

        for (let index = 0; index < result.length; index++) {
            const eachresult = result[index];
            if (eachresult.to == publickey) {
                eachresult['type'] = 'receiving'
            } else {
                eachresult['type'] = 'sending'
            }

            let txvalue = ethers.utils.formatEther(eachresult.value)

            eachresult['tokenvalue'] = await reducenumber(txvalue, 7)
            eachresult['shortTo'] = shortPublicKey(eachresult.to)
            eachresult['shortFrom'] = shortPublicKey(eachresult.from)

        }



        return result
    }
}

async function erc721Txs(url) {
    try {

    } catch (error) {

    }
}

async function erc1155Txs(url) {
    try {

    } catch (error) {

    }
}

async function allMetadata(input) {

    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network
    let tokens = input.data.tokens


    let resdata = []


    for (let index = 0; index < tokens.length; index++) {
        const eachtoken = tokens[index];
        const contractaddr = eachtoken.address
        let clientusdprice = eachtoken.usdprice

        if (!contractaddr) {

            try {
                const getbal = await provider.getBalance(publickey)
                let bal = ethers.utils.formatEther(getbal)
                let pricedata = {}

                if (!clientusdprice) {
                    let newpricedata = await tokenPrice('ETH', true)
                    pricedata['price'] = newpricedata.price
                } else {
                    pricedata['price'] = clientusdprice
                }



                let usdprice = pricedata.price

                let usdbal = await (bal * usdprice)

                let newobj = {
                    'type': 'chain',
                    'chain': chain,
                    'symbol': eachtoken.symbol,
                    'name': eachtoken.name,
                    'balance': await reducenumber(bal),
                    'usdbalance': await reducenumber(usdbal),
                    'status': true,
                    'usdprice': usdprice
                }

                resdata.push(newobj)

            } catch (error) {



                let newobj = {
                    'type': 'chain',
                    'chain': chain,
                    'symbol': eachtoken.symbol,
                    'name': eachtoken.name,
                    'status': false,
                    'error': error
                }

                resdata.push(newobj)

            }

        } else {
            try {

                let clientusdprice = eachtoken.usdprice

                const contract = new ethers.Contract(contractaddr, ERC20_ABI, provider)

                const rawbal = await contract.balanceOf(publickey)
                const bal = ethers.utils.formatEther(rawbal)

                let subpricedata = {}

                if (!clientusdprice) {
                    let newpricedata = await tokenPrice((eachtoken.symbol).toUpperCase(), true)
                    subpricedata['price'] = newpricedata.price
                } else {
                    subpricedata['price'] = clientusdprice
                }


                let subusdprice = subpricedata.price

                let usdbal = await (bal * subusdprice)

                let newobj = {
                    'type': 'contract',
                    'contractaddr': contractaddr,
                    'symbol': eachtoken.symbol,
                    'name': eachtoken.name,
                    'balance': await reducenumber(bal),
                    'usdbalance': await reducenumber(usdbal),
                    'status': true,
                    'usdprice': subusdprice
                }

                resdata.push(newobj)

            } catch (error) {



                let newobj = {
                    'type': 'contract',
                    'contractaddr': contractaddr,
                    'symbol': eachtoken.symbol,
                    'name': eachtoken.name,
                    'status': false,
                    'error': error
                }

                resdata.push(newobj)

            }
        }



    }


    return resdata

}


function shortPublicKey(string) {

    let firstpart = string.slice(0, 7)
    let lastpart = string.slice(-7)

    let newstring = firstpart + '...' + lastpart

    return newstring

}






/* async function walletMetadata(input) {
    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network

    let chaindata = alltokens.load(network, chain);

    let chainsymbol = chaindata.symbol
    let coinbalance = ''
    let resdata = {}

    try {
        const getbal = await provider.getBalance(publickey)
        coinbalance = ethers.utils.formatEther(getbal)
    } catch (error) {
        coinbalance = ''
        return error
    }


    if (coinbalance != '') {

        try {
            let pricedata = await tokenPrice('ETH', true)

            let usdprice = pricedata.price

            let usdbalance = coinbalance * usdprice

            resdata = {
                'chain': chain,
                'network': network,
                'balance': coinbalance,
                'usdbalance': usdbalance,
                'tokens': [],
                'status': true
            }

        } catch (error) {

            resdata = {
                'chain': chain,
                'network': network,
                'tokens': [],
                'status': false,
                'error': error
            }

        }



        let tokens = chaindata.tokens
        let subtokens = []

        for (let index = 0; index < tokens.length; index++) {
            const eachtoken = tokens[index];
            const contractaddr = eachtoken.address

            try {

                console.log(contractaddr)

                const contract = new ethers.Contract(contractaddr, ERC20_ABI, provider)

                const rawbal = await contract.balanceOf(publickey)
                const bal = ethers.utils.formatEther(rawbal)

                let subpricedata = await tokenPrice((eachtoken.symbol).toUpperCase(), true)
                let subusdprice = subpricedata.price

                let usdbal = bal * subusdprice

                let newobj = {
                    'contractaddr': contractaddr,
                    'balance': bal,
                    'usdbalance': usdbal,
                    'status': true
                }

                subtokens.push(newobj)

            } catch (error) {

                let newobj = {
                    'contractaddr': contractaddr,
                    'status': false,
                    'error': error
                }

                subtokens.push(newobj)

            }

        }


        resdata.tokens = subtokens

        return resdata


    }



}

*/





module.exports.tokenPrice = tokenPrice
module.exports.allMetadata = allMetadata
module.exports.nativeTxs = nativeTxs
module.exports.erc20Txs = erc20Txs