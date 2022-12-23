const axios = require("axios");
const database=require('./connectdb')

async function manualAdd(num){

    let share_counter=await database.getSettings('share_counter')
    let today=await database.getSettings('today')
    
    let new_share_counter=share_counter+num
    let new_today=today+num
    
    
   let result= await database.settingsModel.updateOne(
        { update_name: 'first_update' },
        {
          $set: {
           share_counter:new_share_counter,
           today:new_today
          },
        }
      );

      return result

}

module.exports.manualAdd=manualAdd


