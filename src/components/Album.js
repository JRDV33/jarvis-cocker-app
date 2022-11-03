import React from 'react'
// import Format from './Format'

const Album = ({ album }) => {
  return (
    <div className="albumCard">
      <img src={album.cover} />
      <div>
        <h4>{album.title}</h4>
        <p>{album.releaseDate}</p>
        {/* <section>
        {movie.genres.map((genres) => (
          <Format key={format.id} format={format} />
        <section/> */}
      </div>
    </div>
  )
}

export default Album
