// username:koulvidhi2
// password:nYTUp2AU0RheBh9N
const mongoose=require("mongoose");
const db="mongodb+srv://koulvidhi2:nYTUp2AU0RheBh9N@portfoliocluster.u7lzj.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfoliocluster"
// require("./db/conn");
mongoose.connect(db,
    {
        // useCreateIndex:true,
        // useFindModify:false,
        useNewUrlParser:true,
        // useUnifiedTopolgy:true
    }).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));

