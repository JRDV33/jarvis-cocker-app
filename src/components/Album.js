import React from 'react'

const Album = ({ album }) => {
  return (
    <div className="albumCard">
      <img src={album.cover} />
      <div>
        <h4>{album.title}</h4>
        <p>
          {album.releaseDate}, {album.format}
        </p>
      </div>
    </div>
  )
}

export default Album
