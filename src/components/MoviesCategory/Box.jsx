import React from 'react'
import { colors } from '../../assets/data/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addGenre, removeGenre } from '../../actions/genre'

import style from '../../pages/genre/GenrePage.module.css'

function Box({ genre, index }) {
  const selectedGenre = useSelector(store => store.genreReducer).genres
  const dispatch = useDispatch()
  const handleSelection = () => {
    if (selectedGenre.includes(index)) {
      dispatch(removeGenre(index))
    } else {
      dispatch(addGenre(index))
    }
  }

  return (
    <div
    className={style.genreCard}
      style={{
        outline: selectedGenre.includes(index)
          ? "4px solid green"
          : "",
        background: colors[index]
      }}
      onClick={handleSelection} >
      <div className={style.title} >{genre.title} </div>
      <img src={genre.bgImage} alt={genre.title} height='50%' />
    </div>
  )
}

export default Box
