const express=require('express')
const tokens=require('../modules/alltokens');
const { ethers } = require("ethers");


const INFURA_ID = process.env.INFURA_ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main();


const router=express.Router();


router.post('/',(req,res)=>{

let network=req.body.network
let chain=req.body.chain
let address=req.body.address


let metadata=[]

let eachmetadata=tokens.load(network,chain)



res.send(eachmetadata);


});




