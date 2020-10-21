
import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
    const [movie,setMovie] = useState([]);
    
    useEffect(()=>{
    async function fetchRequest(){
        const request = await axios.get(requests.fetchNetflixOrignals)
        console.log(request)
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
        return request
    }
    fetchRequest();
    },[])
    
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition:'center'
        }}>
            <div className="banner_contents">
                <h1>
                    {movie?.title || movie?.name || movie?.orignal_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List   </button>
                </div>
                <h2 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h2>
            </div>
            <div className="banner__fadeBottom"/>
            
        </header>
    )
}

export default Banner
