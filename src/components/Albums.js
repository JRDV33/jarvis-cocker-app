import React from 'react'

const Albums = ({ albums }) => {
  return (
    <div className="albumCard">
      <img src={albums.cover} />
      <h4>{albums.title}</h4>
      <p>{albums.releaseDate}</p>
    </div>
  )
}

export default Albums
