const database=require('./connectdb')

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

async function cron(){
    let todaysday=todaysdate('day')

    let search = await database.settingsModel.find({ update_name: "first_update" });

    if (search.length >= 1) {
       let currentday=search[0].today
       let rawTasks=await database.getSettings('giveaway_tasks');
       rawTasks[4].share_day=todaysday

  
       if(currentday != todaysday){
  
        database.settingsModel.updateOne(
          {  update_name: "first_update" },
          {
            $set: {
              today: todaysday,
              yesterday: currentday,
              giveaway_tasks: rawTasks
            },
          }
        );
    
       }

    }

}

cron()
    

