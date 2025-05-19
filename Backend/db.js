const mongoose=require('mongoose');
const mongoURL = "mongodb+srv://rawatayush004:<db_password>@cluster0.p9cbgy0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 


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