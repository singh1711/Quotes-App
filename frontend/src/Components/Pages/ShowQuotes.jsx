import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ShowQuotes() {
    let [quote , setQuote] = useState({author:"" , text:"" });
    let params = useParams();
    useEffect(()=>{
        async function fetchQuote(){
            let res = await axios.get(`http://localhost:8000/quotes/${params.id}`);
            let{author , text } = res.data;
            console.log(author);
            console.log(text);
            setQuote({author,text});    
        }
        fetchQuote();
    },[])
  return (
    <div>
        <h2>{quote.text}</h2>
        <p>{quote.author}</p>
    </div>
  )
}

export default ShowQuotes