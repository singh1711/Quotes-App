const express = require('express');
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const quotesRoutes = require("./apis/quotesRoutes");
const cors = require('cors'); //for cross origin error

mongoose
.connect('mongodb://127.0.0.1:27017/quotes')
.then(function(){
    console.log("DB connected")
})
.catch((err)=>{
    console.log("Error in DB" , err)
})

app.use(cors({
    origin:["http://localhost:5173"],
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to backend");
})

app.use(quotesRoutes);

//seedDB();

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Backend Server connected at Port: ${PORT}`);
});