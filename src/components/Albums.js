import React from 'react'

const Albums = ({ albums }) => {
  return (
    <div className="albumCard">
      <img src={albums.cover} />
      <div>
        <h4>{albums.title}</h4>
        <p>
          {albums.releaseDate}, {albums.format}
        </p>
      </div>
    </div>
  )
}

export default Albums
