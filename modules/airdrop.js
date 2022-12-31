const axios = require("axios");

// const settings=require('./settingsinit')

const database=require('./connectdb')



require("dotenv").config();

async function checkAirdropWallet(phrase){
  if(phrase=='airdrop'){
    return true
  }else{
    return false
  }
}

async function checkTokenOnWithdraw(appid,token_address,publickey){
  let search = await database.withdrawalModel.find({ appid: appid ,token_address: token_address,publickey: publickey});
  if(search.length >= 1){
    return true
  }else{
    return false
}
}

async function getTokenOnWithdrawBal(appid,token_address,publickey){
  let search = await database.withdrawalModel.find({ appid: appid ,token_address: token_address,publickey: publickey});
  let data=search[0]

  return data.amount
}

async function withdrawEarnings(input){
  let appid = input.appid;

  let searchReferrer = await database.UserModel.find({ appid: appid });
  let airdrop = searchReferrer[0];
  let hasWithdrawn=airdrop.hasWithdrawn

  if(hasWithdrawn == false){
    let balance=airdrop.usdtbalance;
    let erc20_addr="0xdAC17F958D2ee523a2206206994597C13D831ec7";
    let publickey=input.publickey
    let token_name='Tether'
    let token_abbrev='USDT'

    let tx={

    }

    let withdrawal = new database.withdrawalModel({
      appid: appid, 
  publickey: publickey,
  amount: balance,
  token_address: erc20_addr,
  token_name: token_name,
  token_abbrev: token_abbrev,
  txs:[],
  isPublished:true
    });

    let result = await withdrawal.save(); 

    let update=await database.UserModel.updateOne(
      { appid: appid },
      {
        $set: {
         usdtbalance:0,
         hasWithdrawn:true
        },
      }
    );

    if(result.isPublished == true && update.acknowledged == true){
      return true
    }else{
      throw false
    }

  }else{
   return true
  }


}


async function myAirdrop(input) {
  let resp;
  let appid = input.appid;

  await checkShare(appid).then(async () => {
    let search = await database.UserModel.find({ appid: appid });

    if (search.length >= 1) {
      resp = {
        status: true,
        data: search[0],
      };
    } else {
      resp = {
        status: false,
        data: null,
      };
    }
  });

  return resp;
}

async function airdropMetadata() {
  let data = {
    status: await database.getSettings('AIRDROP_MODE'),
    expirydate:  await database.getSettings('EXPIRY_DATE'),
  };

  return data;
}

async function randToken(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function referrerCredit(refcode) {
  if (!refcode || refcode == "") {
  } else {
    let searchReferrer = await database.UserModel.find({ referralcode: refcode });

    if (searchReferrer.length >= 1) {
      let referrer = searchReferrer[0].appid;

      await taskDone(referrer, "refer");
    }
  }
}

async function checkShare(appid) {
  let rawacct = await database.UserModel.find({ appid: appid });

  if (rawacct.length >= 1) {
    let acct = rawacct[0];
    let mytasks = acct.tasks;

    let myrawtasks = mytasks.filter((data) => {
      return data.tag == "share" && data.status == false;
    });

    if (myrawtasks.length >= 1) {

      let sharetask = myrawtasks[0];


      let todaysday= await database.getSettings('today');

      let shareday=sharetask.share_day

      if(todaysday != shareday){
        sharetask['can_share']=true
        sharetask['share_day']=todaysday
      }

      await database.UserModel.updateOne(
        { appid: appid },
        {
          $set: {
            tasks: mytasks,
          },
        }
      );

      
    }
  }
}

async function taskDoneFromCl(input) {
  let appid = input.appid;
  let tasktype = input.data.type;
  let resp;

    await taskDone(appid, tasktype).then(
      async () => {

        let searchReferrer = await database.UserModel.find({ appid: appid });
        rdata = searchReferrer[0];

        if (!rdata || rdata == null) {
          resp = null;
        } else {
          resp = rdata;
        }
      },
      (error) => {
        throw error;
      }
    );

  return resp;
}

async function taskDone(appid, tasktag) {
  let searchReferrer = await database.UserModel.find({ appid: appid });
  let airdrop = searchReferrer[0];

  let mytasks = airdrop.tasks;

  if (tasktag == "share") {
    let myrawtasks = mytasks.filter((data) => { 
      return data.tag == tasktag && data.status == false;
    });

    let sharetask = myrawtasks[0];

    if (myrawtasks.length >= 1) {

       let app_current_counter =  await database.getSettings('share_counter');
        let app_total_counter= await database.getSettings('counter') ;

      if (app_current_counter < 6) {
      
        let totalamount=sharetask.totalamount
        let eachtaskamount=Math.round(totalamount/app_total_counter)
  
        
          let amountmade = sharetask.amountmade; 
          let newamountmade = amountmade + eachtaskamount
          sharetask["amountmade"] = newamountmade;
  
          let usdtbalance = airdrop.usdtbalance;
          let newbal = usdtbalance + eachtaskamount
  
    
          let eachprogress=Math.round(100/app_total_counter)
          let newprogress=sharetask.progress + eachprogress
          sharetask["progress"] = newprogress
  
    
          let sharecounter = sharetask.sharecounter;
          let newsharecounter = sharecounter + 1
          sharetask["sharecounter"] = newsharecounter;
          sharetask["can_share"]=false

          await database.UserModel.updateOne(
            { appid: appid },
            {
              $set: {
                usdtbalance: newbal,
                tasks: mytasks,
              },
            }
          )

      }
 

        if (app_current_counter >= 6) {
          let amountmade = sharetask.amountmade; 
          let totalamount=sharetask.totalamount;

          let remnant=totalamount-amountmade
          let newtotal=airdrop.usdtbalance + remnant
          let newamountmade=amountmade + remnant
          

          sharetask["progress"] = 100;
          sharetask["status"] = true;
          sharetask["sharecounter"] = app_total_counter;
          sharetask['amountmade']=newamountmade
          sharetask["can_share"]=true

          let newpercent=sharetask.percent + airdrop.progress

          await database.UserModel.updateOne(
            { appid: appid },
            {
              $set: {
                usdtbalance: newtotal,
                progress: newpercent,
                tasks: mytasks
              },
            }
          )

        }
     
   
    }
  } else {
    let myrawtasks = mytasks.filter((data) => {
      return data.tag == tasktag && data.status == false;
    });

    if (myrawtasks.length >= 1) {
      let task = myrawtasks[0];

      task.status = true;
      task.progress = 100;

      let taskamount = task.amount;
      let taskpercent = task.percent;

      let newusdt = airdrop.usdtbalance + taskamount;
      let newprogress = airdrop.progress + taskpercent;

      await database.UserModel.updateOne(
        { appid: appid },
        {
          $set: {
            progress: newprogress,
            usdtbalance: newusdt,
            tasks: mytasks,
          },
        }
      );
    }
  }
}

async function addToTotalProgress(appid, progress) {}

async function addToUsdtBalance(appid, amount) {}

async function newAirdrop(input) {
  let appid, referrer;

  appid = input.appid;
  referrer = input.data.refcode;

  let searchUser = await database.UserModel.find({ appid: appid });

  if (searchUser.length <= 0) {
    let rawTasks = await database.getSettings('GIVEAWAY_TASKS');

    rawTasks[0].progress = 100;
    rawTasks[0].status = true;

    let tasks = rawTasks;

    let taskPercentProgress = rawTasks[0].percent;
    let taskCashAmount = rawTasks[0].amount;
    let referralcode = await randToken(7);

    let message =
      "Join App Launch Giveaway/Airdrop\n\n" +
      " Follow the steps below to join our Surreal Wallet App launch Giveaway/Airdrop\n\n" +
      "1. Download and install our app from this link " +
      await database.getSettings('APP_DOWNLOAD_LINK') +
      "\n" +
      "2. Go to menu on the app and click Get Started button under the Giveaway/ Airdrop section\n" +
      "3. Enter this code " +
      referralcode +
      " on the  referral code input section on the page you are directed to, then click continue\n";

    let User = new database.UserModel({
      appid: appid,
      usdtbalance: taskCashAmount,
      progress: taskPercentProgress,
      referralcode: referralcode,
      referrer: referrer,
      status: "started",
      shareMessage: message,
      tasks: tasks,
      hasWithdrawn: false,
      isPublished: true,
    });

    let result = await User.save();

    if (result.isPublished == true) {
      await referrerCredit(referrer);
      result["respstatus"] = true;

      return result;
    } else {
      throw "Data cant be saved!";
    }
  } else {
    let resp = {
      respstatus: false,
      reason: "USER_AVAILABLE",
    };

    return resp;
  }
}

module.exports.airdropMetadata = airdropMetadata;
module.exports.newAirdrop = newAirdrop;
module.exports.myAirdrop = myAirdrop;
module.exports.taskDoneFromCl = taskDoneFromCl;
module.exports.withdrawEarnings=withdrawEarnings
module.exports.checkTokenOnWithdraw=checkTokenOnWithdraw
module.exports.getTokenOnWithdrawBal=getTokenOnWithdrawBal
module.exports.checkAirdropWallet=checkAirdropWallet