const axios = require('axios');
require('dotenv').config()


async function airdropMetadata(){
let data={
    status:process.env.AIRDROP_MODE,
    expirydate:process.env.EXPIRY_DATE
}

return data

}


module.exports.airdropMetadata=airdropMetadata