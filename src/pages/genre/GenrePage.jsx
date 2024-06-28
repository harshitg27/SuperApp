import React, { useEffect, useState } from 'react'
import Box from '../../components/MoviesCategory/Box'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosWarning} from 'react-icons/io'
import { genres } from '../../assets/data/genres'
import { colors } from '../../assets/data/colors'

import style from './GenrePage.module.css'
import { useNavigate } from 'react-router-dom'

function GenrePage() {
    const user = useSelector(store => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedMovies, setSelectedMovies] = useState([])

    useEffect(() => {
        localStorage.setItem('selectedGenres' , JSON.stringify(selectedMovies))
        console.log(localStorage.getItem('selectedGenres'))
    } , [selectedMovies])
    const removeCategory = (index) =>{
        setSelectedMovies(selectedMovies.filter((catg ,idx) => index !== idx))
    }
    const handleNext = () =>{
        if(selectedMovies.length > 2){
            navigate('/homepage')
        }
    }
    return (
        <div className={style.page} >

            <div className={style.left} >
                <h1>Super app</h1>
                <h2> Choose Your entertainment category</h2>
                <div className={style.selected} >
                    {selectedMovies.map((data , idx) => <div className={style.selectedGenre} key={idx} >{genres[data].title} <button onClick={()=> removeCategory(idx)} >X</button> </div>)}
                </div>
                {selectedMovies.length < 3 && <p style={{color:'red'}}>
                   <IoIosWarning /> Minimum 3 category required</p> }
            </div>


            <div className={style.right} >
                <div className={style.category} >
                    {genres.map((genre , index) => {
                        return <Box key={index} genre={genre} index = {index} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
                    })}
                </div>
                <button className={style.button} onClick={handleNext} >Next Page</button>
            </div>
        </div>
    )
}

export default GenrePage
