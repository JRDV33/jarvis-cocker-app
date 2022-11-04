import React from 'react'
import Format from './Format'

const Album = ({ album }) => {
  return (
    <div className="albumCard">
      <img src={album.cover} />
      <h4>{album.title}</h4>
      <p>{album.releaseDate}</p>
      <section>
        {album.map((format) => (
          <Format key={album.id} format={format} />
        ))}
      </section>
    </div>
  )
}

export default Album
