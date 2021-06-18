import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../axios';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

function Row({title, fetchURI, isNetflix}) {
    let [movies, setMovies]=useState([]);
    let [trailer, setTrailer]=useState('');
    const imageUrl="https://image.tmdb.org/t/p/w500";

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect(()=>{
        async function fetchData(){
            let request=await axios.get(fetchURI);
            setMovies(request.data.results);    
        }
        fetchData();
    }, [fetchURI])

    const handleTrailer=(movie)=>{
            if(trailer){
                setTrailer("");
            }else{
            MovieTrailer(movie?.title || movie?.name)
            .then(url=>{
                if(url==null){
                    alert('Sorry no official trailer found for this movie')
                }else{
                    let parms=new URLSearchParams(new URL(url).search);
                    setTrailer(parms.get("v"));
                }
               
            }).catch(err=>{
                console.log(err);
            })
        }
        
    }

    return (
        <div className="row">
             <h1>{title}</h1>
            <div className="row__posters">
                {
                    movies.map((movie)=>{
                        return (
                            <img
                            key={movie?.id} 
                            className={`row__poster ${isNetflix && 'row__poster_large'}`}
                            src={imageUrl+movie?.poster_path}
                            alt={movie?.title}
                            onClick={()=>handleTrailer(movie)}
                            />
                        )
                    })
                }
            </div>
            {trailer?<YouTube videoId={trailer} opts={opts}/>:''}
        </div>
    )
}

export default Row
