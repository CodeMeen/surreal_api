const axios = require('axios');
require('dotenv').config()


async function airdropStatus(){
        return process.env.AIRDROP_MODE
}


module.exports.airdropStatus=airdropStatus