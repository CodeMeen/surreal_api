const axios = require('axios');

const database=require('mongoose')

database.connect('mongodb://localhost/airdrop')
.then(()=>{
console.log('Connected To DB..');
},
(error)=>{
    console.log('Error Occurred when connecting to DB..',error);
})

let userSchema= new database.Schema({
    appid: String,
    usdtbalance: Number,
    referralcode:String,
    referrer:String,
    status:String,
    progress:Number,
    tasks: [
    {
        name: String,
    tag: String,
    id: Number,
    progress: Number,
    status: Boolean,
    amount: Number,
    percent: Number
    }
    ],
    date: {type: Date, default: Date.now},
    hasWithdrawn: Boolean,
    isPublished: Boolean
})

let UserModel=database.model('User',userSchema);



require('dotenv').config()


async function myAirdrop(input){
let resp
 let appid=input.appid

 let search=await UserModel.find({appid: appid})
 
 if(search.length >= 1){
resp={
    status:true,
    data: search[0]
}
 }else{
resp={
        status:false,
        data:null
    }

 }
 
return resp


}

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

async function referrerCredit(refcode){
    if(!refcode || refcode==''){

    }else{

        let searchReferrer=await UserModel.find({referralcode: refcode})

        if(searchReferrer.length >= 1){
           let referrer=searchReferrer[0].appid
           
           await taskDone(referrer,'refer')
            
        }      
    }
}

async function taskDone(appid,tasktag){

    let searchReferrer=await UserModel.find({appid: appid})
    let airdrop=searchReferrer[0]

    let mytasks=airdrop.tasks

    let myrawtasks=mytasks.filter((data)=>{
   return data.tag==tasktag && data.status==false
    })

    if(myrawtasks.length >= 1){
        
        let task=myrawtasks[0]

        task.status=true
        task.progress=100

        let taskamount=task.amount
        let taskpercent=task.percent

        let newusdt=airdrop.usdtbalance+taskamount
        let newprogress=airdrop.progress+taskpercent
        
        let update=await UserModel.updateOne({ appid: appid},
            {
                $set: {
                progress: newprogress,
                usdtbalance: newusdt,
                tasks: mytasks
                }
            })

    }
}

async function addToTotalProgress(appid,progress){

}

async function addToUsdtBalance(appid,amount){

}

async function newAirdrop(input){

    let appid,referrer
    
    appid=input.appid
    referrer=input.data.refcode

    let searchUser=await UserModel.find({appid: appid})

    if(searchUser.length <= 0){

       let rawTasks=JSON.parse(process.env.GIVEAWAY_TASKS)

        rawTasks[0].progress=100
        rawTasks[0].status=true
     
       
        let tasks=rawTasks

        let taskPercentProgress=rawTasks[0].percent
        let taskCashAmount=rawTasks[0].amount

  let User=new UserModel({
        appid: appid,
        usdtbalance:taskCashAmount,
        progress:taskPercentProgress,
        referralcode:await randToken(7),
        referrer: referrer,
        status: 'started',
        tasks: tasks,
        hasWithdrawn:false,
        isPublished:true
    })


    let result=await User.save()
    let resp;

  if(result.isPublished==true){
    await referrerCredit(referrer)
    result['respstatus']=true

    return result


  }else{

    throw 'Data cant be saved!'

  }

    }else{

        let resp={
            respstatus:false,
            reason:'USER_AVAILABLE'
        }

        return resp

    }

 
}


module.exports.airdropMetadata=airdropMetadata
module.exports.newAirdrop=newAirdrop
module.exports.myAirdrop=myAirdrop