import React from 'react';
import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../request.js";

const Banner=()=>
{
    const[banner,setBanner]=useState([]);
    useEffect(() => {
       
        axios.get(requests.fetchNetflixOriginals).then((res)=>
        {
            console.log(res.data.results);
            const bannerData=res.data.results;
            setBanner(bannerData[Math.floor(Math.random()*bannerData.length-1)]);
        })
    }, []);
    console.log(banner);
    const turncate=(str,n)=>
    {
        return(str?.length>n? str.substr(0,n-1)+"...":str);
    }
return(
   
          <div className="banner" 
          style={{
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${banner?.backdrop_path}')`,
            backgroundSize: "cover",
            height: "400px",
            color: "white",
          }}>
        <div className="banner_contents">
            <div className="banner_title">
                {banner?.name}
            </div>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <div className="banner_description">{turncate(banner?.overview,100)}</div>
        </div>
        <div className="banner_fade"/>
    </div>
   
)
}
export default Banner;