import React from 'react'
import { colors } from '../../assets/data/colors'

function Box({genre , index , selectedMovies , setSelectedMovies}) {
    const handleSelection = () => {
        if(selectedMovies.includes(index)) {
            setSelectedMovies(selectedMovies.filter((id) => id !== index ))
        }else{
          // if(selectedMovies.length < 3 ){
            setSelectedMovies([...selectedMovies , index])
          // }
        }
    }
    
  return (
    <div
    style={{
        border: selectedMovies.includes(index) 
        ? "4px solid green"
        : "",
        padding: '8px' ,
        width: '12vw',
        height: '20vh' ,
        display: 'flex' ,
        flexDirection:'column' ,
        justifyContent: 'space-around',
        borderRadius:'7px' ,
        background: colors[index]
    }}
    onClick={handleSelection} >
      <p>{genre.title} </p>
      <img src={genre.bgImage} alt={genre.title}  height='50%' />
    </div>
  )
}

export default Box
