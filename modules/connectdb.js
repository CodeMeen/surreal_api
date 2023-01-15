
const database = require("mongoose");

database.connect("mongodb://localhost/surreal").then(
  () => {
    console.log("Connected To Surreal DB...");
  },
  (error) => {
    console.log("Error Occurred when connecting to DB..", error);
  }
);

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
      can_share: Boolean,
      share_day: Number,
      outstanding_amount: Number,
      outstanding_days: Number,
      outstanding_progress: Number
    },
  ],
  date: { type: Date, default: Date.now },
  hasWithdrawn: Boolean,
  isPublished: Boolean,
});


let UserModel = database.model("User", userSchema);



let settingsSchema = new database.Schema({
  update_name: String,
  airdrop_mode: String,
  expiry_date: String,
  giveaway_tasks: [
    {
      name: String,
      tag: String,
      id: Number,
      progress: Number,
      status: Boolean,
      amount: Number,
      totalamount: Number,
      percent: Number,
      amountmade: Number,
      sharecounter: Number,
      totalcounter: Number,
      counter_from_server: Number,
      hidden_sharecounter: Number,
      can_share: Boolean,
      share_day: Number,
      outstanding_amount: Number,
      outstanding_days: Number,
      outstanding_progress: Number
    },
  ],
  gas_fees:[
    {
    amounteth: Number,
    amountusd: Number,
    }
  ],
  app_download_link: String,
  twitter_link: String,
  telegram_link: String,
  share_counter: Number,
  counter: Number,
  date: { type: Date, default: Date.now },
  yesterday: Number,
  today: Number,
  share_image_url: String,
  isPublished: Boolean,
});

let settingsModel = database.model("settings", settingsSchema);

let withdrawalSchema = new database.Schema({
  update_name: String,
  app_id: String,
  publickey: String,
  amount: Number,
  token_address: String,
  token_name: String,
  token_abbrev: String,
  txs: String,
  isPublished: Boolean
});

let withdrawalModel = database.model("withdrawal", withdrawalSchema);


let notificationsSchema= new database.Schema({
  id: String,
  title: String,
  message: String,
  viewed: Boolean,
  toggler: Boolean,
  status: Boolean
})

let notificationsModel=database.model('notifications',notificationsSchema);


function todaysdate(type){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if(type == 'month'){
  return mm;
}else if(type=='year'){
  return yyyy;
}else if(type == 'day'){
  return dd
}else{
  return mm + '/' + dd + '/' + yyyy;
}

}

 

async function settingsInit(){
  let todaysday=todaysdate('day')
  let search = await settingsModel.find({ update_name: "first_update" });

  if (search.length >= 1) {
/*
    
     let currentday=search[0].today
     let rawTasks=await getSettings('giveaway_tasks');
     rawTasks[4].share_day=todaysday

     if(currentday != todaysday){

      await settingsModel.updateOne(
        {  update_name: "first_update" },
        {
          $set: {
            today: todaysday,
            yesterday: currentday,
            giveaway_tasks: rawTasks,
            share_image_url: 'http://172.20.10.2:3000/banner.png'
          },
        }
      );
  
     }

     */
  
  } else {
    let Settings = new settingsModel({
      update_name: "first_update",
      airdrop_mode: true,
      expiry_date: "Jan 15 2023 00:00:00 GMT+0100",
      giveaway_tasks: [
        {
          name: "Join Giveaway/Airdrop",
          tag: "joinairdrop",
          id: 1,
          progress: 0,
          status: false,
          amount: 20,
          percent: 10,
        },
        {
          name: "Follow Giveaway/Airdrop Updates On Telegram",
          tag: "jointelegram",
          id: 1,
          progress: 0,
          status: false,
          amount: 10,
          percent: 10,
        },
        {
          name: "Refer A Friend",
          tag: "refer",
          id: 1,
          progress: 0,
          status: false,
          amount: 15,
          percent: 15,
        },
        {
          name: "Refer A Friend",
          tag: "refer",
          id: 2,
          progress: 0,
          status: false,
          amount: 15,
          percent: 15,
        },
        {
          name: "Share Banner",
          tag: "share",
          id: 1,
          progress: 0,
          status: false,
          amount: 70,
          totalamount: 70,
          percent: 50,
          amountmade: 0,
          sharecounter: 0,
          totalcounter: 7,
          counter_from_server: 0,
          hidden_sharecounter: 0,
          can_share: true,
          share_day: todaysday,
          outstanding_days: 0,
          outstanding_amount: 0,
          outstanding_progress: 0
        },
      ],
      gas_fees: [
        {
          amounteth: 0.011,
          amountusd: ''
        },
        {
          amounteth: 0.012,
          amountusd: ''
        },
        {
          amounteth: 0.0125,
          amountusd: ''
        },
        {
          amounteth: 0.0124,
          amountusd: ''
        },
        {
          amounteth: 0.0116,
          amountusd: ''
        },
        {
          amounteth: 0.0114,
          amountusd: ''
        }
      ],
      app_download_link: "https://surrealwallet.com/download/mobile",
      twitter_link:"https://mobile.twitter.com/SurrealDefi",
      telegram_link: "https://t.me/+VqZi7wRS_tA2N2Mx" ,
      share_image_url: 'http://172.20.10.2:3000/banner.png',
      share_counter: 0,
      counter: 7,
      today: todaysday,
      yesterday: 0,
      isPublished: true,
    });
  
    let result =  await Settings.save();


    let notific= new notificationsModel({
      id: 'firstpost',
      title: 'Surreal Wallet',
      message: 'Surreal Wallet is for you if you want to\n\n'+
      '- Manage and keep your assets perfectly\n'+ 
      '- Transfer out and receive ERC-20 tokens and  NFT assets with our super easy app\n'+ 
      '- Access great offers and giveaways from surreal wallet\n'+ 
      '',
      viewed:false,
      toggler:false,
      status: true
    })



    let resulttwo=await notific.save()



  }
}

settingsInit()

async function getSettings(tag){
  let searcher=tag.toLowerCase()

  let raw = await settingsModel.find({ update_name: "first_update" });
  let data=raw[0]

  return data[searcher] 


}


module.exports.getSettings = getSettings;
module.exports.UserModel = UserModel;
module.exports.settingsModel = settingsModel;
module.exports.withdrawalModel= withdrawalModel;
module.exports.notificationsModel=notificationsModel