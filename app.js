const express= require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
const userroutes=require("./routes/user");
require('dotenv').config();
const connectionString = `mongodb+srv://${process.env.DBADMIN}:${process.env.DBPASS}@cluster0.qi3tq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

const app = express()
const port = process.env.PORT || 8000 ;

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connection to MongoDB established.');
    } 
    catch (e) {
        console.log(e);
    }
};

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use('/api/user',userroutes);

app.get('/',(req,res)=>{
                    res.json({msg: "Welcome to Admin Dashboard!!!"})
})



app.listen(port, ()=>{
    console.log("Server is running on port", port)
    InitiateMongoServer();

})