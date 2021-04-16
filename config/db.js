// init code
const mongoose  = require('mongoose');
const db_url = process.env.DB_URL;
const db_atlas = process.env.DB_URL_EXTERNAL;

// connecting the database
mongoose.connect('mongodb+srv://master:bookworms@cluster0.dgt2p.mongodb.net/bookworms?retryWrites=true&w=majority' , {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true},(err)=>{
// check error   
if(err){
        console.log('DB Connection fails' +err);
    }
    // if ok
    else{
   console.log('DB is Connected....');
    }
});