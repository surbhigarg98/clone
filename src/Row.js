import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl,islargeCover}) {
    const [movies,setMovies] = useState([])
    const [trailerUrl,setTrailerUrl] = useState('')
    useEffect(()=>{
    async function fetchRequest(){
        const request = await axios.get(fetchUrl)
        console.log(request)
        setMovies(request.data.results)
        return request;

    } 
    fetchRequest();
    },[fetchUrl])

    const opts={
        width:'100%',
        height:'390',
        playerVars:{
            autoplay:1,
        }
    }
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || " ")
            .then((url)=>{
              const urlParams = new URLSearchParams(new URL(url).search)
              setTrailerUrl(urlParams.get("v"))
            }).catch(error=>console.log(error))
        }
    }
    return (
        <div className="row">
           <h2>{title}</h2>
           <div className='row__post '>
               {movies.map(movie=>(
                   <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_posters ${islargeCover && 'row_posterLarge'}`} src={`${base_url}${islargeCover? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
               ))}
           </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row