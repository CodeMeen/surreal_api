const axios = require("axios");

// const settings=require('./settingsinit')

const database=require('./connectdb')


/*

const database = require("mongoose");

database.connect("mongodb://localhost/airdrop").then(
  () => {
    console.log("Connected To Airdrop..");
  },
  (error) => {
    console.log("Error Occurred when connecting to DB..", error);
  }
);

*/

/*
let userSchema = new database.Schema({
  appid: String,
  usdtbalance: Number,
  referralcode: String,
  referrer: String,
  status: String,
  progress: Number,
  shareMessage: String,
  tasks: [
    {
      name: String,
      tag: String,
      id: Number,
      progress: Number,
      status: Boolean,
      amount: Number,
      percent: Number,
      totalamount: Number,
      totalpercent: Number,
      amountmade: Number,
      sharecounter: Number,
      totalcounter: Number,
      counter_from_server: Number,
      hidden_sharecounter: Number,
    },
  ],
  date: { type: Date, default: Date.now },
  hasWithdrawn: Boolean,
  isPublished: Boolean,
});

let database.UserModel = database.model("User", userSchema);
*/


require("dotenv").config();

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

      let app_current_counter =  await database.getSettings('share_counter');
      let app_total_counter= await database.getSettings('counter')

      let totalamount=sharetask.totalamount
      let eachtaskamount=totalamount/app_total_counter

      let eachprogress=Math.round(100/app_total_counter)

      let outstanding_days=app_current_counter-(sharetask.hidden_sharecounter+1)
      let outstanding_amount=outstanding_days*eachtaskamount
      let outstanding_progress=outstanding_days*eachprogress



      if(outstanding_days >= 1){
        sharetask["hidden_sharecounter"] = app_current_counter
        sharetask["outstanding_days"]=outstanding_days
        sharetask["outstanding_amount"]=outstanding_amount
        sharetask["outstanding_progress"]=outstanding_progress
      }

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

    if (myrawtasks.length >= 1) {
      let sharetask = myrawtasks[0];

      let app_current_counter =  await database.getSettings('share_counter');
      let app_total_counter= await database.getSettings('counter')

      let totalamount=sharetask.totalamount
      let eachtaskamount=Math.round(totalamount/app_total_counter)

      
        let amountmade = sharetask.amountmade; 
        let newamountmade = amountmade + eachtaskamount + sharetask.outstanding_amount;
        sharetask["amountmade"] = newamountmade;

        let usdtbalance = airdrop.usdtbalance;
        let newbal = usdtbalance + eachtaskamount + sharetask.outstanding_amount;

  
        let eachprogress=Math.round(100/app_total_counter)
        let newprogress=sharetask.progress + eachprogress + sharetask.outstanding_progress;
        sharetask["progress"] = newprogress

        let outprogress = airdrop.progress + Math.round(newprogress/2)
  
  
  
        let sharecounter = sharetask.sharecounter;
        let newsharecounter = sharecounter + 1 + sharetask.outstanding_days;
        sharetask["sharecounter"] = newsharecounter;

        let hidden_sharecounter = sharetask.hidden_sharecounter;
        let newhidden_sharecounter = hidden_sharecounter + sharetask.outstanding_days;
        sharetask["hidden_sharecounter"] = newhidden_sharecounter;

        sharetask["outstanding_days"]=0
        sharetask["outstanding_amount"]=0
        sharetask["outstanding_progress"]=0

        if (sharetask.sharecounter >= app_total_counter) {
           sharetask["progress"] = 100;
           sharetask["status"] = true;
         }

         sharetask["can_share"]=false

        await database.UserModel.updateOne(
          { appid: appid },
          {
            $set: {
              progress: outprogress,
              usdtbalance: newbal,
              tasks: mytasks,
            },
          }
        )

/*
      let remfunds = sharetask.totalamount - sharetask.amountmade;
      let correctcounter=sharetask.totalcounter - sharetask.hidden_sharecounter
      let divider = correctcounter - sharetask.sharecounter;

      let updateamount = Math.round(remfunds / divider);

      let usdtbalance = airdrop.usdtbalance;
      let newbal = usdtbalance + updateamount;

      let amountmade = sharetask.amountmade;
      let newamountmade = amountmade + updateamount;
      sharetask["amountmade"] = newamountmade;

      let sharecounter = sharetask.sharecounter;
      let newsharecounter = sharecounter + 1;
      sharetask["sharecounter"] = newsharecounter;

      let rawprogress = (sharetask.sharecounter / correctcounter) * 100;

      let newprogress = sharetask.progress + Math.round(rawprogress);
      sharetask["progress"] = newprogress;

      let outprogress =
        airdrop.progress + Math.round((rawprogress / 100) * sharetask.percent);

      if (sharetask.sharecounter >= correctcounter) {
       // sharetask["progress"] = 100;
       // sharetask["status"] = true;
      }

      sharetask["can_share"]=false

      
*/
   
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
