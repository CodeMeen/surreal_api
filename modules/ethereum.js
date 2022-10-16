const axios = require('axios');
const alltokens = require('./alltokens')
const { ethers } = require("ethers");
const res = require('express/lib/response');

const INFURA_ID = 'b64a1f176b30451da06a45377bca23a2'


let currentAccount;

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const ERC721_ABI=[
    "function balanceOf(address _owner) external view returns (uint256)",
    "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"
]

function getProvider(data) {
    switch (data) {
        case 'mainnet':

            return new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

            break;

        case 'kovan':

            return new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

            break;

        case 'goerli':
            return new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
            break;


        default:

            return new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)


            break;
    }

}


function getEtherscan(data) {
    switch (data) {
        case 'mainnet':

            return 'https://api.etherscan.io'

            break;

        case 'kovan':

            return 'https://api-kovan.etherscan.io'

            break;

        case 'goerli':
            return 'https://api-goerli.etherscan.io'
            break;


        default:
            return 'https://api.etherscan.io'

            break;
    }

}




async function createDefault() {


    let accounts = [
        { 'id': 0, 'mnemonic': 'zoo tortoise fortune base dumb rebel brisk hockey swear ask resist develop', 'publickey': '0x14d74960B77dB745EDE3187787907e9181AD5fe' },
        { 'id': 1, 'mnemonic': 'rubber wife doll demand system frame job float avocado fog myself surprise', 'publickey': '0xa8B865bE0Cc608f6A49E1668a66D53110773AAeF' },
        { 'id': 2, 'mnemonic': 'about weekend tag curve feel excess display maple enable pyramid obey again', 'publickey': '0xeaaCB8517f9e6E591a1e886fBC24eD691F693fBC' },
        { 'id': 3, 'mnemonic': 'just beach october report mango traffic whale area pass move puzzle session', 'publickey': '0xee6680cC5EDCd190780878380C180E08135F9EDa' },
        { 'id': 4, 'mnemonic': 'puppy basic soldier parent ensure choose antique danger spice half eagle exotic', 'publickey': '0x54ba9Bc18C8D9E7D4D5C941349CC57B017303910' },
    ]




    if (!currentAccount || currentAccount == '') {
        currentAccount = accounts[0]
    } else if (currentAccount.id == 0) {
        currentAccount = accounts[1]
    } else if (currentAccount.id == 1) {
        currentAccount = accounts[2]
    } else if (currentAccount.id == 2) {
        currentAccount = accounts[3]
    } else if (currentAccount.id == 3) {
        currentAccount = accounts[4]

    } else if (currentAccount.id == 4) {
        currentAccount = accounts[0]
    }

    walletMnemonic = new ethers.Wallet.fromMnemonic(currentAccount.mnemonic)

    let pk = walletMnemonic.privateKey

    let ret = {
        'mnemonic': currentAccount.mnemonic,
        'privateKey': pk,
        'publicKey': walletMnemonic.address
    }


    return ret

}

async function sendNativeTx(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = input.publickey
    let mnemonic = input.mnemonic
    let chain = input.chain
    let network = input.network
    let txdata = input.data

    let amount = ethers.utils.parseEther((txdata.amount).toString())

    const wallet = new ethers.Wallet(privatekey, provider)

    let tx = await wallet.sendTransaction({
        to: txdata.to,
        value: amount
    }).then((value) => {

            let resptx = value

            let gasUsed = value.gasLimit.toNumber();
            let gasPrice = value.maxPriorityFeePerGas.toNumber();
            let txto = txdata.to
            let txfrom = txdata.from
            let txtype = 'pending'
            let txvalue = ethers.utils.formatEther(value.value)
            let txtimestamp = Date.now()

            resptx['timeStamp'] = txtimestamp
            resptx['from'] = txfrom
            resptx['to'] = txto
            resptx['value'] = txdata.amount
            resptx['gas'] = gasUsed
            resptx['gasPrice'] = gasPrice
            resptx['gasUsed'] = gasUsed
            resptx['type'] = 'sending'
            resptx['txstatus'] = txtype
            resptx['tokenvalue'] = txdata.amount
            resptx['shortFrom'] = shortPublicKey(txfrom)
            resptx['shortTo'] = shortPublicKey(txto)







            let resp = {
                'status': true,
                'result': resptx
            }

            return resp


        },
        (err) => {
            let resp = {
                'status': false,
                'reason': err
            }

            return resp
        })

    return tx


}


async function sendErc721Tx(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = input.publickey
    let mnemonic = input.mnemonic
    let chain = input.chain
    let network = input.network
    let txdata = input.data


    // "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"

    if (ethers.utils.isAddress(txdata.to)) {

    const wallet = new ethers.Wallet(privatekey, provider)

    const contract = new ethers.Contract(txdata.token.token_address, ERC721_ABI, provider)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transferFrom(txdata.from,txdata.to,txdata.token.token_id).then((value) => {

            let resptx = value

            let gasUsed = value.gasLimit.toNumber();
            let gasPrice = value.maxPriorityFeePerGas.toNumber();
            let txto = txdata.to
            let txfrom = txdata.from
            let txtype = 'pending'
            let txtimestamp = Date.now()

            resptx['timeStamp'] = txtimestamp
            resptx['from'] = txfrom
            resptx['to'] = txto
            resptx['gas'] = gasUsed
            resptx['gasPrice'] = gasPrice
            resptx['gasUsed'] = gasUsed
            resptx['type'] = 'sending'
            resptx['txstatus'] = txtype
            resptx['contractAddress'] = txdata.token.token_address
            resptx['tokentype']='erc721'
            resptx['token_id']=txdata.token.token_id
            resptx['token_address']=txdata.token.token_address
            resptx['shortFrom'] = shortPublicKey(txfrom)
            resptx['shortTo'] = shortPublicKey(txto)




            let resp = {
                'status': true,
                'result': resptx
            }

            return resp
        },
        (error) => {

            let resp = {
                'status': false,
                'reason': error
            }

            return resp
        })

        return tx

    }else{
        return { 'status': false, 'reason': 'recipient_invalid_address' }
    }

}

async function sendErc20Tx(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = input.publickey
    let mnemonic = input.mnemonic
    let chain = input.chain
    let network = input.network
    let txdata = input.data

    let amount = ethers.utils.parseEther((txdata.amount).toString())

    const wallet = new ethers.Wallet(privatekey, provider)

    const contract = new ethers.Contract(txdata.token.address, ERC20_ABI, provider)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(txdata.to, amount).then((value) => {

            let resptx = value

            let gasUsed = value.gasLimit.toNumber();
            let gasPrice = value.maxPriorityFeePerGas.toNumber();
            let txto = txdata.to
            let txfrom = txdata.from
            let txtype = 'pending'
            let txvalue = ethers.utils.formatEther(value.value)
            let txtimestamp = Date.now()

            resptx['timeStamp'] = txtimestamp
            resptx['from'] = txfrom
            resptx['to'] = txto
            resptx['value'] = txdata.amount
            resptx['gas'] = gasUsed
            resptx['gasPrice'] = gasPrice
            resptx['gasUsed'] = gasUsed
            resptx['type'] = 'sending'
            resptx['txstatus'] = txtype
            resptx['tokenvalue'] = txdata.amount
            resptx['contractAddress'] = txdata.token.address
            resptx['shortFrom'] = shortPublicKey(txfrom)
            resptx['shortTo'] = shortPublicKey(txto)




            let resp = {
                'status': true,
                'result': resptx
            }

            return resp
        },
        (error) => {

            let resp = {
                'status': false,
                'reason': error
            }

            return resp
        })

    return tx


}


async function txMetadata(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = input.publickey
    let mnemonic = input.mnemonic
    let chain = input.chain
    let network = input.network
    let token = input.data.token

    let toaddr = input.data.to
    let rawamount = await reducenumber(input.data.amount, 14)
    let amount = ethers.utils.parseEther(rawamount.toString())

    const wallet = new ethers.Wallet(privatekey, provider)


    if (token.type == 'coin') {

        if (ethers.utils.isAddress(toaddr)) {

            let rawsenderBalance = await provider.getBalance(publickey)
            let senderBal = ethers.utils.formatEther(rawsenderBalance)

            const rawPrice = await provider.getFeeData();
            let gasPrice = rawPrice.maxFeePerGas


            const gasUnits = await wallet.estimateGas({
                to: toaddr,
                value: amount
            })

            let result = gasPrice.mul(gasUnits);
            let gasFee = ethers.utils.formatUnits(result, "ether")

            let maxTotal = Number(input.data.amount) + Number(gasFee)



            let resp = {
                'status': true,
                'token': token,
                'from': publickey,
                'shortFrom': shortPublicKey(publickey),
                'to': toaddr,
                'shortTo': shortPublicKey(toaddr),
                'amount': rawamount,
                'networkFee': gasFee,
                'maxTotal': maxTotal
            }

            if (maxTotal >= senderBal) {
                let data = {
                    'status': false,
                    'reason': 'low_network_fees'
                }
                resp['eligibility'] = data


            } else {
                let data = {
                    'status': true,
                    'reason': ''
                }
                resp['eligibility'] = data
            }

            return resp

        } else {
            return { 'status': false, 'reason': 'recipient_invalid_address' }
        }

    } else if (token.type == 'ERC20') {



        if (ethers.utils.isAddress(toaddr)) {
            const contract = new ethers.Contract(token.address, ERC20_ABI, provider)



            let rawsenderBalance = await contract.balanceOf(publickey)
            let senderBal = ethers.utils.formatEther(rawsenderBalance)

            const rawPrice = await provider.getFeeData();
            let gasPrice = rawPrice.maxFeePerGas


            const contractWithWallet = contract.connect(wallet)

            const gasUnits = await contractWithWallet.estimateGas.transfer(
                toaddr,
                amount
            )

            let result = gasPrice.mul(gasUnits);
            let gasFee = ethers.utils.formatUnits(result, "ether")

            let maxTotal = Number(input.data.amount)

            let rawEthBalance = await provider.getBalance(publickey)
            let ethBal = ethers.utils.formatEther(rawEthBalance)



            let resp = {
                'status': true,
                'token': token,
                'from': publickey,
                'shortFrom': shortPublicKey(publickey),
                'to': toaddr,
                'shortTo': shortPublicKey(toaddr),
                'amount': rawamount,
                'networkFee': gasFee,
                'maxTotal': maxTotal
            }

            if (gasFee >= ethBal) {
                let data = {
                    'status': false,
                    'reason': 'low_network_fees'
                }
                resp['eligibility'] = data


            } else {
                let data = {
                    'status': true,
                    'reason': ''
                }
                resp['eligibility'] = data
            }

            return resp

        } else {
            return { 'status': false, 'reason': 'recipient_invalid_address' }
        }

    }
}

async function tokenPrice(input, inapp) {
    const provider = getProvider(input.network)

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

async function AllPrices(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network
    let tokens = input.data.tokens


    let resdata = []


    for (let index = 0; index < tokens.length; index++) {
        const eachtoken = tokens[index];

        try {
            let newpricedata = await tokenPrice((eachtoken.symbol).toUpperCase(), true)
            let usdprice = newpricedata.price

            let newobj = {
                'symbol': eachtoken.symbol,
                'name': eachtoken.name,
                'status': true,
                'usdprice': usdprice
            }

            resdata.push(newobj)
        } catch (error) {

            let newobj = {
                'symbol': eachtoken.symbol,
                'name': eachtoken.name,
                'status': false
            }

            resdata.push(newobj)

        }



    }


    return resdata


}

async function nativeTxs(input) {
    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = (input.publickey).toLowerCase()
    let chain = input.chain
    let network = input.network

    let response = null

    let url = getEtherscan(input.network) + "/api?module=account&action=txlist&address=" + publickey + "&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=C2MM841C66BQREI5VAQWVWC58Q9Z8XHB48"

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
            eachresult['txstatus'] = 'completed'

        }



        return result


    }



}

async function erc20Txs(input) {

    const provider = getProvider(input.network)

    let privatekey = input.privatekey
    let publickey = (input.publickey).toLowerCase()
    let chain = input.chain
    let network = input.network

    let contractaddr = input.data.contractaddr

    let response = []

    let url = getEtherscan(input.network) + "/api?module=account&action=tokentx&contractaddress=" + contractaddr + "&address=" + publickey + "&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=C2MM841C66BQREI5VAQWVWC58Q9Z8XHB48"

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
            eachresult['txstatus'] = 'completed'

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

async function erc20Metadata(input) {
    let chainNetwork;

    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network
    let contractaddr = input.data.contract_address

    if (network == 'mainnet') {
        chainNetwork = 'eth'
    } else {
        chainNetwork = network
    }


    let mapurl = 'https://deep-index.moralis.io/api/v2/erc20/metadata?chain=' + chainNetwork + '&addresses=' + contractaddr

    let response = null

    try {
        response = await axios.get(mapurl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-API-Key': 'AindNyKKC5UA4u3I6AoCdoXwcdmzNoP4Wnr1TVjXDDFNLMD5fznzYd8LPdPXvw28'
            },
        });
    } catch (ex) {
        response = null;
    }

    if (!response) {
        return []
    } else if (response.data || response.data != '') {
        // success
        const json = response.data
        return json
    } else {
        return []
    }
}

async function allNfts(input) {
    let chainNetwork;

    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network

    if (network == 'mainnet') {
        chainNetwork = 'eth'
    } else {
        chainNetwork = network
    }

    let mapurl = "https://deep-index.moralis.io/api/v2/" + publickey + "/nft?chain=" + chainNetwork + "&format=decimal";

    let response = null

    try {
        response = await axios.get(mapurl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-API-Key': 'AindNyKKC5UA4u3I6AoCdoXwcdmzNoP4Wnr1TVjXDDFNLMD5fznzYd8LPdPXvw28'
            },
        });
    } catch (ex) {
        response = null;
    }


    if (!response) {
        return []
    } else if (response.data.result || response.data.result != '') {
        // success
        const json = response.data.result;
        return json
    } else {
        return []
    }

}

async function erc20TokensInWallet(input) {
    let chainNetwork;

    let privatekey = input.privatekey
    let publickey = input.publickey
    let chain = input.chain
    let network = input.network

    if (network == 'mainnet') {
        chainNetwork = 'eth'
    } else {
        chainNetwork = network
    }

    let mapurl = "https://deep-index.moralis.io/api/v2/" + publickey + "/erc20?chain=" + chainNetwork;

    let response = null

    try {
        response = await axios.get(mapurl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-API-Key': 'AindNyKKC5UA4u3I6AoCdoXwcdmzNoP4Wnr1TVjXDDFNLMD5fznzYd8LPdPXvw28'
            },
        });
    } catch (ex) {
        response = null;
    }

    if (!response) {
        return []
    } else if (response.data.result || response.data.result != '') {
        // success
        const json = response.data;
        return json
    } else {
        return []
    }



}

async function allMetadata(input) {

    const provider = getProvider(input.network)

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







module.exports.tokenPrice = tokenPrice
module.exports.allMetadata = allMetadata
module.exports.nativeTxs = nativeTxs
module.exports.erc20Txs = erc20Txs
module.exports.AllPrices = AllPrices
module.exports.allNfts = allNfts
module.exports.txMetadata = txMetadata
module.exports.createDefault = createDefault
module.exports.erc20Metadata = erc20Metadata
module.exports.sendNativeTx = sendNativeTx
module.exports.sendErc20Tx = sendErc20Tx
module.exports.sendErc721Tx= sendErc721Tx
module.exports.erc20TokensInWallet = erc20TokensInWallet
