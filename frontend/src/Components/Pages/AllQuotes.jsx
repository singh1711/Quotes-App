import React, { useEffect, useState } from 'react';
import axios from"axios";
import Quotes from '../quotes/Quotes';

function AllQuotes() {
  let [quotes,setQuotes] = useState([]);
  
  useEffect(function(){
    async function getQuotes(){
      const res = await axios.get("http://localhost:8000/allquotes");
      //console.log(res.data , "api sam");
      setQuotes(res.data);
    }
    getQuotes();

  },[])
  return (
    <div>
      <h1>AllQuotes</h1>
      <ul>
        {quotes.map((quotes , index)=>{
          return(<Quotes id={quotes._id} key={quotes._id} text={quotes.text} author={quotes.author}/>);
        })}
      </ul>
    </div>
  )
}

export default AllQuotes