const axios = require('axios');

const database=require('mongoose')

database.connect('mongodb://localhost/airdrop')
.then(()=>{
console.log('Connected To DB..');
},
(error)=>{
    console.log('Error Occurred when connecting to DB..',error);
})




module.exports.database=database


require('dotenv').config()


async function airdropMetadata(){
let data={
    status:process.env.AIRDROP_MODE,
    expirydate:process.env.EXPIRY_DATE
}

return data

}

async function randToken(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

async function newAirdrop(input){

    const userSchema= new database.Schema({
        appid: String,
        usdtbalance: Number,
        referralcode:String,
        referrer:String,
        status:String,
        progress:Number,
        tasks: [{taskname:String,progress:String}],
        date: {type: Date, default: Date.now},
        hasWithdrawn: Boolean,
        isPublished: Boolean
    })

    let appid,refferrer
    
    appid=input.appid
    refferrer=input.data.refcode

    tasks=[]

    const UserModel=database.model('User',userSchema);

    let User=new UserModel({
        appid: appid,
        usdtbalance:0,
        progress:0,
        referralcode:await randToken(6),
        referrer: refferrer,
        status: 'started',
        tasks: tasks,
        hasWithdrawn:false,
        isPublished:true
    })


    let result=await User.save()

    console.log(result)

}


module.exports.airdropMetadata=airdropMetadata
module.exports.newAirdrop=newAirdrop