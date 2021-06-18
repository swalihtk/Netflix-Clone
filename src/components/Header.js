import React, { useEffect, useState } from 'react'
import './Header.css';
import axios from '../axios';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

function Header({fetchURL}) {
    let [movie, setMovie] = useState();
    let [trailer, setTrailer]=useState('');
    useEffect(()=>{
        async function fetchData(){
            let request = await axios.get(fetchURL)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            console.log(request)
        }
        fetchData()
    }, [])
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    function tunckat(str, n){
        return str?.length>n?str.substr(0, n-1)+"...":str;
    }
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
    let imageUrl='https://image.tmdb.org/t/p/original'+movie?.backdrop_path
    return (
        <div className="header"
        style={{
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundImage:`url(${imageUrl})`
        }}
        >
            {trailer?<YouTube videoId={trailer} opts={opts}/>:''}
            <button className={trailer? 'youtube__exit':'youtube__exit__invisible '} onClick={()=>setTrailer('')}>Exit</button>
            <div className="header__items">
                <h1 className="header__title">{movie?.original_title || movie?.title }</h1>
                <div className="header__buttons">
                    <button className="header__button" onClick={()=>handleTrailer(movie)}>Watch Trailer</button>
                    <button className="header__button">My List</button>
                </div>
                <h1 className="header__discription">
                    {tunckat(movie?.overview, 150)}</h1>
            </div>
            <div className="header__footer"/>
            
        </div>
    )
}

export default Header
