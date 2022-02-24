import React from 'react';
import '../App.css';
import { useState, useEffect } from "react";
import requests from "../request.js";
import axios from "axios";
const LargeMovie=()=>
{
    const[original,setOriginal]=useState([]);
    const[trailer,setTrailer]=useState("");
    useEffect(() => {
       
        axios.get(requests.fetchNetflixOriginals).then((res)=>
        {
            const data=res.data.results;
            setOriginal(data);
        })
    }, []);
//     const opts={
//         height="390",
//         width:"100%",
//         palyerVars:{
//             autoplay:1,
//         }, 
//     }
//     const handleClick=(movie)=>
//     {
// if(trailerUrl)
//     }
return(
    <div className="row">
        <h2>NETFLIX ORIGINALS</h2>
    <div className="row_posters">
        {original.map((a)=>
        {
            return( <img className="row_posterr large_movie" key={a.id}
            src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
            // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
             alt={a.name}/>)
            // return 
            // {
            //     <img className="row_poster large_movie"src="./Images/large-movie1.jpg"alt="image not found"/>  
            // }
        })}
    {/* <img className="row_poster large_movie"src="./Images/large-movie1.jpg"alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie2.jpg" alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie3.jpg"alt="image not found"/>
  
    <img className="row_poster large_movie"src="./Images/large-movie4.jpg"alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie5.jpg"alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie6.jpg"alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie7.jpg"alt="image not found"/>
    <img className="row_poster large_movie"src="./Images/large-movie8.jpg"alt="image not found"/> */}
</div>
</div>
   
)
}
export default LargeMovie;