import React from 'react'

const Video = ({ video }) => {
  return (
    <div className="videoCard">
      <iframe src={video.video} allowFullScreen></iframe>
      <h4>{video.favoriteSong}</h4>
      <p>{video.releaseDate}</p>
    </div>
  )
}

export default Video
