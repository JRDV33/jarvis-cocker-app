import React from 'react'
import Format from './Format'

const Video = ({ video }) => {
  return (
    <div className="videoCard">
      <iframe src={video.video} allowFullScreen></iframe>
      <h4>{video.favoriteSong}</h4>
      <p>{video.releaseDate}</p>
      <section>
        {video.map((format) => (
          <Format key={video.id} format={format} />
        ))}
      </section>
    </div>
  )
}

export default Video
