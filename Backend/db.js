const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/inotebook";

const connectToMongo = async()=>{
    try{
    await mongoose.connect(mongoURL);
    console.log("DB Connected Successfully");
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}
module.exports=connectToMongo;