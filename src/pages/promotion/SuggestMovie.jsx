import React, { useEffect, useState } from 'react'
import { genres } from '../../assets/data/genres'
import style from './SuggestMovie.module.css'

function SuggestMovie({index , movies}) {
    const [genre , setGenre] = useState();
    const [selectedMovies , setSelectedMovies] =useState([]) ;
    // console.log(movies)
    useEffect(() => {
        // if(index){
            setGenre(genres[index].title)
            // const res = movies.filter((movie) => movie.genres.includes(genre)).slice(0 , 6) ;
        // }
    } , [index])
    useEffect(() => {
        const res = movies?.filter((movie) => movie.genres.includes(genre)).slice(0 , 6) ;
        setSelectedMovies(res) ;
        console.log(res)
    } , [movies])
  return (
    <div className={style.widget} >
        <h3>{genre} </h3>
        <div className={style.catalogue} >
            { selectedMovies?.map((movie , index) => movie && (
                <div key={index} ><img src={movie.image.medium} alt={movie.name} /></div>
            ))}
        </div>
      
    </div>
  )
}

export default SuggestMovie
