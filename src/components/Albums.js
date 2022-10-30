import React from 'react'

const Albums = ({ albums }) => {
  return (
    <div className="albumCard">
      <img src={albums.cover} />
      <h3>{albums.title}</h3>
      <p>{albums.releaseDate}</p>
    </div>
  )
}

export default Albums
