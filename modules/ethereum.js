const axios = require('axios');
const alltokens=require('./alltokens')
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


async function tokenPrice(input,inapp){
let symbol;

if(inapp==true){
    symbol=input
}else{
    symbol=input.data.symbol
}


    let mapurl="";

    mapurl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol="+symbol;

    let response=null

    try {
        response = await axios.get(mapurl, {
          headers: {
             'Content-Type':  'application/json',
             'Accept-Encoding': 'deflate, gzip',
             'X-CMC_PRO_API_KEY': 'd57d613e-51ed-4fea-a83d-8a977d2cae3a',
          },
        });
      } catch(ex) {
        response = 0;
      }

      if (response) {
        // success
        const json = response.data; 
        let priceres={'price':json.data[symbol].quote.USD.price}
       
        return priceres
        }
       
          
      }

      

 async function allMetadata(input){

let privatekey=input.privatekey
let publickey=input.publickey
let chain=input.chain
let network=input.network
let tokens=input.data.tokens


let resdata=[]


for (let index = 0; index < tokens.length; index++) {
    const eachtoken = tokens[index];
    const contractaddr=eachtoken.address

    console.log(contractaddr)

    if(!contractaddr){

        try {
            const getbal = await provider.getBalance(publickey) 
            let bal= ethers.utils.formatEther(getbal)

            let pricedata=await tokenPrice('ETH',true)  
           

            let usdprice=pricedata.price
        
            let usdbal=await (bal * usdprice)
        
            let newobj={
                'chain':chain,
                'balance':bal,
                'usdbalance':usdbal,
                'status':true
            }

            resdata.push(newobj)

        } catch (error) {
           
            let newobj={
                'chain':chain,
                'status':false,
                'error':error
            }

            resdata.push(newobj)
           
        }

    }else{
        try {

    
            const contract = new ethers.Contract(contractaddr, ERC20_ABI, provider)
    
            const rawbal = await contract.balanceOf(publickey)
            const bal=ethers.utils.formatEther(rawbal)
    
            let subpricedata=await tokenPrice((eachtoken.symbol).toUpperCase(),true)
            let subusdprice=subpricedata.price
    
            let usdbal=await (bal*subusdprice)
    
            let newobj={
                'contractaddr':contractaddr,
                'balance':bal,
                'usdbalance':usdbal,
                'status':true
            }
            
            resdata.push(newobj)
            
        } catch (error) {
    
            let newobj={
                'contractaddr':contractaddr,
                'status':false,
                'error':error
            }
    
        resdata.push(newobj)
            
        }
    }

  
  
}       


return resdata

}







async function walletMetadata(input){
let privatekey=input.privatekey
let publickey=input.publickey
let chain=input.chain
let network=input.network

let chaindata=alltokens.load(network,chain);

let chainsymbol=chaindata.symbol
let coinbalance=''
let resdata={}

try {
    const getbal = await provider.getBalance(publickey) 
    coinbalance= ethers.utils.formatEther(getbal)
} catch (error) {
    coinbalance=''
    return error
}


if(coinbalance != ''){

    try {
        let pricedata=await tokenPrice('ETH',true)  

    let usdprice=pricedata.price

    let usdbalance=coinbalance * usdprice

    resdata={
        'chain':chain,
        'network':network,
        'balance':coinbalance,
        'usdbalance':usdbalance,
        'tokens':[],
        'status':true
    }

    } catch (error) {

        resdata={
            'chain':chain,
            'network':network,
            'tokens':[],
            'status':false,
            'error':error
        }
        
    }



    let tokens=chaindata.tokens
    let subtokens=[]

    for (let index = 0; index < tokens.length; index++) {
        const eachtoken = tokens[index];
        const contractaddr=eachtoken.address

        try {

            console.log(contractaddr)

            const contract = new ethers.Contract(contractaddr, ERC20_ABI, provider)

            const rawbal = await contract.balanceOf(publickey)
            const bal=ethers.utils.formatEther(rawbal)
    
            let subpricedata=await tokenPrice((eachtoken.symbol).toUpperCase(),true)
            let subusdprice=subpricedata.price
    
            let usdbal=bal*subusdprice
    
            let newobj={
                'contractaddr':contractaddr,
                'balance':bal,
                'usdbalance':usdbal,
                'status':true
            }
            
            subtokens.push(newobj)
            
        } catch (error) {

            let newobj={
                'contractaddr':contractaddr,
                'status':false,
                'error':error
            }

            subtokens.push(newobj)
            
        }
      
    }       


    resdata.tokens=subtokens

    return resdata


}



 }





 module.exports.tokenPrice=tokenPrice
 module.exports.allMetadata=allMetadata