const mongoose = require('mongoose');
const Quotes = require('./models/Quotes');

let dummyQuotes = [
    {
        author:"Samarth Vohra",
        text:"Aadmi ka jeevan sangarsh hai , haarna ya jeetna nahi"
    },
    {
        author:"Abhishek Kumar",
        text:"Sirf ek insaan se aapko pyar ho sakta hai"
    },
    {
        author:"Shubham Kumar",
        text:"Time , tides and js wait fore none"
    },
    {
        author:"jatin",
        text:"hard  times make men hard , and hard men make times easy"
    }
];
async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log("DB Seeded")
}
module.exports = seedDB;