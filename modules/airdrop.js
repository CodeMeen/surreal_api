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
    shareMessage:String,
    tasks: [
    {
    name: String,
    tag: String,
    id: Number,
    progress: Number,
    status: Boolean,
    amount: Number,
    percent: Number,
    totalamount:Number,
    totalpercent:Number,
    amountmade: Number,
    sharecounter: Number,
    totalcounter:Number,
    counter_from_server:Number,
    hidden_sharecounter:Number
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

 await checkShare(appid).then(async ()=>{
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
 })


 
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


async function checkShare(appid){

    let rawacct=await UserModel.find({appid: appid})

    if(rawacct.length >= 1){

        let acct=rawacct[0]
        let mytasks=acct.tasks
    
        let myrawtasks=mytasks.filter((data)=>{
            return data.tag=='share' && data.status==false
         })
    
         
    
         if(myrawtasks.length >= 1){
            
    
          let sharetask=myrawtasks[0]
    

          let app_sharecounter=process.env.SHARE_COUNTER

          if(app_sharecounter > sharetask.sharecounter){

            if(app_sharecounter > sharetask.hidden_sharecounter){
                sharetask['hidden_sharecounter']=app_sharecounter
            }

          }


          /*
    
          let app_share_counter=process.env.SHARE_COUNTER
    
          let currentday= Number(app_share_counter) - 1 
        
    
        sharetask['counter_from_server']=app_share_counter
    
        let subbz=process.env.COUNTER - process.env.SHARE_COUNTER

        console.log('Subbz',subbz)
        console.log('CurrentDay',currentday)

          if(currentday > subbz){
            let diff=currentday - sharetask.sharecounter
    
            let newtotalcounter = sharetask.totalcounter  - diff
    
            sharetask['totalcounter']=newtotalcounter
    
          }

          */
    
          await UserModel.updateOne({ appid: appid},
            {
                $set: {
                tasks: mytasks
                }
            })
    
         }
    }

}

async function taskDoneFromCl(input){
let appid=input.appid
let tasktype=input.data.type
let resp;

if(tasktype=='jointelegram'){
   await taskDone(appid,tasktype).then(async ()=>{

    let searchReferrer=await UserModel.find({appid: appid})
    rdata=searchReferrer[0]

    if(!rdata || rdata==null){
        resp=null
    }else{
        resp=rdata
    }
    
   },
   (error)=>{
    throw error
   })

}

return resp

}

async function taskDone(appid,tasktag){

    let searchReferrer=await UserModel.find({appid: appid})
    let airdrop=searchReferrer[0]

    let mytasks=airdrop.tasks


    if(tasktag == 'share'){

        let myrawtasks=mytasks.filter((data)=>{
            return data.tag==tasktag && data.status==false
         })

         if(myrawtasks.length >= 1){

          let sharetask=myrawtasks[0]

          let remfunds=sharetask.totalamount-sharetask.amountmade
          let divider= sharetask.totalcounter-sharetask.sharecounter

          let updateamount=remfunds/divider

          let usdtbalance=airdrop.usdtbalance
          let newbal=usdtbalance + updateamount

          let amountmade=sharetask.amountmade
          let newamountmade=amountmade + updateamount
          sharetask['amountmade']=newamountmade

          let sharecounter=sharetask.sharecounter
          let newsharecounter=sharecounter+1
          sharetask['sharecounter']=newsharecounter

          let rawprogress=(sharetask.sharecounter/sharetask.totalcounter) * 100

          let newprogress=sharetask.progress+Math.round(rawprogress)
          sharetask['progress']=newprogress

          let outprogress=airdrop.progress + ((rawprogress/100) * sharetask.percent)

          if(sharetask.sharecounter >= sharetask.totalcounter){
            sharetask['progress']=100
            sharetask['status']=true
          }

          await UserModel.updateOne({ appid: appid},
            {
                $set: {
                progress: outprogress,
                usdtbalance: newbal,
                tasks: mytasks
                }
            })

         } 


    }else{
    
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
            
            await UserModel.updateOne({ appid: appid},
                {
                    $set: {
                    progress: newprogress,
                    usdtbalance: newusdt,
                    tasks: mytasks
                    }
                })
    
        }

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
        let referralcode=await randToken(7)

        let message="Join App Launch Giveaway/Airdrop\n\n"+
        " Follow the steps below to join our Surreal Wallet App launch Giveaway/Airdrop\n\n"+
        
        "1. Download and install our app from this link "+process.env.APP_DOWNLOAD_LINK+"\n"  +
        "2. Go to menu on the app and click Get Started button under the Giveaway/ Airdrop section\n"+
        "3. Enter this code "+referralcode+" on the  referral code input section on the page you are directed to, then click continue\n"

       

  let User=new UserModel({
        appid: appid,
        usdtbalance:taskCashAmount,
        progress:taskPercentProgress,
        referralcode:referralcode,
        referrer: referrer,
        status: 'started',
        shareMessage: message,
        tasks: tasks,
        hasWithdrawn:false,
        isPublished:true
    })


    let result=await User.save()

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
module.exports.taskDoneFromCl=taskDoneFromCl