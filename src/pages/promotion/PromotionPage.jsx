import React, { useEffect, useState } from 'react'
import style from './PromotionPage.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import SuggestMovie from './SuggestMovie'
import userAvatar from '../../assets/img/userAvatarBG.png'

function PromotionPage() {
  const [result, setResult] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  // const selectedgenres = useSelector(store => store.genreReducer).genres

  useEffect(() => {
    // console.log(selectedgenres)
    const fetchData = async () => {
      const response = await axios.get('https://api.tvmaze.com/shows')
      setResult(response.data)
      // console.log(response.data)
    }
    fetchData()
    setSelectedGenres(JSON.parse(localStorage.getItem('selectedGenres')))
  }, [])
  return (
    <div className={style.page} >
      <div className={style.header} >
        <div>
          <h1>Super App</h1>
          <h4>Entertainment according to your choice </h4>
        </div>
        <img className={style.avatar} src={userAvatar} alt="" />
      </div>

      <div className={style.grid} >
        {selectedGenres.map((genreId , index)=> {
          return <SuggestMovie key={index} index={genreId} movies={result} />
        })}
      </div>

    </div>
  )
}

export default PromotionPage
