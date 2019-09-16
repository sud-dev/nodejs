const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/sampledb',{ useNewUrlParser: true },(err)=> {
if(!err){
console.log('Mongodb Connection Successful');
}
else{
    console.log('Mongodb Connection Error :' + JSON.stringify(err,undefined,2));
}

});
mongoose.set('useFindAndModify', false);
module.exports=mongoose;