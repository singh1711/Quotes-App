const express = require("express");
const Quotes = require("../models/Quotes");
const router = express.Router();

// to see all quotes
router.get('/allquotes',async (req, res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:"something went wrong..."});
    }
})

// to add quotes
router.post('/addquotes', async (req,res)=>{
    try{
        let {author, text} = req.body;
        let newQuote = await Quotes.create({author,text});
        console.log(newQuote,"newQuote");
        res.status(201).json({msg:"New Quote create successfully"});
    }
    catch(e){
        res.status(400).json({msg:"somehting webnt wrong while creating..."})
    }
    
})

router.get('/quotes/:id',async (req, res)=>{
    let quote = await Quotes.findById(req.params.id);
    res.status(200).json(quote);
})

module.exports = router;