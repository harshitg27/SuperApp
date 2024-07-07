import React, { useEffect, useState } from 'react'
import Box from '../../components/MoviesCategory/Box'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosWarning } from 'react-icons/io'
import { genres } from '../../assets/data/genres'

import style from './GenrePage.module.css'
import { useNavigate } from 'react-router-dom'
import { removeGenre } from '../../actions/genre'

function GenrePage() {
    // const user = useSelector(store => store.userReducer)

    const selectedGenre = useSelector(store => store.genreReducer).genres
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('selectedGenres', JSON.stringify(selectedGenre))
    }, [selectedGenre])

    const removeCategory = (index) => {
        dispatch(removeGenre(index))
    }
    const handleNext = () => {
        if (selectedGenre.length > 2) {
            navigate('/homepage')
        } else {
            alert('Please select atleast 3 movies')
        }
    }
    return (
        <div className={style.page} >

            <div className={style.left} >
                <div className={style.headers} >
                    <h1 className={style.leftHeader} >Super app</h1>
                    <h2 className={style.leftSubHeader} >
                        Choose Your <br /> entertainment <br /> category
                    </h2>
                </div>

                <div className={style.selected} >
                    {selectedGenre.map((data, idx) => ( 
                        <div className={style.selectedGenre} key={idx} >
                            {genres[data].title} 
                            <button onClick={() => removeCategory(data)} >X</button> 
                        </div>))}
                </div>
                {selectedGenre.length < 3 && <div className={style.warning} >
                    <IoIosWarning /> &nbsp;  Minimum 3 category required</div>}
            </div>


            <div className={style.right} >
                <div className={style.genreGrid} >
                    {genres.map((genre, index) => {
                        return <Box key={index} genre={genre} index={index} />
                    })}
                </div>
                <button className={style.button} onClick={handleNext} >Next Page</button>
            </div>
        </div>
    )
}

export default GenrePage
