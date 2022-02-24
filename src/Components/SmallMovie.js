import React from 'react';
import '../App.css';
import { useState, useEffect } from "react";
import requests from "../request.js";
import axios from "axios";
const SmallMovie=({ title, fetchUrl, isLargeRow })=>
{
    const [trending, setTrending] = useState([]);
    const[romance,setRomance]=useState([]);
    const[fantasy,setFantasy]=useState([]);
    const[history,setHistory]=useState([]);
    const[toprated,setToprated]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/"
    useEffect(() => {
       
        axios.get(requests.fetchTrending).then((res)=>
        {
            const data=res.data.results;
            setTrending(data);
        })
        axios.get(requests.fetchRomanceMovies).then((res)=>
        {
            const data=res.data.results;
            setRomance(data);
        })
        axios.get(requests.fetchFantasyMovies).then((res)=>
        {
            const data=res.data.results;
            setFantasy(data);
        })
        axios.get(requests.fetchHistoryMovies).then((res)=>
        {
            const data=res.data.results;
            setHistory(data);
        })
        axios.get(requests.fetchTopRated).then((res)=>
        {
            const data=res.data.results;
            setToprated(data);
        })
      }, [fetchUrl]);
      
       
        
     
     
    //   useEffect(() => {
       
    //     axios.get(requests.fetchTopRated).then((res)=>
    //     {
    //         const data=res.data.results;
    //         setToprated(data);
    //     })
        
    //   }, [fetchUrl]);
      
return(
   <div>
    <div className="row">
        <h2>Trending Now</h2>
        <div className="row_posters">
            {
                trending.map((a)=>
                {
                    
                   return( <img className="row_poster small_movie" key={a.id}
                    src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                    // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
                     alt={a.name}/>)
                })
            }
           
        </div>
    </div>
    {/* <!-- TOP RATED --> */}
    <div className="row">
        <h2>Top Rated</h2>
        <div className="row_posters">
        {
                toprated.map((a)=>
                {
                    
                   return( <img className="row_poster small_movie" key={a.id}
                    src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                    // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
                     alt={a.name}/>)
                })
            }
           
        </div>
    </div>
    {/* <!-- Action Movies --> */}
    <div className="row">
        <h2>History</h2>
        <div className="row_posters">
        {
               history.map((a)=>
                {
                    
                   return( <img className="row_poster small_movie" key={a.id}
                    src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                    // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
                     alt={a.name}/>)
                })
            }
            {/* <img className="row_poster small_movie"src="../Images/small-movie1.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie2.jpg"/>
        
            <img className="row_poster small_movie"src="../Images/small-movie3.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie4.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie5.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie6.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie7.jpg"/> */}
            <img className="row_poster small_movie"src="../Images/small-movie8.jpg"/>
        </div>
    </div>
    {/* <!-- Horror Movies --> */}
    <div className="row">
        <h2>Fantasy Movies</h2>
        <div className="row_posters">
        {
                fantasy.map((a)=>
                {
                    
                   return( <img className="row_poster small_movie" key={a.id}
                    src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                    // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
                     alt={a.name}/>)
                })
            }
            {/* <img className="row_poster small_movie"src="../Images/small-movie1.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie2.jpg"/>
          
            <img className="row_poster small_movie"src="../Images/small-movie3.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie4.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie5.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie6.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie7.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie8.jpg"/> */}
        </div>
    </div>
    {/* <!-- Romance Movie --> */}
    <div className="row">
        <h2>Romance Movies</h2>
        <div className="row_posters">
        {
                romance.map((a)=>
                {
                    
                   return( <img className="row_poster small_movie" key={a.id}
                    src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                    // src={`${base_url}${ isLargeRow ? a.poster_path : a.backdrop_path}`}
                     alt={a.name}/>)
                })
            }
            {/* <img className="row_poster small_movie"src="../Images/small-movie1.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie2.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie3.jpg"/>
            
            <img className="row_poster small_movie"src="../Images/small-movie4.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie5.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie6.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie7.jpg"/>
            <img className="row_poster small_movie"src="../Images/small-movie8.jpg"/> */}
        </div>
    </div>
    </div>
)
}
export default SmallMovie;