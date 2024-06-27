import React from 'react'

import style from './GenrePage.module.css'

function GenrePage() {
    const moviesCategory = [
        {
            id: 1 ,
            name: "Action",
            img: ""
        },
        {
            id: 2 ,
            name: "Drama",
            img: ""
        },
        {
            id: 3 ,
            name: "Romance",
            img: ""
        },
        {
            id: 4 ,
            name: "Thriller",
            img: ""
        },
        {
            id: 5 ,
            name: "Western",
            img: ""
        },
        {
            id: 6 ,
            name: "Horror",
            img: ""
        },
        {
            id: 7 ,
            name: "Fantasy",
            img: ""
        },
        {
            id: 8 ,
            name: "Music",
            img: ""
        },
        {
            id: 9 ,
            name: "Fiction",
            img: ""
        }
    ]
  return (
    <div className={style.page} >
      <div className={style.left} >
        <h1>Super app</h1>
        <h2> Choose Your entertainment category</h2>
        <div></div>
      </div>
      <div className={style.right} >
        <div className={style.category} >
            {moviesCategory.map((catg) =>{
                return <h4>{catg.name}</h4>
            }) }
        </div>
        <button >Next Page</button>
      </div>
    </div>
  )
}

export default GenrePage
