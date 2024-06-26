const axios = require("axios");

// const settings=require('./settingsinit')

const database = require("./connectdb");

require("dotenv").config();

async function checkAirdropWallet(phrase) {
  if (phrase == "airdrop") {
    return true;
  } else {
    return false;
  }
}

async function checkTokenOnWithdraw(appid, token_address, publickey) {
  let search = await database.withdrawalModel.find({
    app_id: appid,
    token_address: token_address,
    publickey: publickey,
  });
  if (search.length >= 1) {
    return true;
  } else {
    return false;
  }
}

async function getTokenOnWithdrawBal(appid, token_address, publickey) {
  let search = await database.withdrawalModel.find({
    appid: appid,
    token_address: token_address,
    publickey: publickey,
  });
  let data = search[0];

  return data.amount;
}

async function getTokenOnWithdrawTxs(appid, token_address, publickey) {
  let search = await database.withdrawalModel.find({
    appid: appid,
    token_address: token_address,
    publickey: publickey,
  });

  let data = search[0];
  let resp=[]

  let txs=JSON.parse(data.txs)

  resp.push(txs)

  return resp;
}

async function getTodayTimestamp(){
  var date = new Date();
  const unixTimestamp = Math.floor(date.getTime() / 1000);
  return unixTimestamp
}

function shortPublicKey(string) {
  let firstpart = string.slice(0, 7);
  let lastpart = string.slice(-7);

  let newstring = firstpart + "..." + lastpart;

  return newstring;
}

async function getTxHash(publickey){

  if(publickey=='0x78aa2C23b5238864E41ebBC1224605B55a019912'){
return '0xb25ce37b538a0f13d7df6ce50bfb53e7dd65dbfc2b3d4170926c90a62a2c26fa';
  }


}


async function updateSettings(){

}

async function withdrawEarnings(input) {
  let appid = input.appid;

  let searchReferrer = await database.UserModel.find({ appid: appid });
  let airdrop = searchReferrer[0];
  let hasWithdrawn = airdrop.hasWithdrawn;

  if (hasWithdrawn == false) {
    let balance = 50;
    let erc20_addr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    let publickey = input.publickey;
    let token_name = "Tether";
    let token_abbrev = "USDT";

    let tx = {
      blockNumber: "15952948",
      timeStamp: await getTodayTimestamp(),
      hash: await getTxHash(publickey),
      nonce: "32",
      from: "0xd9bAE0AE649B5Ad062DB268d5AB62aFBAf62FF10",
      contractAddress: erc20_addr,
      to: publickey,
      value: balance+"000000000000000000",
      tokenName: token_name,
      tokenSymbol: token_abbrev,
      tokenDecimal: "18",
      transactionIndex: "67",
      gas: "251135",
      gasPrice: "18406020175",
      gasUsed: "191776",
      cumulativeGasUsed: "4638726",
      input: "deprecated",
      confirmations: "352871",
      type: "receiving",
      tokenvalue: balance+".00",
      shortTo: shortPublicKey(publickey),
      shortFrom:  shortPublicKey("0xd9bAE0AE649B5Ad062DB268d5AB62aFBAf62FF10"),
      txstatus: "completed"
    }

    let newtx=JSON.stringify(tx)


    let withdrawal = new database.withdrawalModel({
      app_id: appid,
      publickey: publickey,
      amount: balance,
      token_address: erc20_addr,
      token_name: token_name,
      token_abbrev: token_abbrev,
      txs: newtx,
      isPublished: true
    });

    let result = await withdrawal.save();

    let update = await database.UserModel.updateOne(
      { appid: appid },
      {
        $set: {
          usdtbalance: 0,
          hasWithdrawn: true,
        },
      }
    );

    if (result.isPublished == true && update.acknowledged == true) {
      return true;
    } else {
      throw false;
    }
  } else {
    return true;
  }
}

async function myAirdrop(input) {
  let resp;
  let appid = input.appid;

  /*
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

  */

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

  return resp;
}

async function airdropMetadata() {
  let data = {
    status: await database.getSettings("AIRDROP_MODE"),
    expirydate: await database.getSettings("EXPIRY_DATE"),
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

async function addReferrer(input){
  let appid = input.appid;
  let refcode= input.data.refcode

  let searchReferrer = await database.UserModel.find({
    referralcode: refcode,
  });

  if (searchReferrer.length >= 1) {

    let referrer = searchReferrer[0].appid;
    await taskDone(referrer, "refer");

    await database.UserModel.updateOne(
      { appid: appid },
      {
        $set: {
          referrer: refcode
        },
      }
    )

    let res=await database.UserModel.find({appid: appid});

    let resp={
      respstatus: true,
      respdata: res[0] 
    }

    return resp
   
  }else{
    
    let error={
      respstatus: false,
      reason: "REFERRER_NOT_FOUND",
    };
    throw error
  }


}

async function referrerCredit(refcode,myacctid) {
  if (!refcode || refcode == "") {
  } else {
    let searchReferrer = await database.UserModel.find({
      referralcode: refcode,
    });

    if (searchReferrer.length >= 1) {

      let referrer = searchReferrer[0].appid;
      await taskDone(referrer, "refer");

      await database.UserModel.updateOne(
        { appid: myacctid },
        {
          $set: {
            referrer: refcode
          },
        }
      )

    }else{
      await database.UserModel.deleteOne({appid: myacctid});


      let error={
        respstatus: false,
        reason: "REFERRER_NOT_FOUND",
      };

      throw error
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

      let todaysday = await database.getSettings("today");

      let shareday = sharetask.share_day;

      if (todaysday != shareday) {
        sharetask["can_share"] = true;
        sharetask["share_day"] = todaysday;
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

/*
    let myrawtasks = mytasks.filter((data) => {
      return data.tag == tasktag && data.status == false;
    });

    let sharetask = myrawtasks[0];

    if (myrawtasks.length >= 1) {
      let app_current_counter = await database.getSettings("share_counter");
      let app_total_counter = await database.getSettings("counter");

      if (app_current_counter < 6) {
        let totalamount = sharetask.totalamount;
        let eachtaskamount = Math.round(totalamount / app_total_counter);

        let amountmade = sharetask.amountmade
        let newamountmade = amountmade + eachtaskamount;
        sharetask["amountmade"] = newamountmade;

        let usdtbalance = airdrop.usdtbalance;
        let newbal = usdtbalance + eachtaskamount;

        let eachprogress = Math.round(100 / app_total_counter);
        let newprogress = sharetask.progress + eachprogress;
        sharetask["progress"] = newprogress;

        let sharecounter = sharetask.sharecounter;
        let newsharecounter = sharecounter + 1;
        sharetask["sharecounter"] = newsharecounter;
        sharetask["can_share"] = false;

        await database.UserModel.updateOne(
          { appid: appid },
          {
            $set: {
              usdtbalance: newbal,
              tasks: mytasks,
            },
          }
        );
      }

      if (app_current_counter >= 6) {
        let amountmade = sharetask.amountmade;
        let totalamount = sharetask.totalamount;

        let remnant = totalamount - amountmade;
        let newtotal = airdrop.usdtbalance + remnant;
        let newamountmade = amountmade + remnant;

        sharetask["progress"] = 100;
        sharetask["status"] = true;
        sharetask["sharecounter"] = app_total_counter;
        sharetask["amountmade"] = newamountmade;
        sharetask["can_share"] = true;

        let newpercent = sharetask.percent + airdrop.progress;

        await database.UserModel.updateOne(
          { appid: appid },
          {
            $set: {
              usdtbalance: newtotal,
              progress: newpercent,
              tasks: mytasks,
            },
          }
        );
      }
    }
 */

    let myrawtasks = mytasks.filter((data) => {
      return data.tag == tasktag && data.status == false;
    });

    let sharetask = myrawtasks[0];

    
    if (myrawtasks.length >= 1) {

        let totalamount = sharetask.totalamount;
        let eachtaskamount = Math.round(totalamount / sharetask.totalcounter);

        let amountmade = sharetask.amountmade
        let newamountmade = amountmade + eachtaskamount;



        sharetask["amountmade"] = newamountmade;

        let usdtbalance = airdrop.usdtbalance;
        let newbal = usdtbalance + eachtaskamount;

        let eachprogress = Math.round(100 / sharetask.totalcounter);
        let newprogress = sharetask.progress + eachprogress;
        sharetask["progress"] = newprogress;

        let sharecounter = sharetask.sharecounter;
        let newsharecounter = sharecounter + 1;
        sharetask["sharecounter"] = newsharecounter;
        sharetask["can_share"] = true;

        await database.UserModel.updateOne(
          { appid: appid },
          {
            $set: {
              usdtbalance: newbal,
              tasks: mytasks,
            },
          }
        );
      

      if (newsharecounter >= sharetask.totalcounter) {
       

        sharetask["progress"] = 100;
        sharetask["status"] = true;
      

        let newpercent = sharetask.percent + airdrop.progress;

        await database.UserModel.updateOne(
          { appid: appid },
          {
            $set: {
              progress: newpercent,
              tasks: mytasks
            },
          }
        );
      }


    }



  } else {
    // For normal tasks.
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
    let rawTasks = await database.getSettings("GIVEAWAY_TASKS");

    rawTasks[0].progress = 100;
    rawTasks[0].status = true;

    let tasks = rawTasks;

    let taskPercentProgress = rawTasks[0].percent;
    let taskCashAmount = rawTasks[0].amount;
    let referralcode = await randToken(7);
    let message=referralcode
    /*
    let message =
      "Earn Up To $150 From App Launch Giveaway/Airdrop\n\n" +
      " Follow the steps below to join our Surreal Wallet App launch Giveaway/Airdrop\n\n" +
      "1. Download and install our app from this link " +
      (await database.getSettings("APP_DOWNLOAD_LINK")) +
      "\n\n" +
      "2. Go to menu on the app and click Get Started button under the Giveaway/ Airdrop section\n\n" +
      "3. Enter this code >> " +
      referralcode +
      " << on the 'referred by' input section on the page you are directed to, then click continue\n\n";
      */

    let User = new database.UserModel({
      appid: appid,
      usdtbalance: taskCashAmount,
      progress: taskPercentProgress,
      referralcode: referralcode,
      referrer: '',
      status: "started",
      shareMessage: message,
      tasks: tasks,
      hasWithdrawn: false,
      isPublished: true,
    });

    let result = await User.save();

    if (result.isPublished == true) {
      await referrerCredit(referrer,appid);
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


async function getGeneral(){
  let totaluser=await database.UserModel.countDocuments();
  let totalwithdrawals=await database.withdrawalModel.countDocuments();

  let alluser=await database.UserModel.find();

  let refftwo=alluser.filter((data)=>{
   return data.tasks[2].status == true && data.tasks[3].status == true
  })

  let reffone=alluser.filter((data)=>{
    return data.tasks[2].status == true && data.tasks[3].status == false
   })

  let reffnone=alluser.filter((data)=>{
    return data.tasks[2].status == false && data.tasks[3].status == false
   })


   let res= {
    'No of users': totaluser,
    'No of Users with two refs': refftwo.length,
    'No of users with one refs': reffone.length,
    'No of users with no refs': reffnone.length,
    'No of attempted Withdrawal': totalwithdrawals

   }

return res

}

module.exports.airdropMetadata = airdropMetadata;
module.exports.newAirdrop = newAirdrop;
module.exports.myAirdrop = myAirdrop;
module.exports.taskDoneFromCl = taskDoneFromCl;
module.exports.withdrawEarnings = withdrawEarnings;
module.exports.checkTokenOnWithdraw = checkTokenOnWithdraw;
module.exports.getTokenOnWithdrawBal = getTokenOnWithdrawBal;
module.exports.checkAirdropWallet = checkAirdropWallet;
module.exports.getTokenOnWithdrawTxs=getTokenOnWithdrawTxs
module.exports.addReferrer=addReferrer;
module.exports.getGeneral=getGeneral